import React, { ReactElement } from 'react';
import { useOutlet } from 'react-router-dom';

function Accounts(): ReactElement {
  const outlet = useOutlet();

  return (
    <div>
      Accounts
      {outlet}
    </div>
  );
}

export default Accounts;
