import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface ContainerProps {
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 0;
    color: #999;

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #e6505c;
            border-width: 2px;
        `}
`;

export const Icon = styled(Feather)`
    margin-right: 0px;
`;

export const TextInput = styled.TextInput`
    color: #999;
    font-size: 17px;
    border-bottom-width: 1px;
    border-bottom-color: #878686;
    border-style: solid;
    width: 100%;
    padding-bottom: 5px;
`;
