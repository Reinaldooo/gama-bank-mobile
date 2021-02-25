import {Dimensions} from 'react-native';
import styled from "styled-components/native";
import {ScrollView} from "react-native-gesture-handler";

export const ContainerScrollView = styled(ScrollView)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get("window").height};
  background-color: #A100FF;
`;