import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Pages from '../components/Pages';

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Pages />
    </div>
  );
};

export default Root;
