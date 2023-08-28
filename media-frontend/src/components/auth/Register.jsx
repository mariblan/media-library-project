import { useState } from 'react';
import { registerUser } from '../DB/fetchDB';
import { Navigate, useNavigate } from 'react-router-dom';

function Register({ isAuth, setToken }) {
  const [{ name, email, password }, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(name, email, password);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!name || !email || !password) throw new Error('Missing fields');
      let nameValidation = '';
      let emailValidation = '';
      let passwordValidation = '';

      if (!name.match(/^[a-zA-Z]+$/))
        nameValidation += 'Name can only contain numbers or characters';
      if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/))
        emailValidation += 'Your email must have the right format';
      if (password.length < 6 || password.length > 30)
        passwordValidation +=
          'Your password must be at least 6 characters long and a maximum of 30 characters';

      if (nameValidation || emailValidation || passwordValidation)
        throw new Error(
          nameValidation + '\n' + emailValidation + '\n' + passwordValidation
        );

      const res = await registerUser({ name, email, password });

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
