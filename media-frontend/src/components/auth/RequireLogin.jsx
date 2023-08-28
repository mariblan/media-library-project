import { Outlet, Navigate } from 'react-router-dom';

const RequireLogin = ({ isAuth }) => {
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireLogin;
