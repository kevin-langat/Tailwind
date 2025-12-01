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
import BackgroundColor from './components/StylingWithUtilityClasses/BackgroundColor/BackgroundColor';
import BackgroundImage from './components/StylingWithUtilityClasses/BackgroundImage/BackgroundImage';
import BackgroundOrigin from './components/StylingWithUtilityClasses/BackgroundOrigin/BackgroundOrigin';
import BackgroundPosition from './components/StylingWithUtilityClasses/BackgroundPosition/BackgroundPosition';
import BackgroundRepeat from './components/StylingWithUtilityClasses/BackgroundRepeat/BackgroundRepeat';
import BackgroundSize from './components/StylingWithUtilityClasses/BackgroundSize/BackgroundSize';
import BorderRadius from './components/StylingWithUtilityClasses/BorderRadius/BorderRadius';
import BorderWidth from './components/StylingWithUtilityClasses/BorderWidth/BorderWidth';
import BorderColor from './components/StylingWithUtilityClasses/BorderColor/BorderColor';
import BorderStyle from './components/StylingWithUtilityClasses/BorderStyle/BorderStyle';
import OutlineWidth from './components/StylingWithUtilityClasses/OutlineWidth/OutlineWidth';
import OutlineColor from './components/StylingWithUtilityClasses/OultineColor/OutlineColor';
import OutlineStyle from './components/StylingWithUtilityClasses/OutlineStyle/OutlineStyle';
import OutlineOffset from './components/StylingWithUtilityClasses/OutlineOffset/OutlineOffset';
import BoxShadow from './components/StylingWithUtilityClasses/BoxShadow/BoxShadow';
import TextShadow from './components/StylingWithUtilityClasses/TextShadow/TextShadow';
import Opacity from './components/StylingWithUtilityClasses/Opacity/Opacity';
import MixBlendMode from './components/StylingWithUtilityClasses/MixBlendMode/MixBlendMode';
import BackgroundBlendMode from './components/StylingWithUtilityClasses/BackgroundBlendMode/BackgroundBlendMode';
import MaskClip from './components/StylingWithUtilityClasses/MaskClip/MaskClip';
import MaskComposite from './components/StylingWithUtilityClasses/MaskComposite/MaskComposite';
import MaskImage from './components/StylingWithUtilityClasses/MaskImage/MaskImage';
import MaskMode from './components/StylingWithUtilityClasses/MaskMode/MaskMode';
import MaskOrigin from './components/StylingWithUtilityClasses/MaskOrigin/MaskOrigin';
import MaskPosition from './components/StylingWithUtilityClasses/MaskPosition/MaskPosition';
import MaskRepeat from './components/StylingWithUtilityClasses/MaskRepeat/MaskRepeat';
import MaskSize from './components/StylingWithUtilityClasses/MaskSize/MaskSize';
import MaskType from './components/StylingWithUtilityClasses/MaskType/MaskType';
import Filter from './components/StylingWithUtilityClasses/Filter/Filter';
import FilterBrightness from './components/StylingWithUtilityClasses/Filter/FilterBrightness';
import FilterContrast from './components/StylingWithUtilityClasses/Filter/FilterContrast';
import FilterDropShadow from './components/StylingWithUtilityClasses/Filter/FilterDropShadow';
import FilterGrayscale from './components/StylingWithUtilityClasses/Filter/FilterGrayscale';
import HueRotate from './components/StylingWithUtilityClasses/Filter/HueRotate';
import Invert from './components/StylingWithUtilityClasses/Filter/Invert';
import Saturate from './components/StylingWithUtilityClasses/Filter/Saturate';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Sepia from './components/StylingWithUtilityClasses/Filter/Sepia';
import BackDropFilter from './components/StylingWithUtilityClasses/BackdropFilter/BackDrop-Filter';
import Blur from './components/StylingWithUtilityClasses/BackdropFilter/Blur';
import Brightness from './components/StylingWithUtilityClasses/BackdropFilter/Brightness';
import Contrast from './components/StylingWithUtilityClasses/BackdropFilter/Contrast';
import GrayScale from './components/StylingWithUtilityClasses/BackdropFilter/GrayScale';
import BackDropHueRotate from './components/StylingWithUtilityClasses/BackdropFilter/HueRotate';
import BackDropInvert from './components/StylingWithUtilityClasses/BackdropFilter/BackDropInvert';
import BackDropOpacity from './components/StylingWithUtilityClasses/BackdropFilter/BackDropOpacity';
import BackDropSaturate from './components/StylingWithUtilityClasses/BackdropFilter/BackDropSaturate';
import BackDropSepia from './components/StylingWithUtilityClasses/BackdropFilter/BackDropSepia';
import BorderCollapse from './components/StylingWithUtilityClasses/Tables/BorderCollapse';
import BorderSpacing from './components/StylingWithUtilityClasses/Tables/BorderSpacing';
import TableLayout from './components/StylingWithUtilityClasses/Tables/TableLayout';
import CaptionSide from './components/StylingWithUtilityClasses/Tables/CaptionSide';

