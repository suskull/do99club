import React from 'react';

interface Props {
  spinning?: boolean;
  children: React.ReactNode;
}

export function Spin(props: Props) {
  const { children, spinning = false } = props;
  return (
    <div>
      {children}
    </div>
  );
}
