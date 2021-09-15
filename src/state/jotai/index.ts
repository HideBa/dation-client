import { atom, useAtom } from 'jotai';
import { User } from 'firebase/auth';

export type CurrentUser = User | null | undefined;

const currentUser = atom<CurrentUser>(undefined);
export const useCurrentUser = () => useAtom(currentUser);

const loading = atom<boolean>(false);
export const useLoading = () => useAtom(loading);
