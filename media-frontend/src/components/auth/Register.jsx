import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [{ name, email, password }, setCredentials] = useState({});

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Username</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={handleChange}
          />
        </div>
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
        <button type='submit'>Register</button>
      </form>
      <span className='changeAuth'>
        Already have an account?
        <button onClick={() => navigate('/login')}>Log in</button>
      </span>
    </div>
  );
}

export default Register;
