import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../DB/fetchDB';

function Login({ isAuth, setToken }) {
  const navigate = useNavigate();

  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) throw new Error('Please fill in all fields!');

      const res = await loginUser({ email, password });

      if (!res) throw new Error(`${res}`);

      if (res.token) {
        localStorage.setItem('token', res.token);
        return setToken(res.token);
      }

      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  if (isAuth) return <Navigate to='/' />;
  else
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
