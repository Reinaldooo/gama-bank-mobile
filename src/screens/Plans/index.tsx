import React from "react";
import { useNavigation } from "@react-navigation/native";
//
import * as S from "./styles";
import ButtonPrimary from "../../components/ButtonPrimary";

export default function Plans() {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Title>Aqui será a tela de planos</S.Title>
    </S.Container>
  );
}
