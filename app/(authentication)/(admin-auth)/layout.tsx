import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}


export default function DbAuthLayout({ children }:ChildrenProps) {
  return (
    <div>
      {children}
    </div>
  );
}
