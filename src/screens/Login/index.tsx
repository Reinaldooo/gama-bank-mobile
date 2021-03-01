import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
//
import ButtonPrimary from '../../components/ButtonPrimary';
import { LinksBottom } from './styles';
import WhiteCardLoginRegister from '../../components/WhiteCardLoginRegister';
import ContainerViewLoginRegister from '../../components/ContainerViewLoginRegister';
import ContainerScroll from '../../components/ContainerScrollView';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import { logInUser } from '../../store/modules/user/actions';

interface LoginForm {
    login: string;
    passwd: string;
}

export default function Login() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const formRef = useRef<FormHandles>(null);

    async function loginSysGama(data: LoginForm) {
        const { login, passwd } = data;

        try {
            // Start by cleaning errors
            formRef.current?.setErrors({});

            const schema = Yup.object({
                login: Yup.string().min(5).required('Cpf obrigatório.'),
                passwd: Yup.string().required('Campo obrigatório'),
            });

            await schema.validate(data, { abortEarly: false });

            const postData = {
                usuario: login,
                senha: passwd,
            };

            // This has to be reset here and re-inserted below because the login
            // endpoint will break if the request has an old Authorization header
            api.defaults.headers.Authorization = null;

            await api.post(`login`, postData).then(async ({ data }) => {
                await AsyncStorage.clear();
                const token = ['@tokenApp', data.token];
                const login = ['@loginApp', data.usuario.login];
                const userName = [
                    '@userNameApp',
                    data.usuario.nome.split(' ')[0],
                ];
                await AsyncStorage.multiSet([token, login, userName]);
                api.defaults.headers.Authorization = data.token;
                dispatch(
                    logInUser({
                        token: token[1],
                        userName: userName[1],
                        login: login[1],
                    })
                );
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                // This is the way to set errors with unform. Each key is the input name and
                // it will be set on the 'error' variable coming from the useField hook in the Comp
                formRef.current?.setErrors(errors);
                return;
            }
            console.log(err);
        }
    }

    function navForgetPassword() {
        navigation.navigate('ForgotPasswd');
    }

    function navCreateAccount() {
        navigation.navigate('CreateAccount');
    }

    const submitFormButton = () => {
        formRef.current?.submitForm();
    };

    return (
        <ContainerScroll>
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister
                    title="Seja bem vindo, informe seus dados para logar."
                    subtitle={null}
                >
                    <Form ref={formRef} onSubmit={loginSysGama}>
                        <Input
                            name="login"
                            placeholder="Digite seu usuário"
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
                        <LinksBottom onPress={navForgetPassword}>
                            Esqueci minha senha{' '}
                            <Feather
                                name="chevron-right"
                                size={13}
                                color="#8C52E5"
                            />
                        </LinksBottom>
                        <LinksBottom onPress={navCreateAccount}>
                            Ainda não sou cliente{' '}
                            <Feather
                                name="chevron-right"
                                size={13}
                                color="#8C52E5"
                            />
                        </LinksBottom>
                    </Form>
                </WhiteCardLoginRegister>
            </ContainerViewLoginRegister>
        </ContainerScroll>
    );
}
