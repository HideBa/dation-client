import { atom } from 'recoil';
import { User } from 'firebase/auth';

export type CurrentUser = User | null | undefined;

export const currentUser = atom<CurrentUser>({
  key: `currentUser`,
  default: undefined,
});

export const loading = atom<boolean>({
  key: `loading`,
  default: false,
});
