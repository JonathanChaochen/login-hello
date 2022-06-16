import Hello from '../pages/Hello';
import Login from '../pages/Login';
import { useAuth } from '../context/auth';

const Main = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Hello /> : <Login />;
};

export default Main;
