import { create } from 'zustand';
import { authResponse, UserDTO } from '../../../../dto/user.dto';
import { api } from '../api';

interface useAuthStore {
  user?: UserDTO | null; // <-- optional to allow undefined
  token?: string;
  signIn: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  renew: () => Promise<authResponse | null>;
}

export const useAuth = create<useAuthStore>((set) => ({
  user: undefined, // <-- initially "unknown"
  logout: async () => {
    console.log('logout');
    await api.post('auth/logout');
    set({ user: null });
  },
  signIn: async (email: string, password: string): Promise<void> => {
    // login process
    try {
      const r: authResponse = await api
        .post('auth/login', { json: { email, password } })
        .json<authResponse>();
      set({ user: r.user, token: r.token });
    } catch (error: unknown) {
      // Handle authentication errors
      console.error(error);
      set({ user: null }); // <-- auth failed, set null
    }
  },
  renew: async (): Promise<authResponse | null> => {
    try {
      console.log('aa');
      const r: authResponse = await api.get('auth/login').json<authResponse>();
      console.log(r);
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
