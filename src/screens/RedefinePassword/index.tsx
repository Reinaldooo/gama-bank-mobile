import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//
import ButtonPrimary from '../../components/ButtonPrimary';
import { LinksBottom } from './styles';
import WhiteCardLoginRegister from '../../components/WhiteCardLoginRegister';
import ContainerScroll from '../../components/ContainerScrollView';
import ContainerViewLoginRegister from '../../components/ContainerViewLoginRegister';
import ContainerLogoGama from '../../components/LogoGama';
import Input from '../../components/Input';

export default function RedefinePassword() {
    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);
    const passwdConfirmInputRef = useRef<TextInput>(null);

    function navLogin() {
        navigation.navigate('Login');
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
                        style={{ width: '100%' }}
                        onSubmit={() => console.log('submit')}
                    >
                        <Input
                            name="passwd"
                            placeholder="Nova Senha"
                            secureTextEntry
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                // Check out Input comp to details on this custom focus method
                                passwdConfirmInputRef.current?.focus();
                            }}
                        />
                        <Input
                            ref={passwdConfirmInputRef}
                            name="passwdConfirm"
                            placeholder="Confirmar Nova Senha"
                            secureTextEntry
                            returnKeyType="send"
                            onSubmitEditing={submitFormButton}
                        />
                        <ButtonPrimary
                            title="Continuar"
                            iconName="arrow-right"
                            iconColor="#FFF"
                            iconSize={25}
                            marginTop="60px"
                            marginBottom="30px"
                            onPress={submitFormButton}
                        />
                    </Form>
                    <LinksBottom onPress={navLogin}>
                        Ir para Login{' '}
                        <Feather
                            name="chevron-right"
                            size={13}
                            color="#8C52E5"
                        />
                    </LinksBottom>
                </WhiteCardLoginRegister>
            </ContainerViewLoginRegister>
        </ContainerScroll>
    );
}
