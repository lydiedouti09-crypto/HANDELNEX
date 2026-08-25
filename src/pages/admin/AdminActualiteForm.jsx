import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAdminActualites, createActualite, updateActualite } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'

const emptyForm = {
  titre: '', slug: '', contenu: '', image: '',
  statut: 'brouillon', datePublication: '',
}

function AdminActualiteForm() {
  const { id } = useParams()
  const isEdit = !!id
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!isEdit) return
    async function load() {
      const all = await getAdminActualites()
      const a = all.find((x) => x.id === Number(id))
      if (a) setForm({ ...emptyForm, ...a })
      setLoading(false)
    }
    load()
  }, [id, isEdit])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    try {
      if (isEdit) {
        await updateActualite(id, form)
      } else {
        await createActualite(form)
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
          Titre
          <input name="titre" value={form.titre} onChange={handleChange} required />
        </label>
        <label>
          Slug (URL)
          <input name="slug" value={form.slug} onChange={handleChange} required />
        </label>
        <label>
          Contenu
          <textarea name="contenu" value={form.contenu} onChange={handleChange} rows={6} />
        </label>
        <label>
          Image (chemin ou URL)
          <input name="image" value={form.image} onChange={handleChange} />
        </label>
        <label>
          Date de publication
          <input type="date" name="datePublication" value={form.datePublication} onChange={handleChange} />
        </label>
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