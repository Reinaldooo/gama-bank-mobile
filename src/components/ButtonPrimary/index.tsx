import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import { ContainerButton, TitleCard } from "./styles";

interface ButtonPrimaryProps extends RectButtonProperties {
  title: string;
  iconName: string;
  iconSize: number;
  iconColor: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  bgColor?: string;
  color?: string;
  _loading?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  title,
  iconName,
  iconSize,
  iconColor,
  marginTop,
  marginBottom,
  padding,
  bgColor,
  color,
  _loading,
  ...rest
}) => {
  return (
    <ContainerButton
      _mTop={marginTop}
      _padding={padding}
      _mBottom={marginBottom}
      _bgColor={bgColor}
      _loading={_loading}
      {...rest}
    >
      <TitleCard _color={color}>{title}</TitleCard>
      <Feather name={iconName} size={iconSize} color={iconColor} />
    </ContainerButton>
  );
};

export default ButtonPrimary;