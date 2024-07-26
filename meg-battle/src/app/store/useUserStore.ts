// useUserStore.ts
import { create } from 'zustand';
import { ITelegramUser } from '../utils/types';

interface UserStore {
  user: ITelegramUser | null;
  setUser: (user: ITelegramUser | null) => void;
}

// Create the store
export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
