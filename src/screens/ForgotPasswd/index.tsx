import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
//
import ButtonPrimary from '../../components/ButtonPrimary';
import { LinksBottom } from './styles';
import WhiteCardLoginRegister from '../../components/WhiteCardLoginRegister';
import ContainerViewLoginRegister from '../../components/ContainerViewLoginRegister';
import ContainerScroll from '../../components/ContainerScrollView';
import ContainerLogoGama from '../../components/LogoGama';
import Input from '../../components/Input';

export default function ForgotPasswd() {
    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);
    const loginInputRef = useRef<TextInput>(null);

    function navLogin() {
        navigation.navigate('Login');
    }

    function navCreateAccount() {
        navigation.navigate('CreateAccount');
    }

    const submitFormButton = () => {
        formRef.current?.submitForm();
    };

    return (
        <ContainerScroll>
            <ContainerLogoGama mTop="50px" mBottom="20px" />
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister title="Redefinir senha">
                    <Form
                        ref={formRef}
                        onSubmit={() => console.log('submit')}
                        style={{ width: '100%' }}
                    >
                        <Input
                            name="email"
                            placeholder="Digite seu E-mail"
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                // Check out Input comp to details on this custom focus method
                                loginInputRef.current?.focus();
                            }}
                        />
                        <Input
                            ref={loginInputRef}
                            name="login"
                            placeholder="Digite seu Login"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onSubmitEditing={submitFormButton}
                        />
                        <ButtonPrimary
                            title="Continuar"
                            iconName="arrow-right"
                            iconColor="#FFF"
                            iconSize={25}
                            marginTop="60px"
                            marginBottom="30px"
                            onPress={() => {
                                navigation.navigate('RedefinePassword');
                            }}
                        />
                        <LinksBottom onPress={navLogin}>
                            Ir para Login{' '}
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
