// Affiche une icône Google Material Symbols à partir de son nom.
// Liste complète des noms disponibles : https://fonts.google.com/icons
function Icon({ name, size = 22, style = {}, ...props }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, ...style }}
      {...props}
    >
      {name}
    </span>
  )
}

export default Icon