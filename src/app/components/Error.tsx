import React, { ReactElement } from 'react';

interface Props {
  error?: Error;
}

function Error({ error }: Props): ReactElement {
  if (error) console.error(error);

  return <div>Error</div>;
}

export default Error;
