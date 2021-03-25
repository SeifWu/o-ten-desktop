import React, { ReactNode } from 'react';
import Header from '@/components/Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
