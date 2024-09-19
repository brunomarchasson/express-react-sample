import React from 'react';
import { Suspense } from 'react';
import { useLoaderData, useOutlet, Await } from 'react-router-dom';
import { authResponse } from '../typings/types';
import Loader from '../components/Loader';

export const InitLayout = () => {
  const outlet = useOutlet();

  const { initPromise } = useLoaderData() as {
    initPromise: Promise<authResponse>;
  };
  return (
    <Suspense fallback={<Loader />}>
      <Await
        resolve={initPromise}
        errorElement={<div>Something went wrong!</div>}
      >
        {outlet}
      </Await>
    </Suspense>
  );
};
