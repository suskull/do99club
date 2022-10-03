import React from 'react';
import Header from 'components/molecules/Header';

interface Props {
  children: React.ReactNode;
}

function Authenticated(props: Props) {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
}

export default Authenticated;
