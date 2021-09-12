import { currentUser } from '@dation/localState/recoil/atom';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export type Props = {
  children: React.ReactElement<any, any>;
};

const AuthenticationRequiredPage: React.FC<Props> = ({ children }) => {
  const user = useRecoilValue(currentUser);
  const router = useRouter();
  useEffect(() => {
    router.push(`/login`);
  }, [router]);
  return user ? children : null;
};

export default AuthenticationRequiredPage;
