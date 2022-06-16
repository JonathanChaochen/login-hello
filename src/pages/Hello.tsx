import { useAuth } from '../context/auth';

const Hello = () => {
  const { setAuth } = useAuth();
  return (
    <div>
      <div>Hello, You are in</div>
      <button onClick={() => setAuth({ username: '', password: '' })}>
        Logout
      </button>
    </div>
  );
};

export default Hello;
