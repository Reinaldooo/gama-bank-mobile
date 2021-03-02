import React from 'react';
import { _View } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { ContainerButton, TitleCard } from './styles';

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
    _width?: string;
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
    _width,
    ...rest
}) => {
    return (
        <ContainerButton
            _mTop={marginTop}
            _padding={padding}
            _mBottom={marginBottom}
            _bgColor={bgColor}
            _loading={_loading}
            _width={_width}
            {...rest}
        >
            <TitleCard _color={color}>{title}</TitleCard>
            <Feather name={iconName} size={iconSize} color={iconColor} />
        </ContainerButton>
    );
};

export default ButtonPrimary;
