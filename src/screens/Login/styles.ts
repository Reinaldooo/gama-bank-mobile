import styled from 'styled-components/native';
import { Form } from '@unform/mobile';

interface InterfaceInputLoginRegister {
    _mTop?: string;
}

export const InputLoginRegister = styled.TextInput<InterfaceInputLoginRegister>`
    margin-top: ${(props) => props._mTop || '30px'};
    border-bottom-width: 1px;
    border-bottom-color: #878686;
    border-style: solid;
    width: 100%;
`;

export const LinksBottom = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8c52e5;
    margin-top: 20px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
`;

export const LoginForm = styled(Form)`
    width: 100%;
    margin: 0;
    padding: 0;
`;
