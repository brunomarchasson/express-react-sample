import { create } from 'zustand';

export type LoaderProps = {
  loaders: number[];
  addLoader: () => number;
  removeLoader: (id: number) => void;
};

export const useLoader = create<LoaderProps>((set) => ({
  loaders: [],
  addLoader: () => {
    const id = Date.now();
    set((state) => ({ loaders: [...state.loaders, id] }));
    return id;
  },
  removeLoader: (id: number) => {
    set((state) => ({
      loaders: state.loaders.filter((i) => i !== id),
    }));
  },
}));
