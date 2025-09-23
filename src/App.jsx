import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import CommonLayout from './components/CommonLayout';
import HoverState from './components/StylingWithUtilityClasses/HoverAndOtherStates/HoverState';
import { useEffect } from 'react';
import ResponsiveDesign from './components/StylingWithUtilityClasses/Responsive Design/ResponsiveDesign';
import Darkmode from './components/StylingWithUtilityClasses/DarkMode/Darkmode';
import ThemeVariables from './components/StylingWithUtilityClasses/Theme Variables/ThemeVariables';
import Colors from './components/StylingWithUtilityClasses/Colors/Colors';
import CustomStyles from './components/StylingWithUtilityClasses/CustomStyles/CustomStyles';

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
        <Route path="hover-state" element={<HoverState />} />
        <Route path="responsive-design" element={<ResponsiveDesign />} />
        <Route path="dark-mode" element={<Darkmode />} />
        <Route path="theme-variables" element={<ThemeVariables />} />
        <Route path="theme-variables" element={<ThemeVariables />} />
        <Route path="colors" element={<Colors />} />
        <Route path="custom-styles" element={<CustomStyles />} />
      </Route>
    </Routes>
  );
}

export default App;
