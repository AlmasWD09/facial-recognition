import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}


export default function WebAuthLayout({ children }:ChildrenProps) {
  return (
    <div>
      {children}
    </div>
  );
}
