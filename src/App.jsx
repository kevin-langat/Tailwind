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
import Float from './components/StylingWithUtilityClasses/Float/Float';
import Clear from './components/StylingWithUtilityClasses/Clear/Clear';
import Isolation from './components/StylingWithUtilityClasses/Isolation/Isolation';
import Objectfit from './components/StylingWithUtilityClasses/Object-Fit/Object-fit';
import ObjectPosition from './components/StylingWithUtilityClasses/ObjectPosition/ObjectPosition';
import Overflow from './components/StylingWithUtilityClasses/Overflow/Overflow';
import OverscrollBehaviour from './components/StylingWithUtilityClasses/OverScroll/OverscrollBehaviour';
import Position from './components/StylingWithUtilityClasses/Position/Position';
import TopRightBottomLeft from './components/StylingWithUtilityClasses/Top,Right,Bottom,Left/TopRightBottomLeft';
import Visibility from './components/StylingWithUtilityClasses/Visibility/Visibility';
import ZIndex from './components/StylingWithUtilityClasses/Z-index/Z-Index';
import FlexBasis from './components/StylingWithUtilityClasses/FlexBasis/FlexBasis';
import FlexDirection from './components/StylingWithUtilityClasses/FlexDirection/FlexDirection';
import FlexWrap from './components/StylingWithUtilityClasses/FlexWrap/FlexWrap';
import Flex from './components/StylingWithUtilityClasses/Flex/Flex';
import FlexGrow from './components/StylingWithUtilityClasses/FlexGrow/FlexGrow';
import FlexShrink from './components/StylingWithUtilityClasses/FlexShrink/FlexShrink';
import Order from './components/StylingWithUtilityClasses/Order/Order';
import GridTemplateColumns from './components/StylingWithUtilityClasses/GridTemplateColumns/GridTemplateColumns';
import GridColumns from './components/StylingWithUtilityClasses/GridColumn/GridColumns';
import GridTemplateRows from './components/StylingWithUtilityClasses/GridTemplateRows/GridTemplateRows';
import GridRow from './components/StylingWithUtilityClasses/GridRow/GridRow';
import GridAutoFlow from './components/StylingWithUtilityClasses/GridAutoFlow/GridAutoFlow';
import GridAutoColumns from './components/StylingWithUtilityClasses/GridAutoFlow/GridAutoColumns';
import Gap from './components/StylingWithUtilityClasses/Gap/Gap';
import JustifyContent from './components/StylingWithUtilityClasses/JustifyContent/JustifyContent';
import JustifyItems from './components/StylingWithUtilityClasses/Justify-items/JustifyItems';
import JustifySelf from './components/StylingWithUtilityClasses/JustifySelf/JustifySelf';
import AlignContent from './components/StylingWithUtilityClasses/AlignContent/AlignContent';
import ALignItems from './components/StylingWithUtilityClasses/AlignItems/ALignItems';

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
        <Route path="float" element={<Float />} />
        <Route path="clear" element={<Clear />} />
        <Route path="isolate" element={<Isolation />} />
        <Route path="object-fit" element={<Objectfit />} />
        <Route path="object-position" element={<ObjectPosition />} />
        <Route path="overflow" element={<Overflow />} />
        <Route path="overscroll-behaviour" element={<OverscrollBehaviour />} />
        <Route path="position" element={<Position />} />
        <Route path="top-right-bottom-left" element={<TopRightBottomLeft />} />
        <Route path="visibility" element={<Visibility />} />
        <Route path="z-index" element={<ZIndex />} />
        <Route path="flex-basis" element={<FlexBasis />} />
        <Route path="flex-direction" element={<FlexDirection />} />
        <Route path="flex-wrap" element={<FlexWrap />} />
        <Route path="flex" element={<Flex />} />
        <Route path="flex-grow" element={<FlexGrow />} />
        <Route path="flex-shrink" element={<FlexShrink />} />
        <Route path="order" element={<Order />} />
        <Route path="grid-template-columns" element={<GridTemplateColumns />} />
        <Route path="grid-columns" element={<GridColumns />} />
        <Route path="grid-template-rows" element={<GridTemplateRows />} />
        <Route path="grid-rows" element={<GridRow />} />
        <Route path="grid-auto-flow" element={<GridAutoFlow />} />
        <Route path="grid-auto-columns" element={<GridAutoColumns />} />
        <Route path="gap" element={<Gap />} />
        <Route path="justify-content" element={<JustifyContent />} />
        <Route path="justify-items" element={<JustifyItems />} />
        <Route path="justify-self" element={<JustifySelf />} />
        <Route path="align-content" element={<AlignContent />} />
        <Route path="align-items" element={<ALignItems />} />
      </Route>
    </Routes>
  );
}

export default App;