import TransitionProperty from './components/StylingWithUtilityClasses/TransistionsAndAnimation/TransistionProperty';
import TransitionBehavior from './components/StylingWithUtilityClasses/TransistionsAndAnimation/TransitionBehavior';
import TransitionDuration from './components/StylingWithUtilityClasses/TransistionsAndAnimation/Transitionduration';
import TransitionTimingFunction from './components/StylingWithUtilityClasses/TransistionsAndAnimation/TransitionTimingFunction';
import TransitionDelay from './components/StylingWithUtilityClasses/TransistionsAndAnimation/TransitionDelay';
import Animation from './components/StylingWithUtilityClasses/TransistionsAndAnimation/Animation';
import BackfaceVisibility from './components/StylingWithUtilityClasses/Transforms/BackfaceVisibility';
import Perspective from './components/StylingWithUtilityClasses/Transforms/Perspective';
import PerspectiveOrigin from './components/StylingWithUtilityClasses/Transforms/PerspectiveOrigin';
import Rotate from './components/StylingWithUtilityClasses/Transforms/Rotate';
import Scale from './components/StylingWithUtilityClasses/Transforms/Scale';
import Skew from './components/StylingWithUtilityClasses/Transforms/Skew';
import Transform from './components/StylingWithUtilityClasses/Transforms/Transform';
import TranformOrigin from './components/StylingWithUtilityClasses/Transforms/TranformOrigin';
import TransformStyle from './components/StylingWithUtilityClasses/Transforms/TransformStyle';
import Translate from './components/StylingWithUtilityClasses/Transforms/Translate';
import AccentColor from './components/StylingWithUtilityClasses/Interactivity/AccentColor';
import Appearance from './components/StylingWithUtilityClasses/Interactivity/Appearance';
import CaretColor from './components/StylingWithUtilityClasses/Interactivity/CaretColor';
import ColorScheme from './components/StylingWithUtilityClasses/Interactivity/ColorScheme';
import Cursor from './components/StylingWithUtilityClasses/Interactivity/Cursor';
import FieldSizing from './components/StylingWithUtilityClasses/Interactivity/FieldSizing';
import PointerEvents from './components/StylingWithUtilityClasses/Interactivity/PointerEvents';
import Resize from './components/StylingWithUtilityClasses/Interactivity/Resize';
import ScrollBehavior from './components/StylingWithUtilityClasses/Interactivity/ScrollBehavior';
import ScrollMargin from './components/StylingWithUtilityClasses/Interactivity/ScrollMargin';
import ScrollPadding from './components/StylingWithUtilityClasses/Interactivity/ScrollPadding';
import ScrollSnapAlign from './components/StylingWithUtilityClasses/Interactivity/ScrollSnapAlign';
import ScrollSnapStop from './components/StylingWithUtilityClasses/Interactivity/ScrollSnapStop';
import ScrollSnapType from './components/StylingWithUtilityClasses/Interactivity/ScrollSnapType';
import TouchAction from './components/StylingWithUtilityClasses/Interactivity/TouchAction';
import UserSelect from './components/StylingWithUtilityClasses/Interactivity/UserSelect';
import WillChange from './components/StylingWithUtilityClasses/Interactivity/WillChange';
import Fill from './components/StylingWithUtilityClasses/Svg/Fill';
import Stroke from './components/StylingWithUtilityClasses/Svg/Stroke';
import StrokeWidth from './components/StylingWithUtilityClasses/Svg/StrokeWidth';
import ForcedColorAdjust from './components/StylingWithUtilityClasses/ForcedColorAdjust/ForcedColorAdjust';

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
        <Route path='*' element={<NotFoundPage />} />
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
        <Route path='background-color' element={<BackgroundColor />} />
        <Route path='background-image' element={<BackgroundImage />} />
        <Route path='background-origin' element={<BackgroundOrigin />} />
        <Route path='background-position' element={<BackgroundPosition />} />
        <Route path='background-repeat' element={<BackgroundRepeat />} />
        <Route path='background-size' element={<BackgroundSize />} />
        <Route path='border-radius' element={<BorderRadius />} />
        <Route path='border-width' element={<BorderWidth />} />
        <Route path='border-color' element={<BorderColor />} />
        <Route path='border-style' element={<BorderStyle />} />
        <Route path='outline-width' element={<OutlineWidth />} />
        <Route path='border-style' element={<BorderStyle />} />
        <Route path='outline-color' element={<OutlineColor />} />
        <Route path='outline-style' element={<OutlineStyle />} />
        <Route path='outline-offset' element={<OutlineOffset />} />
        <Route path='box-shadow' element={<BoxShadow />} />
        <Route path='text-shadow' element={<TextShadow />} />
        <Route path='opacity' element={<Opacity />} />
        <Route path='mix-blend-mode' element={<MixBlendMode />} />
        <Route path='background-blend-mode' element={<BackgroundBlendMode />} />
        <Route path='mask-clip' element={<MaskClip />} />
        <Route path='mask-composite' element={<MaskComposite />} />
        <Route path='mask-image' element={<MaskImage />} />
        <Route path='mask-mode' element={<MaskMode />} />
        <Route path='mask-origin' element={<MaskOrigin />} />
        <Route path='mask-position' element={<MaskPosition />} />
        <Route path='mask-repeat' element={<MaskRepeat />} />
        <Route path='mask-size' element={<MaskSize />} />
        <Route path='mask-type' element={<MaskType />} />
        <Route path='filter' element={<Filter />} />
        <Route path='filter-brightness' element={<FilterBrightness />} />
        <Route path='filter-contrast' element={<FilterContrast />} />
        <Route path='filter-drop-shadow' element={<FilterDropShadow />} />
        <Route path='filter-grayscale' element={<FilterGrayscale />} />
        <Route path='hue-rotate' element={<HueRotate />} />
        <Route path='invert' element={<Invert />} />
        <Route path='saturate' element={<Saturate />} />
        <Route path='sepia' element={<Sepia />} />
        <Route path='backdrop-filter' element={<BackDropFilter />} />
        <Route path='backdrop-blur' element={<Blur />} />
        <Route path='backdrop-brightness' element={<Brightness />} />
        <Route path='backdrop-contrast' element={<Contrast />} />
        <Route path='backdrop-grayscale' element={<GrayScale />} />
        <Route path='backdrop-hue-rotate' element={<BackDropHueRotate />} />
        <Route path='backdrop-invert' element={<BackDropInvert />} />
        <Route path='backdrop-opacity' element={<BackDropOpacity />} />
        <Route path='backdrop-saturate' element={<BackDropSaturate />} />
        <Route path='backdrop-sepia' element={<BackDropSepia />} />
        <Route path='border-collapse' element={<BorderCollapse />} />
        <Route path='border-spacing' element={<BorderSpacing />} />
        <Route path='table-layout' element={<TableLayout />} />
        <Route path='caption-side' element={<CaptionSide />} />
        <Route path='transition-property' element={<TransitionProperty />} />
        <Route path='transition-behavior' element={<TransitionBehavior />} />
        <Route path='transition-duration' element={<TransitionDuration />} />
        <Route
          path='transition-timing-function'
          element={<TransitionTimingFunction />}
        />
        <Route path='transition-delay' element={<TransitionDelay />} />
        <Route path='animation' element={<Animation />} />
        <Route path='backface-visibility' element={<BackfaceVisibility />} />
        <Route path='perspective' element={<Perspective />} />
        <Route path='perspective-origin' element={<PerspectiveOrigin />} />
        <Route path='rotate' element={<Rotate />} />
        <Route path='scale' element={<Scale />} />
        <Route path='skew' element={<Skew />} />
        <Route path='transform' element={<Transform />} />
        <Route path='transform-origin' element={<TranformOrigin />} />
        <Route path='transform-style' element={<TransformStyle />} />
        <Route path='translate' element={<Translate />} />
        <Route path='accent-color' element={<AccentColor />} />
        <Route path='appearance' element={<Appearance />} />
        <Route path='caret-color' element={<CaretColor />} />
        <Route path='color-scheme' element={<ColorScheme />} />
        <Route path='cursor' element={<Cursor />} />
        <Route path='field-sizing' element={<FieldSizing />} />
        <Route path='pointer-events' element={<PointerEvents />} />
        <Route path='resize' element={<Resize />} />
        <Route path='scroll-behavior' element={<ScrollBehavior />} />
        <Route path='scroll-margin' element={<ScrollMargin />} />
        <Route path='scroll-padding' element={<ScrollPadding />} />
        <Route path='scroll-snap-align' element={<ScrollSnapAlign />} />
        <Route path='scroll-snap-stop' element={<ScrollSnapStop />} />
        <Route path='scroll-snap-type' element={<ScrollSnapType />} />
        <Route path='touch-action' element={<TouchAction />} />
        <Route path='user-select' element={<UserSelect />} />
        <Route path='will-change' element={<WillChange />} />
        <Route path='fill' element={<Fill />} />
        <Route path='stroke' element={<Stroke />} />
        <Route path='stroke-width' element={<StrokeWidth />} />
        <Route path='forced-color-adjust' element={<ForcedColorAdjust />} />
      </Route>
    </Routes>
  );
}

export default App;
