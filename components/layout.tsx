import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      ha
      {children}
    </React.Fragment>
  );
};

export default Layout;
