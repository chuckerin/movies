import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';

interface RootState {
  auth: {
    user: { name: string } | null;
  };
}

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav>
      <ul className={styles.navWrapper}>
        {user?.name && <li>Welcome {user.name}</li>}
        <li>
          <NavLink to={'/movies/'}>Movies</NavLink>
        </li>
        <li>
          <NavLink to={'/movies/login'}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
