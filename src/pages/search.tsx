import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '@/components/Layout';
import Search from '@/components/Search';

const SearchPage: React.FC<PageProps> = () => (
  <Layout>
    <Search />
  </Layout>
);

export default SearchPage;
