import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import CommonLayout from './components/CommonLayout';
import UtilityClasses from './components/StylingWithUtilityClasses/UtilityClasses';
import HoverState from './components/StylingWithUtilityClasses/HoverAndOtherStates/HoverState';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/hover-state');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route path="utility-classes" element={<UtilityClasses />} />
        <Route path="hover-state" element={<HoverState />} />
      </Route>
    </Routes>
  );
}

export default App;
