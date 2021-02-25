import React from "react";
import { useNavigation } from "@react-navigation/native";
//
import * as S from "./styles";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function ForgotPasswd() {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Title>Aqui será a tela de recuperar a senha</S.Title>
      <ButtonPrimary title="Voltar" onPress={() => navigation.goBack()} />
    </S.Container>
  );
}
