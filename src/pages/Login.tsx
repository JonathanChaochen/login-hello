import React, { useState } from 'react';
import { useAuth } from '../context/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setAuth } = useAuth();
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuth({ username, password });
  };
  return (
    <form onSubmit={formHandler}>
      <label>username:</label>
      <input
        data-testid="username-input"
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>password:</label>
      <input
        data-testid="password-input"
        type="text"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="login" data-testid="login-button" />
    </form>
  );
};

export default Login;
