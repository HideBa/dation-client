import { useCurrentUser, useLoading } from '@dation/state/jotai';
import Loading from '@dation/components/Basic/Loading';

export type Props = {
  children: React.ReactElement<any, any>;
};

const AuthenticationRequiredPage: React.FC<Props> = ({ children }) => {
  const [user] = useCurrentUser();
  const [loading] = useLoading();
  return loading ? <Loading size="lg" /> : user ? children : null;
};

export default AuthenticationRequiredPage;
