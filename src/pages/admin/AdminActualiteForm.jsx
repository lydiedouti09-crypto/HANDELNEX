import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAdminActualites, createActualite, updateActualite, uploadActualiteImage, getMediaUrl } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'

const emptyForm = {
  titre: '', contenu: '', titreFr: '', titreEn: '', titreDe: '', contenuFr: '', contenuEn: '', contenuDe: '', image: '', imageFr: '', imageEn: '', imageDe: '',
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
      const all = await getAdminActualites()
      const a = all.find((x) => x.id === Number(id))
      if (a) setForm({
        ...emptyForm,
        ...a,
        titreFr: a.titreFr || a.titre || '',
        contenuFr: a.contenuFr || a.contenu || '',
      })
      setLoading(false)
    }
    load()
  }, [id, isEdit])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
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
      setForm((current) => ({ ...current, [fieldName]: data.url }))
    } catch (err) {
      alert(err.message)
      console.error(err)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    const data = { ...form, titre: form.titreFr, contenu: form.contenuFr }
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

  if (loading) return <AdminLayout title="Actualité"><p>Chargement...</p></AdminLayout>

  return (
    <AdminLayout title={isEdit ? "Modifier l'actualité" : 'Nouvelle actualité'}>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Titre français
          <input name="titreFr" value={form.titreFr} onChange={handleChange} required />
        </label>
        <label>
          Titre anglais
          <input name="titreEn" value={form.titreEn} onChange={handleChange} />
        </label>
        <label>
          Titre allemand
          <input name="titreDe" value={form.titreDe} onChange={handleChange} />
        </label>
        <label>
          Contenu en français
          <textarea name="contenuFr" value={form.contenuFr} onChange={handleChange} rows={6} required />
        </label>
        <label>
          Contenu en anglais
          <textarea name="contenuEn" value={form.contenuEn} onChange={handleChange} rows={6} />
        </label>
        <label>
          Contenu en allemand
          <textarea name="contenuDe" value={form.contenuDe} onChange={handleChange} rows={6} />
        </label>
        {[
          ['imageFr', 'Image française'],
          ['imageEn', 'Image anglaise'],
          ['imageDe', 'Image allemande'],
        ].map(([fieldName, label]) => (
          <label key={fieldName}>
            {label} (chemin ou URL)
            <input name={fieldName} value={form[fieldName]} onChange={handleChange} />
            <input type="file" accept="image/*" onChange={(event) => handleImageChange(event, fieldName)} disabled={uploading} />
            {form[fieldName] && <img src={getMediaUrl(form[fieldName])} alt={`Aperçu ${label}`} style={{ maxWidth: '220px', maxHeight: '140px', objectFit: 'cover' }} />}
          </label>
        ))}
        <label>
          Statut
          <select name="statut" value={form.statut} onChange={handleChange}>
            <option value="brouillon">Brouillon</option>
            <option value="publie">Publié</option>
          </select>
        </label>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? 'Enregistrement...' : 'Enregistrer'}
          </button>
          <button type="button" onClick={() => navigate('/admin/actualites')}>Annuler</button>
        </div>
      </form>
    </AdminLayout>
  )
}

export default AdminActualiteForm