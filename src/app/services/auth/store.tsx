import { create } from 'zustand';
import { api } from '../api';
import { KyResponse } from 'ky';
import type {
  LoginResponseSchemaType,
  UserDTO,
} from '../../../comon/types/api';
interface useAuthStore {
  user?: UserDTO | null; // <-- optional to allow undefined
  token?: string;
  signIn: (username: string, password: string) => Promise<void>;
  forgot: (email: string) => Promise<KyResponse<unknown>>;
  logout: () => Promise<void>;
  renew: () => Promise<LoginResponseSchemaType | null>;
}

export const useAuth = create<useAuthStore>((set) => ({
  user: undefined, // <-- initially "unknown"
  logout: async () => {
    await api.post('auth/logout');
    set({ user: null });
  },
  signIn: async (email: string, password: string): Promise<void> => {
    // login process
    try {
      const r: LoginResponseSchemaType = await api
        .post('auth/login/email', { json: { email, password } })
        .json<LoginResponseSchemaType>();
      set({ user: r.user, token: r.token });
    } catch (error: unknown) {
      // Handle authentication errors
      console.error(error);
      set({ user: null }); // <-- auth failed, set null
    }
  },
  forgot: async (email: string) => {
    return api.post('auth/forget-password', { json: { email } });
  },
  renew: async (): Promise<LoginResponseSchemaType | null> => {
    try {
      const r: LoginResponseSchemaType = await api
        .get('auth/login')
        .json<LoginResponseSchemaType>();
      set({ user: r.user, token: r.token });
      return r;
    } catch (error: unknown) {
      // Handle authentication errors
      console.error(error);
      set({ user: null }); // <-- auth failed, set null
      return null;
    }
  },
}));
