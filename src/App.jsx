import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import CommonLayout from './components/CommonLayout';
import HoverState from './components/StylingWithUtilityClasses/HoverAndOtherStates/HoverState';
import { useEffect } from 'react';
import ResponsiveDesign from './components/StylingWithUtilityClasses/Responsive Design/ResponsiveDesign';
import Darkmode from './components/StylingWithUtilityClasses/DarkMode/Darkmode';
import ThemeVariables from './components/StylingWithUtilityClasses/Theme Variables/ThemeVariables';
import Colors from './components/StylingWithUtilityClasses/Colors/Colors';
import CustomStyles from './components/StylingWithUtilityClasses/CustomStyles/CustomStyles';
import DetectingClasses from './components/StylingWithUtilityClasses/DetectingClasses/DetectingClasses';
import FunctionsAndDirectives from './components/StylingWithUtilityClasses/FunctionsAndDirectives/FunctionsAndDirectives';
import AspectRatio from './components/StylingWithUtilityClasses/AspectRatio/AspectRatio';
import Columns from './components/StylingWithUtilityClasses/Columns/Columns';
import BreakAfter from './components/StylingWithUtilityClasses/BreakAfter/BreakAfter';

import BreakBefore from './components/StylingWithUtilityClasses/BreakBefore/BreakBefore';
import BoxDecorationBreak from './components/StylingWithUtilityClasses/BoxDecorationBreak/BoxDecorationBreak';
import BoxSizing from './components/StylingWithUtilityClasses/BoxSizing/BoxSizing';
import Display from './components/StylingWithUtilityClasses/Display/Display';

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
        <Route path="detecting-classes" element={<DetectingClasses />} />
        <Route
          path="functions-directives"
          element={<FunctionsAndDirectives />}
        />
        <Route path="aspect-ratio" element={<AspectRatio />} />
        <Route path="columns" element={<Columns />} />
        <Route path="break-after" element={<BreakAfter />} />
        <Route path="break-before" element={<BreakBefore />} />
        <Route path="box-decoration-break" element={<BoxDecorationBreak />} />
        <Route path="box-sizing" element={<BoxSizing />} />
        <Route path="display" element={<Display />} />
      </Route>
    </Routes>
  );
}

export default App;
