import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
          <NavLink
            to='/'
            style={({ isActive }) =>
              isActive
                ? { color: 'white', textDecoration: 'none' }
                : { color: 'red', textDecoration: 'none' }
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/films'
            style={({ isActive }) =>
              isActive
                ? { color: 'white', textDecoration: 'none' }
                : { color: 'red', textDecoration: 'none' }
            }
          >
            Films
          </NavLink>
          <NavLink
            to='/series'
            style={({ isActive }) =>
              isActive
                ? { color: 'white', textDecoration: 'none' }
                : { color: 'red', textDecoration: 'none' }
            }
          >
            Series
          </NavLink>
        </div>
        <div className='navbar-right'>
          <h1>
            <a>Netflopy</a>
          </h1>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
