require('dotenv').config();

const postsQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          background
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
        }
        timeToRead
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

function flatten(edges) {
  const formattedEdges = edges.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0),
      10,
    ),
  }));

  return formattedEdges;
}

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'Posts',
    settings: { attributes: ['excerpt: 20'] },
  },
];

module.exports = queries;
