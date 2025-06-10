import NavBar from '../components/Header';
import { Outlet } from 'react-router-dom';
 
const PublicLayout = () => {
  return (
    <div className="App">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
 
export default PublicLayout;