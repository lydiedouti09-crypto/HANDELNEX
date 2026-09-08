import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getAdminActualites,
  createActualite,
  updateActualite,
  uploadActualiteImage,
  getMediaUrl
} from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'
import AdminLoading from '../../components/admin/AdminLoading'

const emptyForm = {
  titre: '',
  contenu: '',

  titreFr: '',
  titreEn: '',
  titreDe: '',
  titrePtBr: '',

  contenuFr: '',
  contenuEn: '',
  contenuDe: '',
  contenuPtBr: '',

  image: '',
  imageFr: '',
  imageEn: '',
  imageDe: '',
  imagePtBr: '',

  statut: 'brouillon',
}

function AdminActualiteForm() {
  const { id } = useParams()
  const isEdit = !!id
  const navigate = useNavigate()

  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (!isEdit) return

    async function load() {
      try {
        const all = await getAdminActualites()
        const a = all.find((x) => x.id === Number(id))

        if (a) {
          setForm({
            ...emptyForm,
            ...a,

            titreFr: a.titreFr || a.titre || '',
            titreEn: a.titreEn || '',
            titreDe: a.titreDe || '',
            titrePtBr: a.titrePtBr || '',

            contenuFr: a.contenuFr || a.contenu || '',
            contenuEn: a.contenuEn || '',
            contenuDe: a.contenuDe || '',
            contenuPtBr: a.contenuPtBr || '',

            imageFr: a.imageFr || '',
            imageEn: a.imageEn || '',
            imageDe: a.imageDe || '',
            imagePtBr: a.imagePtBr || '',
          })
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id, isEdit])

  function handleChange(e) {
    const { name, value } = e.target

    setForm((f) => ({
      ...f,
      [name]: value,
    }))
  }

  async function handleImageChange(e, fieldName) {
    const file = e.target.files[0]

    if (!file) return

    if (file.size > 10 * 1024 * 1024) {
      alert("L'image doit faire moins de 10 Mo")
      e.target.value = ''
      return
    }

    setUploading(true)

    try {
      const data = await uploadActualiteImage(file)

      setForm((current) => ({
        ...current,
        [fieldName]: data.url,
      }))
    } catch (err) {
      alert(err.message || "Erreur lors de l'envoi de l'image")
      console.error(err)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)

    const data = {
      ...form,

      // Champs génériques = français
      titre: form.titreFr,
      contenu: form.contenuFr,
    }

    try {
      if (isEdit) {
        await updateActualite(id, data)
      } else {
        await createActualite(data)
      }

      navigate('/admin/actualites')
    } catch (err) {
      alert("Erreur lors de l'enregistrement")
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <AdminLayout title="Actualité">
        <AdminLoading />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout
      title={isEdit ? "Modifier l'actualité" : 'Nouvelle actualité'}
    >
      <form className="admin-form" onSubmit={handleSubmit}>

        {/* =========================
            TITRES
        ========================== */}

        <h3 style={{ marginTop: '10px', color: '#0A2A4A' }}>
          Titres
        </h3>

        <label>
          Titre français
          <input
            name="titreFr"
            value={form.titreFr}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Titre anglais
          <input
            name="titreEn"
            value={form.titreEn}
            onChange={handleChange}
          />
        </label>

        <label>
          Titre allemand
          <input
            name="titreDe"
            value={form.titreDe}
            onChange={handleChange}
          />
        </label>

        <label>
          Titre portugais (Brésil)
          <input
            name="titrePtBr"
            value={form.titrePtBr}
            onChange={handleChange}
          />
        </label>


        {/* =========================
            CONTENU
        ========================== */}

        <h3 style={{ marginTop: '20px', color: '#0A2A4A' }}>
          Contenu
        </h3>

        <label>
          Contenu en français
          <textarea
            name="contenuFr"
            value={form.contenuFr}
            onChange={handleChange}
            rows={6}
            required
          />
        </label>

        <label>
          Contenu en anglais
          <textarea
            name="contenuEn"
            value={form.contenuEn}
            onChange={handleChange}
            rows={6}
          />
        </label>

        <label>
          Contenu en allemand
          <textarea
            name="contenuDe"
            value={form.contenuDe}
            onChange={handleChange}
            rows={6}
          />
        </label>

        <label>
          Contenu en portugais (Brésil)
          <textarea
            name="contenuPtBr"
            value={form.contenuPtBr}
            onChange={handleChange}
            rows={6}
          />
        </label>


        {/* =========================
            IMAGES
        ========================== */}

        <h3 style={{ marginTop: '20px', color: '#0A2A4A' }}>
          Images
        </h3>

        {[
          ['imageFr', 'Image française'],
          ['imageEn', 'Image anglaise'],
          ['imageDe', 'Image allemande'],
          ['imagePtBr', 'Image portugaise (Brésil)'],
        ].map(([fieldName, label]) => (
          <label key={fieldName}>
            {label} (chemin ou URL)

            <input
              name={fieldName}
              value={form[fieldName] || ''}
              onChange={handleChange}
            />

            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                handleImageChange(event, fieldName)
              }
              disabled={uploading}
            />

            {form[fieldName] && (
              <img
                src={getMediaUrl(form[fieldName])}
                alt={`Aperçu ${label}`}
                style={{
                  maxWidth: '220px',
                  maxHeight: '140px',
                  objectFit: 'cover',
                  marginTop: '10px',
                  display: 'block',
                }}
              />
            )}
          </label>
        ))}


        {/* =========================
            STATUT
        ========================== */}

        <label>
          Statut

          <select
            name="statut"
            value={form.statut}
            onChange={handleChange}
          >
            <option value="brouillon">Brouillon</option>
            <option value="publie">Publié</option>
          </select>
        </label>


        {/* =========================
            BOUTONS
        ========================== */}

        <div className="admin-form-actions">
          <button
            type="submit"
            className="admin-btn-primary"
            disabled={saving}
          >
            {saving
              ? 'Enregistrement...'
              : 'Enregistrer'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/admin/actualites')}
          >
            Annuler
          </button>
        </div>

      </form>
    </AdminLayout>
  )
}

export default AdminActualiteForm