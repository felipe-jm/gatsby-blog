import React from 'react';

import { MenuProvider } from '@/hooks/menu';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);
