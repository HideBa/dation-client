import { auth, uiConfig } from '@dation/auth';
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';

const Signup: React.FC = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
);

export default Signup;
