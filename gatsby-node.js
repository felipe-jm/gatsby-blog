const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// Adding slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `pages` directory into `/posts/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              image
              background
              category
              date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
            }
            timeToRead
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node, previous, next }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.tsx'),
        context: {
          slug: node.fields.slug,
          previousPost: previous,
          nextPost: next,
        },
      });
    });

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/' : `page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.tsx'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
