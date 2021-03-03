import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { LinksBottom, CreateAccountForm } from './styles';
import WhiteCardLoginRegister from '../../components/WhiteCardLoginRegister';
import Feather from 'react-native-vector-icons/Feather';
import ContainerViewLoginRegister from '../../components/ContainerViewLoginRegister';
import ContainerScroll from '../../components/ContainerScrollView';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import ContainerLogoGama from '../../components/LogoGama';

interface FormFields {
    cpf?: string;
    name?: string;
    fullName?: string;
    passwd?: string;
    confirmPasswd?: string;
}

export default function CreateAccount() {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    const submitFormButton = () => {
        formRef.current?.submitForm();
    };

    function navAccountCreated() {
        navigation.navigate('ConfirmAccountCreate');
    }

    function navLogin() {
        navigation.navigate('Login');
    }

    async function handleSubmit(data: FormFields) {
        const { cpf, name, fullName, passwd } = data;
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object({
                cpf: Yup.string().required('Cpf obrigatório.'),
                name: Yup.string().required('Campo obrigatório'),
                fullName: Yup.string().required('Campo obrigatório'),
                passwd: Yup.string().required('Senha obrigatória'),
                confirmPasswd: Yup.string().oneOf(
                    [Yup.ref('passwd'), null],
                    'Senhas diferentes'
                ),
            });

            await schema.validate(data, { abortEarly: false });

            setLoading(true);

            // const formData = {
            //     cpf,
            //     login: name,
            //     nome: fullName,
            //     senha: passwd,
            // };
            // await api.post('/usuarios', formData);
            navAccountCreated();
        } catch (err) {
            setLoading(false);
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                // This is the way to set errors with unform. Each key is the input name and
                // it will be set on the 'error' variable coming from the useField hook in the Comp
                formRef.current?.setErrors(errors);
                return;
            }
        }
    }

    return (
        <ContainerScroll>
            <ContainerLogoGama mTop="50px" mBottom="20px" />
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister
                    title="Peça sua conta e cartão de crédito do Gama Bank"
                    pdHorizontal="40px"
                >
                    <CreateAccountForm ref={formRef} onSubmit={handleSubmit}>
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
                            iconColor="#fff"
                            iconSize={25}
                            marginTop="20px"
                            marginBottom="30px"
                            bgColor="#63dc3f"
                            color="#fff"
                            onPress={submitFormButton}
                            _loading={loading}
                        />
                        <LinksBottom onPress={navLogin}>
                            <Feather
                                name="chevron-left"
                                size={13}
                                color="#8C52E5"
                            />{' '}
                            Voltar para o Login
                        </LinksBottom>
                    </CreateAccountForm>
                </WhiteCardLoginRegister>
            </ContainerViewLoginRegister>
        </ContainerScroll>
    );
}
