import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

function Account(): ReactElement {
  const { accountId } = useParams();

  return <div>{`hello ${accountId}`}</div>;
}

export default Account;
