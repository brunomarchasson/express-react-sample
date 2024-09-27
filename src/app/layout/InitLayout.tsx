import React from 'react';
import { Suspense } from 'react';
import { useLoaderData, useOutlet, Await } from 'react-router-dom';
import { GlobalLoader } from '../services/global-loader/Loader';
import { LoginResponseSchemaType } from '../../comon/types/api';

export const InitLayout = () => {
  const outlet = useOutlet();

  const { initPromise } = useLoaderData() as {
    initPromise: Promise<LoginResponseSchemaType>;
  };
  return (
    <>
      <GlobalLoader />
      <Suspense fallback={<GlobalLoader.Loader />}>
        <Await
          resolve={initPromise}
          errorElement={<div>Something went wrong!</div>}
        >
          {outlet}
        </Await>
      </Suspense>
    </>
  );
};
