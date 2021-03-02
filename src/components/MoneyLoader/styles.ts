import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

export const Container = styled(Animated.View)`
    flex: 1;
    height: ${Dimensions.get('window').height}px;
    justify-content: center;
    align-items: center;
`;
