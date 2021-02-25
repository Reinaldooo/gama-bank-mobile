import React from "react";
import { Text } from "react-native";
import { RectButtonProperties } from "react-native-gesture-handler";
//
import * as S from "./styles";

interface ButtonPrimaryProps extends RectButtonProperties {
  title: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ title, ...rest }) => {
  return (
    <S.Container {...rest}>
      <Text>{title}</Text>
    </S.Container>
  );
};

export default ButtonPrimary;
