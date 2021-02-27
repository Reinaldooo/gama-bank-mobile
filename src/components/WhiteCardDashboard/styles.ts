import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface InterfaceContainerCard {
    _Padding?: string;
    _MarginBottom?: string;
}

export const ContainerCard = styled.View<InterfaceContainerCard>`
  width: ${Dimensions.get('window').width - 60}px;
  background: #FFFFFF;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props._Padding || "40px;")};
  margin-bottom: ${(props) => (props._MarginBottom || "0px;")};
`;