import firebase from 'firebase/compat/app';

const uiConfig = {
  signInFlow: `popup`,
  signInSuccessUrl: `/`,
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default uiConfig;
