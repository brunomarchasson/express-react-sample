import React, { useEffect } from 'react';
import { useLoader } from './store';

export const GlobalLoader = () => {
  const loaders = useLoader((s) => s.loaders);

  if (!loaders.length) return;

  return <div className="loader--linear"></div>;
};

GlobalLoader.Loader = () => {
  const addLoader = useLoader((s) => s.addLoader);
  const removeLoader = useLoader((s) => s.removeLoader);

  useEffect(() => {
    const id = addLoader();
    return () => removeLoader(id);
  }, []);

  return null;
};
