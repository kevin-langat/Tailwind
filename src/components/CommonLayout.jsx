import { Outlet } from 'react-router-dom';
import NavBar from './StylingWithUtilityClasses/NavBar';

function CommonLayout() {
  return (
    <div className=" flex flex-col items-center min-h-[100vh] w-full bg-gray-50 gap-2">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default CommonLayout;
