import { create } from 'zustand';
import { UserDTO, UserInType } from '../../comon/types/api';
import { api } from '../services/api';

export interface usersStore {
  list: Array<UserDTO>;
  loading: boolean;
  error: boolean;
  load: () => Promise<void>;
  create: (data: UserInType) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

async function _fetch(): Promise<Array<UserDTO>> {
  const response = await api.get('users').json<{ results: Array<UserDTO> }>();
  console.log('response', response);
  return response.results;
}

async function _create(data: UserInType): Promise<UserDTO> {
  const response = await api
    .post('auth/invitations', { json: data })
    .json<UserDTO>();
  return response;
}

async function _delete(id: string) {
  await api.delete(`users/${id}`);
}

export const useUsersStore = create<usersStore>((set) => ({
  list: [],
  loading: false,
  error: false,
  load: async () => {
    try {
      set((state) => ({ ...state, error: false, loading: true }));
      const d = await _fetch();
      set((state) => ({ ...state, list: d }));
    } catch (e) {
      console.error(e);
      set((state) => ({ ...state, error: true }));
      throw e;
    } finally {
      set((state) => ({ ...state, loading: false }));
    }
  },
  create: (d: UserInType) =>
    _create(d).then((newItem) =>
      set((state) => {
        console.log('sss', state);
        return {
          ...state,
          list: [...state.list, newItem],
        };
      }),
    ),
  delete: _delete,
}));
