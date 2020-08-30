import React from 'react';

import PostItem from '../PostItem';

interface HitProps {
  hit: {
    fields: {
      slug: string;
    };
    title: string;
    description: string;
    background: string;
    timeToRead: number;
    category: string;
    date: string;
  };
}

const Hit: React.FC<HitProps> = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    timeToRead={hit.timeToRead}
    background={hit.background}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
);

export default Hit;
