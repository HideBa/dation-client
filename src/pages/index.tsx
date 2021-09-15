import React from 'react';
import Link from 'next/link';
import AuthenticationRequiredPage from '@dation/auth/authenticationRequiredPage';
import { useAuth } from '@dation/auth';

const Home: React.FC = () => {
  const { logout } = useAuth();
  return (
    <AuthenticationRequiredPage>
      <div>
        <Link href="/signup">
          <a>sign up</a>
        </Link>
        <br />
        <Link href="/login">
          <a>login</a>
        </Link>
        <br />
        <br />
        <button onClick={logout} type="button">
          logout
        </button>
      </div>
    </AuthenticationRequiredPage>
  );
};

export default Home;
