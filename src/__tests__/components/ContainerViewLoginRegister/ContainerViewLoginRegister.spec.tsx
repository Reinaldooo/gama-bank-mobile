import React from 'react';
import renderer from 'react-test-renderer';
import ContainerViewLoginRegister from '../../../components/ContainerViewLoginRegister';

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native")
    return {
      ...actualNav,
      useFocusEffect: () => jest.fn(),
      useNavigation: () => ({
        navigate: jest.fn(),
      }),
    }
  })

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

describe('<ContainerViewLoginRegister />', () => {
  it('Should render <ContainerViewLoginRegister />', () => {
    const tree = renderer.create(<ContainerViewLoginRegister/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});