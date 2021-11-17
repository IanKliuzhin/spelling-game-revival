import React, { ReactNode } from 'react';

import './style.scss';

export const GlobalWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="globalWrapper">{children}</div>;
};
