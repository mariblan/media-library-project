import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [{ name, email, password }, setCredentials] = useState({});

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Log In</button>
      </form>
      <span className='changeAuth'>
        Don't have an account yet?
        <button onClick={() => navigate('/register')}>Register</button>
      </span>
    </div>
  );
}

export default Login;
