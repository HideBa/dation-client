/* eslint-disable no-console */
/* eslint-disable import/no-anonymous-default-export */
import { useCurrentUser, useLoading } from '@dation/state/jotai';
import { FirebaseError } from 'firebase/app';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { googleProvider, auth } from './firebase';

export default () => {
  const router = useRouter();
  const [userState, setUserState] = useCurrentUser();
  const [loadingState, setLoadingState] = useLoading();

  const signUp = useCallback(
    async (email: string, password: string) => {
      setLoadingState(true);
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push(`/`);
      } catch (err) {
        console.error(err);
      }
      setLoadingState(false);
    },
    [router, setLoadingState],
  );

  const googleSignUp = useCallback(async () => {
    setLoadingState(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const { user } = result;
      console.log(token, user);
      router.push(`/`);
    } catch (err) {
      if (err instanceof FirebaseError) {
        const errCode = err.code;
        const errMessage = err.message;
        // const { email } = err;
        // const credential = GoogleAuthProvider.credentialFromError(err);
        console.error(`ERR: ${errCode}`);
        console.error(`ERR: ${errMessage}`);
      }
    } finally {
      setLoadingState(false);
    }
  }, [router, setLoadingState]);

  const logIn = useCallback(
    async (email: string, password: string) => {
      setLoadingState(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push(`/`);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingState(false);
      }
    },
    [router, setLoadingState],
  );

  const logout = useCallback(async () => {
    setLoadingState(true);
    try {
      signOut(auth);
      router.push(`/login`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingState(false);
    }
  }, [router, setLoadingState]);

  const isLoggedIn = !!auth.currentUser;

  // const resetPassword = async (email: string) => {
  //   if (!process.env.APP_URL) return;

  //   setLoadingState(true);
  //   const actionCodeSettings = {
  //     url: process.env.APP_URL,
  //   };
  //   try {
  //     auth.sendPasswordResetEmail(email, actionCodeSettings);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoadingState(false);
  // };

  // const sendEmailValidation = async () => {
  //   if (!process.env.APP_URL) return;
  //   const actionCodeSettings = {
  //     url: process.env.APP_URL,
  //   };
  //   try {
  //     userState?.sendEmailVerification(actionCodeSettings);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const updatePassowrd = async (password: string) => {
  //   setLoadingState(true);
  //   try {
  //     await userState?.updatePassword(password);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoadingState(false);
  // };

  // const updateEmail = async (email: string) => {
  //   setLoadingState(true);
  //   try {
  //     await userState?.updateEmail(email);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoadingState(false);
  // };

  onAuthStateChanged(auth, (user) => {
    setUserState(user);
  });

  return {
    isLoading: loadingState,
    logIn,
    signUp,
    isLoggedIn,
    googleSignUp,
    logout,
    currentUser: userState,
    // resetPassword,
    // updateEmail,
    // updatePassowrd,
    // sendEmailValidation,
  };
};
