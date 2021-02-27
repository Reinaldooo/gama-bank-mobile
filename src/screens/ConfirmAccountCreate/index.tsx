import React from "react";
import {useNavigation} from "@react-navigation/native";
import ContainerScroll from "../../components/ContainerScrollView";
import ContainerLogoGama from "../../components/LogoGama";
import {ContainerConfirmation, TextConfirmation, ImageConfirmation, Container} from "./styles"
import {Text} from "react-native";

export default function ConfirmAccountCreate() {

    const navigation = useNavigation();

    return (
        <ContainerScroll>
            <Container>
                <ContainerLogoGama mTop="60px"/>
                <ContainerConfirmation>
                    <ImageConfirmation source={require('../../assets/ok-create-account.png')}/>
                    <TextConfirmation>Conta criada com sucesso!</TextConfirmation>
                </ContainerConfirmation>
            </Container>
        </ContainerScroll>
    );
}
