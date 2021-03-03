import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { InputLoginRegister, LinksBottom } from './styles';
import WhiteCardLoginRegister from '../../components/WhiteCardLoginRegister';
import Feather from 'react-native-vector-icons/Feather';
import ContainerScroll from '../../components/ContainerScrollView';
import ContainerViewLoginRegister from '../../components/ContainerViewLoginRegister';
import ContainerLogoGama from '../../components/LogoGama';

export default function RedefinePassword() {
    const navigation = useNavigation();

    function navLogin() {
        navigation.navigate('Login');
    }

    return (
        <ContainerScroll>
            <ContainerLogoGama mTop="50px" mBottom="20px" />
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister title="Redefinir senha">
                    <InputLoginRegister placeholder="Nome do Usuário" />
                    <InputLoginRegister _mTop="60px" placeholder="Nova Senha" />
                    <InputLoginRegister
                        _mTop="60px"
                        placeholder="Confirmar Nova Senha"
                    />
                    <ButtonPrimary
                        title="Continuar"
                        iconName="arrow-right"
                        iconColor="#FFF"
                        iconSize={25}
                        marginTop="60px"
                        marginBottom="30px"
                    />
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
