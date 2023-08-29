import './App.css';
import { media, sections } from './assets/media.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/RoutingComponents/Home';
import Films from './components/RoutingComponents/Films';
import Film from './components/RoutingComponents/Film';
import Series from './components/RoutingComponents/Series';
import Serie from './components/RoutingComponents/Serie';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import RequireLogin from './components/auth/RequireLogin';
import User from './components/auth/User';
import { useState, useEffect } from 'react';
import { checkValidToken } from './components/DB/fetchDB';

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  token && console.log(token);
  console.log(isAuth);
  user && console.log(user);

  useEffect(() => {
    const verifyLogin = async () => {
      const res = await checkValidToken(token);
      if (!res) throw new Error(`${res}`);
      if (res) {
        setUser(res);
        setIsAuth(true);
      }
    };

    token && verifyLogin();
  }, [token]);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route
              path={'/'}
              element={<Home media={media} sections={sections} />}
            ></Route>
            <Route
              path={'/films'}
              element={<Films media={media} sections={sections} />}
            ></Route>
            <Route path={'/films/:id'} element={<Film media={media} />} />
            <Route
              path={'/series'}
              element={<Series media={media} sections={sections} />}
            >
              <Route
                path={':id'}
                element={<Serie media={media} sections={sections} />}
              />
            </Route>
            <Route
              path={'/series/:id'}
              element={<Serie media={media} sections={sections} />}
            />
          </Route>
          <Route
            path={'/register'}
            element={
              <Register
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                setToken={setToken}
              />
            }
          />
          <Route
            path={'/login'}
            element={
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                setToken={setToken}
              />
            }
          />
          <Route
            path={'/user'}
            element={<RequireLogin user={user} isAuth={isAuth} />}
          >
            <Route path={'/user/dashboard'} element={<User user={user} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
