import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAdminSolutions, createSolution, updateSolution } from '../../api'
import AdminLayout from '../../components/admin/AdminLayout'

const emptyForm = {
  nom: '', slug: '', description: '', descriptionComplete: '',
  image: '', icone: '', categorie: '', lienGooglePlay: '',
  statut: 'brouillon', ordreAffichage: 0,
}

function AdminSolutionForm() {
  const { id } = useParams()
  const isEdit = !!id
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!isEdit) return
    async function load() {
      const all = await getAdminSolutions()
      const s = all.find((x) => x.id === Number(id))
      if (s) setForm({ ...emptyForm, ...s })
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
        await updateSolution(id, form)
      } else {
        await createSolution(form)
      }
      navigate('/admin/solutions')
    } catch (err) {
      alert("Erreur lors de l'enregistrement");
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <AdminLayout title="Solution"><p>Chargement...</p></AdminLayout>

  return (
    <AdminLayout title={isEdit ? 'Modifier la solution' : 'Nouvelle solution'}>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Nom
          <input name="nom" value={form.nom} onChange={handleChange} required />
        </label>
        <label>
          Slug (URL, ex: voyage-billetterie)
          <input name="slug" value={form.slug} onChange={handleChange} required />
        </label>
        <label>
          Catégorie
          <input name="categorie" value={form.categorie} onChange={handleChange} />
        </label>
        <label>
          Description courte
          <textarea name="description" value={form.description} onChange={handleChange} rows={2} />
        </label>
        <label>
          Description complète
          <textarea name="descriptionComplete" value={form.descriptionComplete} onChange={handleChange} rows={4} />
        </label>
        <label>
          Image (chemin ou URL)
          <input name="image" value={form.image} onChange={handleChange} />
        </label>
        <label>
          Icône
          <input name="icone" value={form.icone} onChange={handleChange} />
        </label>
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