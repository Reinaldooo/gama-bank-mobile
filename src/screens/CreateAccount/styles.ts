import styled from "styled-components/native";

interface InterfaceInputLoginRegister {
    _mTop?: string;
}

export const InputLoginRegister = styled.TextInput<InterfaceInputLoginRegister>`
  margin-top: ${(props) => (props._mTop || "30px")};
  border-bottom-width: 1px;
  border-bottom-color: #878686;
  border-style: solid;
  width: 100%;
`;

export const LinksBottom = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8C52E5;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
`
