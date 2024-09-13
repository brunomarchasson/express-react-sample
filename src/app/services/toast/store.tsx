import { create } from 'zustand';

type POSITION = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastData {
  profile?: {
    picture: string;
    name: string;
  };
  redirect?: string;
  title?: string;
  message: string;
}

export type Toast = {
  id: number;
  type: 'none' | 'success' | 'error' | 'warning' | 'info';
  position?: POSITION;
  timeout?: number;
  remainingTime?: number;
  startTime?: number;
  data?: ToastData;
  hovered?: boolean;
  closeable?: boolean;
  closing?: boolean;
  timerId?: NodeJS.Timeout;
};

export type ToastProps = {
  toasts: Toast[];
  show: boolean;
  toaster: {
    info: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (message: string) => void;
  };
  addToast: (toast: Partial<Toast>) => void;
  removeToast: (id: number) => void;
  closeToast: (id: number) => void;
  pauseToast: (id: number) => void;
  resumeToast: (id: number) => void;
};

const defaultToast = (): Toast => ({
  id: Date.now(),
  type: 'none',
  position: 'top-right',
  timeout: 5000,
});

export const useToast = create<ToastProps>((set, get) => ({
  toasts: [],
  show: false,
  toaster: {
    info: (message: string) =>
      get().addToast({ ...defaultToast(), type: 'info', data: { message } }),
    success: (message: string) =>
      get().addToast({ ...defaultToast(), type: 'success', data: { message } }),
    warning: (message: string) =>
      get().addToast({ ...defaultToast(), type: 'warning', data: { message } }),
    error: (message: string) =>
      get().addToast({ ...defaultToast(), type: 'error', data: { message } }),
  },
  addToast: (ptoast) => {
    const toast: Toast = { ...defaultToast(), ...ptoast };
    toast.hovered = false;
    toast.remainingTime = toast.timeout;
    toast.startTime = Date.now();
    toast.closeable ??= true;
    set((state) => ({ toasts: [...state.toasts, toast], show: true }));
    if (toast.timeout) {
      toast.timerId = setTimeout(() => {
        if (!toast.hovered) {
          get().closeToast(toast.id);
        }
      }, toast.timeout);
    }
  },
  removeToast: (id: number) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
      show: state.toasts.length > 1,
    }));
  },
  closeToast: (id: number) => {
    set((state) => {
      const toast = state.toasts.find((toast) => toast.id === id);
      if (toast) {
        toast.closing = true;
      }
      return { toasts: [...state.toasts] };
    });
  },
  pauseToast: (id: number) => {
    set((state) => {
      const toast = state.toasts.find((toast) => toast.id === id);
      if (toast) {
        toast.hovered = true;
        if (toast.timerId) {
          clearTimeout(toast.timerId);
          if (
            toast.remainingTime !== undefined &&
            toast.startTime !== undefined
          ) {
            toast.remainingTime -= Date.now() - toast.startTime;
          }
        }
      }
      return { toasts: [...state.toasts] };
    });
  },
  resumeToast: (id: number) => {
    set((state) => {
      const toast = state.toasts.find((toast) => toast.id === id);
      if (toast) {
        toast.hovered = false;
        toast.startTime = Date.now();
        if (toast.timerId) {
          toast.timerId = setTimeout(() => {
            if (!toast.hovered) {
              get().closeToast(toast.id);
            }
          }, toast.remainingTime);
        }
      }
      return { toasts: [...state.toasts] };
    });
  },
}));
