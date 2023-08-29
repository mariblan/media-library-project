import { Outlet, Navigate } from 'react-router-dom';

const RequireLogin = () => {
  const boolean = false;
  return boolean ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireLogin;
