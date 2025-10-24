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
import AlignSelf from './components/StylingWithUtilityClasses/AlignSelf/AlignSelf';
import PlaceContent from './components/StylingWithUtilityClasses/PlaceContent/PlaceContent';
import PlaceItems from './components/StylingWithUtilityClasses/PlaceItems/PlaceItems';
import PlaceSelf from './components/StylingWithUtilityClasses/PlaceSelf/PlaceSelf';
import Padding from './components/StylingWithUtilityClasses/Padding/Padding';
import Margin from './components/StylingWithUtilityClasses/Margin/Margin';
import Width from './components/StylingWithUtilityClasses/Width/Width';
import MinWidth from './components/StylingWithUtilityClasses/MinWidth/MinWidth';
import MaxWidth from './components/StylingWithUtilityClasses/MaxWidth/MaxWidth';
import Height from './components/StylingWithUtilityClasses/Heigth/Heigth';
import MinHeight from './components/StylingWithUtilityClasses/MinHeight/MinHeight';
import MaxHeight from './components/StylingWithUtilityClasses/MaxHeight/MaxHeight';
import FontFamily from './components/StylingWithUtilityClasses/FontFamily/FontFamily';
import FontSize from './components/StylingWithUtilityClasses/FontSize/FontSize';
import FontSmoothing from './components/StylingWithUtilityClasses/FontSmoothing/FontSmoothing';
import FontStyle from './components/StylingWithUtilityClasses/FontStyle/FontStyle';
import FontWeigth from './components/StylingWithUtilityClasses/FontWeigth/FontWeigth';
import FontStretch from './components/StylingWithUtilityClasses/FontStretch/FontStretch';
import FontVariantNumeric from './components/StylingWithUtilityClasses/FontVariantNumeric/FontVariantNumeric';
import LetterSpacing from './components/StylingWithUtilityClasses/LetterSpacing/LetterSpacing';
import LineClamp from './components/StylingWithUtilityClasses/LineClamp/LineClamp';
import LineHeight from './components/StylingWithUtilityClasses/LineHeight/LineHeight';
import ListStyleImage from './components/StylingWithUtilityClasses/ListStyleImage/ListStyleImage';
import ListStylePosition from './components/StylingWithUtilityClasses/ListStylePosition/ListStylePosition';
import ListStyleType from './components/StylingWithUtilityClasses/ListStyleType/ListStyleType';
import TextAlign from './components/StylingWithUtilityClasses/TextAlign/TextAlign';
import Color from './components/StylingWithUtilityClasses/Color/Color';
import TextDecorationLine from './components/StylingWithUtilityClasses/TextDecorationLine/TextDecorationLine';
import TextDecorationColor from './components/StylingWithUtilityClasses/TextDecorationColor/TextDecorationColor';
import TextDecorationStyle from './components/StylingWithUtilityClasses/TextDecorationStyle/TextDecorationStyle';
import TextDecorationThickness from './components/StylingWithUtilityClasses/TextDecorationThickness/TextDecorationThickness';
import TextUnderlineOffset from './components/StylingWithUtilityClasses/TextUnderlineOffset/TextUnderlineOffset';
import TextTransform from './components/StylingWithUtilityClasses/TextTransform/TextTransform';
import TextOverflow from './components/StylingWithUtilityClasses/TextOverflow/TextOverflow';
import TextWrap from './components/StylingWithUtilityClasses/TextWrap/TextWrap';
import TextIndent from './components/StylingWithUtilityClasses/TextIndent/TextIndent';
import VerticalAlign from './components/StylingWithUtilityClasses/VerticalAlign/VerticalAlign';
import WhiteSpace from './components/StylingWithUtilityClasses/WhiteSpace/WhiteSpace';
import WordBreak from './components/StylingWithUtilityClasses/WordBreak/WordBreak';
import OverFlowWrap from './components/StylingWithUtilityClasses/OverFlowWrap/OverFlowWrap';
import Hyphens from './components/StylingWithUtilityClasses/Hyphens/Hyphens';
import Content from './components/StylingWithUtilityClasses/Content/Content';
import BackgroundAttachment from './components/StylingWithUtilityClasses/BackgroundAttachment/BackgroundAttachment';
import BackgroundClip from './components/StylingWithUtilityClasses/BackgroundClip/BackgroundClip';

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
      <Route path='/' element={<CommonLayout />}>
        <Route path='hover-state' element={<HoverState />} />
        <Route path='responsive-design' element={<ResponsiveDesign />} />
        <Route path='dark-mode' element={<Darkmode />} />
        <Route path='theme-variables' element={<ThemeVariables />} />
        <Route path='colors' element={<Colors />} />
        <Route path='custom-styles' element={<CustomStyles />} />
        <Route path='detecting-classes' element={<DetectingClasses />} />
        <Route
          path='functions-directives'
          element={<FunctionsAndDirectives />}
        />
        <Route path='aspect-ratio' element={<AspectRatio />} />
        <Route path='columns' element={<Columns />} />
        <Route path='break-after' element={<BreakAfter />} />
        <Route path='break-before' element={<BreakBefore />} />
        <Route path='box-decoration-break' element={<BoxDecorationBreak />} />
        <Route path='box-sizing' element={<BoxSizing />} />
        <Route path='display' element={<Display />} />
        <Route path='float' element={<Float />} />
        <Route path='clear' element={<Clear />} />
        <Route path='isolate' element={<Isolation />} />
        <Route path='object-fit' element={<Objectfit />} />
        <Route path='object-position' element={<ObjectPosition />} />
        <Route path='overflow' element={<Overflow />} />
        <Route path='overscroll-behaviour' element={<OverscrollBehaviour />} />
        <Route path='position' element={<Position />} />
        <Route path='top-right-bottom-left' element={<TopRightBottomLeft />} />
        <Route path='visibility' element={<Visibility />} />
        <Route path='z-index' element={<ZIndex />} />
        <Route path='flex-basis' element={<FlexBasis />} />
        <Route path='flex-direction' element={<FlexDirection />} />
        <Route path='flex-wrap' element={<FlexWrap />} />
        <Route path='flex' element={<Flex />} />
        <Route path='flex-grow' element={<FlexGrow />} />
        <Route path='flex-shrink' element={<FlexShrink />} />
        <Route path='order' element={<Order />} />
        <Route path='grid-template-columns' element={<GridTemplateColumns />} />
        <Route path='grid-columns' element={<GridColumns />} />
        <Route path='grid-template-rows' element={<GridTemplateRows />} />
        <Route path='grid-rows' element={<GridRow />} />
        <Route path='grid-auto-flow' element={<GridAutoFlow />} />
        <Route path='grid-auto-columns' element={<GridAutoColumns />} />
        <Route path='gap' element={<Gap />} />
        <Route path='justify-content' element={<JustifyContent />} />
        <Route path='justify-items' element={<JustifyItems />} />
        <Route path='justify-self' element={<JustifySelf />} />
        <Route path='align-content' element={<AlignContent />} />
        <Route path='align-items' element={<ALignItems />} />
        <Route path='align-self' element={<AlignSelf />} />
        <Route path='place-content' element={<PlaceContent />} />
        <Route path='place-items' element={<PlaceItems />} />
        <Route path='place-self' element={<PlaceSelf />} />
        <Route path='padding' element={<Padding />} />
        <Route path='margin' element={<Margin />} />
        <Route path='width' element={<Width />} />
        <Route path='min-width' element={<MinWidth />} />
        <Route path='max-width' element={<MaxWidth />} />
        <Route path='height' element={<Height />} />
        <Route path='min-height' element={<MinHeight />} />
        <Route path='max-height' element={<MaxHeight />} />
        <Route path='font-family' element={<FontFamily />} />
        <Route path='font-size' element={<FontSize />} />
        <Route path='font-smoothing' element={<FontSmoothing />} />
        <Route path='font-style' element={<FontStyle />} />
        <Route path='font-weigth' element={<FontWeigth />} />
        <Route path='font-stretch' element={<FontStretch />} />
        <Route path='font-variant-numeric' element={<FontVariantNumeric />} />
        <Route path='letter-spacing' element={<LetterSpacing />} />
        <Route path='line-clamp' element={<LineClamp />} />
        <Route path='line-height' element={<LineHeight />} />
        <Route path='line-style-image' element={<ListStyleImage />} />
        <Route path='line-style-position' element={<ListStylePosition />} />
        <Route path='line-style-type' element={<ListStyleType />} />
        <Route path='text-align' element={<TextAlign />} />
        <Route path='color' element={<Color />} />
        <Route path='text-decoration-line' element={<TextDecorationLine />} />
        <Route path='text-decoration-color' element={<TextDecorationColor />} />
        <Route path='text-decoration-style' element={<TextDecorationStyle />} />
        <Route
          path='text-decoration-thickness'
          element={<TextDecorationThickness />}
        />
        <Route path='text-underline-offset' element={<TextUnderlineOffset />} />
        <Route path='text-transform' element={<TextTransform />} />
        <Route path='text-overflow' element={<TextOverflow />} />
        <Route path='text-wrap' element={<TextWrap />} />
        <Route path='text-indent' element={<TextIndent />} />
        <Route path='vertical-align' element={<VerticalAlign />} />
        <Route path='white-space' element={<WhiteSpace />} />
        <Route path='word-break' element={<WordBreak />} />
        <Route path='overflow-wrap' element={<OverFlowWrap />} />
        <Route path='hyphens' element={<Hyphens />} />
        <Route path='content' element={<Content />} />
        <Route
          path='background-attachment'
          element={<BackgroundAttachment />}
        />
        <Route path='background-clip' element={<BackgroundClip />} />
      </Route>
    </Routes>
  );
}

export default App;
