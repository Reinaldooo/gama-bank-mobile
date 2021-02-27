import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { LinksBottom } from './styles';
import WhiteCardLoginRegister from '../../components/WhiteCardLoginRegister';
import Feather from 'react-native-vector-icons/Feather';
import ContainerScroll from '../../components/ContainerScrollView';
import ContainerViewLoginRegister from '../../components/ContainerViewLoginRegister';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';

interface LoginForm {
    login: string;
    passwd: string;
}

export default function Login() {
    const navigation = useNavigation();

    function navForgetPassword() {
        navigation.navigate('ForgotPasswd');
    }

    function navCreateAccount() {
        navigation.navigate('CreateAccount');
    }

    function navDashboard() {
        navigation.navigate('DashboardTabNavigator');
    }

    const submitFormButton = () => {
        formRef.current?.submitForm();
    };

    const formRef = useRef<FormHandles>(null);
    const [loading, setLoading] = useState(false);

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

            setLoading(true);

            // This has to be reset here and re-inserted below because the login
            // endpoint will break if the request has an old Authorization header
            api.defaults.headers.Authorization = null;

            await api.post(`login`, postData).then(({ data }) => {
                localStorage.setItem('@tokenApp', data.token);
                localStorage.setItem('@loginApp', data.usuario.login);
                localStorage.setItem(
                    '@userNameApp',
                    data.usuario.nome.split(' ')[0]
                );
                api.defaults.headers.Authorization = data.token;
            });
            console.log('deu certo');

            navDashboard();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                // This is the way to set errors with unform. Each key is the input name and
                // it will be set on the 'error' variable coming from the useField hook in the Comp
                formRef.current?.setErrors(errors);
                return;
            }
            setLoading(false);
        }
    }

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
                            _loading={loading}
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
