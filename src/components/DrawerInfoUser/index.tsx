import React from 'react';
import { SeparatorBorder } from './styles';
import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import DrawerContentView from '../DrawerContentView';
import DrawerContentInformation from '../DrawerContentInformation';

export type DrawerProps = DrawerContentComponentProps<DrawerContentOptions>;

const DrawerInfoUser: React.FC<DrawerProps> = (props) => {
    return (
        <DrawerContentScrollView>
            <DrawerContentView {...props}>
                <DrawerContentInformation
                    title="Seu nome:"
                    description="Nome do Usuário"
                />
                <DrawerContentInformation
                    title="E-mail:"
                    description="email@email.com"
                />
                <DrawerContentInformation
                    title="Username:"
                    description="UserName"
                />
                <DrawerContentInformation
                    title="CPF:"
                    description="000.000.000-00"
                />
                <SeparatorBorder />
                <DrawerContentInformation
                    title="Você tem"
                    description="4 planos de conta"
                />
            </DrawerContentView>
        </DrawerContentScrollView>
    );
};

export default DrawerInfoUser;
