import React from "react";
import {useNavigation} from "@react-navigation/native";
import ButtonPrimary from "../../components/ButtonPrimary";
import {InputLoginRegister, LinksBottom} from "./styles";
import WhiteCardLoginRegister from "../../components/WhiteCardLoginRegister";
import Feather from "react-native-vector-icons/Feather";
import ContainerViewLoginRegister from "../../components/ContainerViewLoginRegister";
import ContainerScroll from "../../components/ContainerScrollView";

export default function CreateAccount() {

    const navigation = useNavigation();

    function navLogin() {
        navigation.navigate('Login')
    }

    return (
        <ContainerScroll>
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister title="Peça sua conta e cartão de crédito do Gama Bank" subtitle={null} pdHorizontal="40px">
                    <InputLoginRegister _mTop="0" placeholder="Digite seu CPF"/>
                    <InputLoginRegister _mTop="40px" placeholder="Escolha um nome de Usuário"/>
                    <InputLoginRegister _mTop="40px" placeholder="Nome Completo"/>
                    <InputLoginRegister _mTop="40px" placeholder="Digite sua Senha"/>
                    <InputLoginRegister _mTop="40px" placeholder="Confirme sua Senha"/>
                    <ButtonPrimary title="Continuar" iconName="arrow-right" iconColor="#9B9B9B" iconSize={25}
                                   marginTop="40px" marginBottom="30px" bgColor="#D8D8D8" color="#9B9B9B"/>
                    <LinksBottom onPress={navLogin}><Feather name="chevron-left" size={13}
                                                                     color="#8C52E5"/> Voltar para o Login</LinksBottom>
                </WhiteCardLoginRegister>

            </ContainerViewLoginRegister>
        </ContainerScroll>
    );
}
