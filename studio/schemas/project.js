export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre'
    }, {
      name: 'url',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'dateStarted',
      type: 'date',
      title: 'Fechas de Inicio'
    },
    { name: 'importance', type: "number", title: 'Importancias', description: 'Un número del 1 al 5' },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
      ]
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
    {
      title: "Contenido",
      type: "markdown",
      description: "A Github flavored markdown field with image uploading",
      name: "content"
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }
  ]
}