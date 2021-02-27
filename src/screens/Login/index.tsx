import React from "react";
import {useNavigation} from "@react-navigation/native";
import ButtonPrimary from "../../components/ButtonPrimary";
import {InputLoginRegister, LinksBottom} from "./styles";
import WhiteCardLoginRegister from "../../components/WhiteCardLoginRegister";
import Feather from "react-native-vector-icons/Feather";
import ContainerScroll from "../../components/ContainerScrollView";
import ContainerViewLoginRegister from "../../components/ContainerViewLoginRegister";
import ContainerLogoGama from "../../components/LogoGama";

export default function Login() {

    const navigation = useNavigation();

    function navForgetPassword() {
        navigation.navigate('ForgotPasswd')
    }

    function navCreateAccount() {
        navigation.navigate('CreateAccount')
    }

    function navDashboard() {
        navigation.navigate('DashboardTabNavigator')
    }

    return (
        <ContainerScroll>
            <ContainerLogoGama mTop="50px" mBottom="20px"/>
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister title="Seja bem vindo, informe seus dados para logar." subtitle={null}>
                    <InputLoginRegister placeholder="Digite seu Usuário"/>
                    <InputLoginRegister _mTop="60px" placeholder="Digite sua Senha"/>
                    <ButtonPrimary title="Entrar" iconName="arrow-right" iconColor="#FFF" iconSize={25} marginTop="60px" marginBottom="30px" />
                    <LinksBottom onPress={navForgetPassword}>Esqueci minha senha <Feather name="chevron-right" size={13} color="#8C52E5" /></LinksBottom>
                    <LinksBottom onPress={navDashboard}>Dashboard <Feather name="chevron-right" size={13} color="#8C52E5" /></LinksBottom>
                    <LinksBottom onPress={navCreateAccount}>Ainda não sou cliente <Feather name="chevron-right" size={13} color="#8C52E5" /></LinksBottom>
                </WhiteCardLoginRegister>




                {/*<ButtonPrimary*/}
                {/*    title="Esqueci senha"*/}
                {/*    onPress={() => navigation.navigate("ForgotPasswd")}*/}
                {/*/>*/}
                {/*<ButtonPrimary*/}
                {/*    title="Criar Conta"*/}
                {/*    onPress={() => navigation.navigate("CreateAccount")}*/}
                {/*/>*/}
                {/*<ButtonPrimary*/}
                {/*    title="Ir para dashboard"*/}
                {/*    onPress={() => navigation.navigate("DashboardTabNavigator")}*/}
                {/*/>*/}
                {/*<ButtonPrimary*/}
                {/*    title="Ir para o login"*/}
                {/*    onPress={() => navigation.navigate("Login")}*/}
                {/*/>*/}

            </ContainerViewLoginRegister>
        </ContainerScroll>
    );
}
