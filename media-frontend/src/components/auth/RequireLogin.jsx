import { Outlet, Navigate } from 'react-router-dom';

const RequireLogin = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireLogin;