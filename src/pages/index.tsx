import React from 'react';
import Link from 'next/link';
import AuthenticationRequiredPage from '@dation/auth/authenticationRequiredPage';

const Home: React.FC = () => (
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
    </div>
  </AuthenticationRequiredPage>
);

export default Home;
