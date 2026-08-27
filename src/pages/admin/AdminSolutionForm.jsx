import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAdminSolutions, createSolution, updateSolution, uploadImage, getMediaUrl } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'
import AdminLoading from '../../components/admin/AdminLoading'

const emptyForm = {
  nom: '', description: '', nomFr: '', nomEn: '', nomDe: '', descriptionFr: '', descriptionEn: '', descriptionDe: '', descriptionComplete: '',
  image: '', imageFr: '', imageEn: '', imageDe: '', icone: '', categorie: '', lienGooglePlay: '',
  statut: 'brouillon', ordreAffichage: 0,
}

function AdminSolutionForm() {
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
      const all = await getAdminSolutions()
      const s = all.find((x) => x.id === Number(id))
      if (s) setForm({
        ...emptyForm,
        ...s,
        nomFr: s.nomFr || s.nom || '',
        descriptionFr: s.descriptionFr || s.description || '',
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
      const data = await uploadImage(file)
      setForm((current) => ({ ...current, [fieldName]: data.url }))
    } catch (err) {
      alert("Erreur lors de l'envoi de l'image")
      console.error(err)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    const data = { ...form, nom: form.nomFr, description: form.descriptionFr }
    try {
      if (isEdit) {
        await updateSolution(id, data)
      } else {
        await createSolution(data)
      }
      navigate('/admin/solutions')
    } catch (err) {
      alert("Erreur lors de l'enregistrement");
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <AdminLayout title="Solution"><AdminLoading /></AdminLayout>

  return (
    <AdminLayout title={isEdit ? 'Modifier la solution' : 'Nouvelle solution'}>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Nom français
          <input name="nomFr" value={form.nomFr} onChange={handleChange} required />
        </label>
        <label>
          Nom anglais
          <input name="nomEn" value={form.nomEn} onChange={handleChange} />
        </label>
        <label>
          Nom allemand
          <input name="nomDe" value={form.nomDe} onChange={handleChange} />
        </label>
        <label>
          Catégorie
          <input name="categorie" value={form.categorie} onChange={handleChange} />
        </label>
        <label>
          Description courte en français
          <textarea name="descriptionFr" value={form.descriptionFr} onChange={handleChange} rows={2} required />
        </label>
        <label>
          Description courte en anglais
          <textarea name="descriptionEn" value={form.descriptionEn} onChange={handleChange} rows={2} />
        </label>
        <label>
          Description courte en allemand
          <textarea name="descriptionDe" value={form.descriptionDe} onChange={handleChange} rows={2} />
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
          Lien Google Play
          <input name="lienGooglePlay" value={form.lienGooglePlay} onChange={handleChange} />
        </label>
        <label>
          Statut
          <select name="statut" value={form.statut} onChange={handleChange}>
            <option value="brouillon">Brouillon</option>
            <option value="publie">Publié</option>
          </select>
        </label>
        <label>
          Ordre d'affichage
          <input type="number" name="ordreAffichage" value={form.ordreAffichage} onChange={handleChange} />
        </label>

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? 'Enregistrement...' : 'Enregistrer'}
          </button>
          <button type="button" onClick={() => navigate('/admin/solutions')}>Annuler</button>
        </div>
      </form>
    </AdminLayout>
  )
}

export default AdminSolutionForm