import {Dimensions} from 'react-native';
import styled from "styled-components/native";

export const ContainerView = styled.View`
  height: ${Dimensions.get("window").height - 40}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px 0 20px 0;
`;