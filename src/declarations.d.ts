// This file holds ambient type declarations.
interface SiteMetaData {
  site: {
    siteMetadata: {
      title: string;
      position: string;
      description: string;
      author: string;
    };
  };
}

interface Edge {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      background: string;
      category: string;
      date: string;
      date_timestamp?: string;
    };
    timeToRead: string;
  };
}

interface PostListProps {
  allMarkdownRemark: {
    edges: Edge[];
  };
}

interface PostProps {
  markdownRemark: {
    frontmatter: {
      title: string;
      description: string;
      background: string;
      category: string;
      date: string;
      image: string;
    };
    timeToRead: string;
    html: string;
  };
}

interface Link {
  label: string;
  url: string;
}

interface Recommended {
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
  };
}

interface RecommendedPostsProps {
  previousPost?: Recommended;
  nextPost?: Recommended;
}
