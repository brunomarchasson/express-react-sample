import React from 'react';
import { Suspense } from 'react';
import { useLoaderData, useOutlet, Await } from 'react-router-dom';
import { authResponse } from '../typings/types';

export const InitLayout = () => {
  const outlet = useOutlet();

  const { initPromise } = useLoaderData() as {
    initPromise: Promise<authResponse>;
  };
  console.log('init');
  return (
    <Suspense fallback={<div>loading</div>}>
      <Await
        resolve={initPromise}
        errorElement={<div>Something went wrong!</div>}
      >
        {outlet}
      </Await>
    </Suspense>
  );
};
