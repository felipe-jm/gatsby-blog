import { PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/Layout';
import Search from '@/components/Search';

const SearchPage: React.FC<PageProps> = () => (
  <Layout>
    <Search />
  </Layout>
);

export default SearchPage;
