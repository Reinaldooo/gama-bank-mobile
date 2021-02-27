import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { LinksBottom } from './styles';
import WhiteCardLoginRegister from '../../components/WhiteCardLoginRegister';
import Feather from 'react-native-vector-icons/Feather';
import ContainerViewLoginRegister from '../../components/ContainerViewLoginRegister';
import ContainerScroll from '../../components/ContainerScrollView';
import { Form } from '@unform/mobile';
// import { FormHandles } from "@unform/core";
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';

interface FormFields {
    cpf?: string;
    name?: string;
    fullName?: string;
    passwd?: string;
    confirmPasswd?: string;
}

export default function CreateAccount() {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    function navLogin() {
        navigation.navigate('Login');
    }

    async function handleSubmit(data: FormFields) {
        const { cpf, name, fullName, passwd } = data;
        // try {
        //   const formData = {
        //     cpf,
        //     login: name,
        //     nome: fullName,
        //     senha: passwd,
        //   };
        //   await api.post("/usuarios", formData);
        // } catch (err) {
        //   console.log("error");
        // }
    }

    const submitFormButton = () => {
        formRef.current?.submitForm();
    };

    return (
        <ContainerScroll>
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister
                    title="Peça sua conta e cartão de crédito do Gama Bank"
                    subtitle={null}
                    pdHorizontal="40px"
                >
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input
                            name="cpf"
                            placeholder="Digite seu CPF"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            name="name"
                            placeholder="Escolha um nome de usuário"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            name="fullName"
                            placeholder="Nome completo"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            name="passwd"
                            placeholder="Digite sua Senha"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />
                        <Input
                            name="confirmPasswd"
                            placeholder="Confirme a sua Senha"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                        />
                        <ButtonPrimary
                            title="Continuar"
                            iconName="arrow-right"
                            iconColor="#9B9B9B"
                            iconSize={25}
                            marginTop="40px"
                            marginBottom="30px"
                            bgColor="#D8D8D8"
                            color="#9B9B9B"
                            onPress={submitFormButton}
                        />
                        <LinksBottom onPress={navLogin}>
                            <Feather
                                name="chevron-left"
                                size={13}
                                color="#8C52E5"
                            />{' '}
                            Voltar para o Login
                        </LinksBottom>
                    </Form>
                </WhiteCardLoginRegister>
            </ContainerViewLoginRegister>
        </ContainerScroll>
    );
}
