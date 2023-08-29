import { Outlet, Navigate } from 'react-router-dom';

const RequireLogin = ({ isAuth, user }) => {
  return user && isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireLogin;
