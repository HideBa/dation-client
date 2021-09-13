import React from 'react';
import { default as LoginComponent } from '@dation/components/Auth/Login';

export type Props = {
  className?: string;
};

const Login: React.FC<Props> = () => <LoginComponent />;

export default Login;
