import React, { useState, useContext } from 'react';
import { useMutation, ClientContext } from 'graphql-hooks';

const LOGIN_MUTATION = `mutation LoginUser (name: String!, password: String!) {
  loginUser(name: $name, password: $password) {
    token
  }
}`;

const Login = () => {
  const client = useContext(ClientContext);
  const [loginUserMutation] = useMutation(LOGIN_MUTATION);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await loginUserMutation({
      variables: { userName, password },
    });
    if (error) {
      // your code to handle login error
    } else {
      const { token } = data.loginUser;
      client.setHeader('Authorization', `Bearer ${token}`);
      // your code to handle token in browser and login redirection
    }
  };
  return (
    <form onSubmit={handleLogin}>
      User Name:{' '}
      <input
        type={'text'}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      PassWord:{' '}
      <input
        type={'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type={'submit'} value={'Login'} />
    </form>
  );
};

export default Login;
