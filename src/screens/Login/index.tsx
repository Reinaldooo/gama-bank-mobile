import React from "react";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../../components/ButtonPrimary";
//
import * as S from "./styles";

export default function Login() {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Title>Aqui será a tela de login</S.Title>
      <ButtonPrimary
        title="Esqueci senha"
        onPress={() => navigation.navigate("ForgotPasswd")}
      />
      <ButtonPrimary
        title="Criar Conta"
        onPress={() => navigation.navigate("CreateAccount")}
      />
      <ButtonPrimary
        title="Ir para dashboard"
        onPress={() => navigation.navigate("DashboardTabNavigator")}
      />
    </S.Container>
  );
}
