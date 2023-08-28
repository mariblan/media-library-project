import { useState } from 'react';
import { loginUser } from '../DB/fetchDB';
import { Navigate, useNavigate } from 'react-router-dom';

function Login({ isAuth, setToken }) {
  const [{ email, password }, setFormState] = useState({
    email: '',
    password: '',
  });
  console.log(isAuth);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) throw new Error('Missing fields');
      const res = await loginUser({ email, password });
      if (!res) throw new Error(`${res}`);
      if (res.token) {
        localStorage.setItem('token', res.token);
        return setToken(res.token);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isAuth) <Navigate to={'../auth/dashboard'} />;
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
