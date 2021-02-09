const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allStrapiCategory {
        edges {
          node {
            name
            strapiId
          }
        }
      }
    }
  `)
  const allCategories = result.data.allStrapiCategory.edges.map(category => ({
    name: category.node.name.replace(/\s+/g, '-'),
    id: category.node.strapiId
  }))

  allCategories.forEach(category => {
    createPage({
      path: `/gallery/${category.name}`,
      component: path.resolve('./src/templates/singleAlbum.tsx'),
      context: {
        id: category.id
      }
    })
  })
}
