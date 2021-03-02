import React from 'react';
//
import {
    DrawerContent,
    HeaderDrawer,
    ButtonUserHeader,
    ButtonCloseHeader,
    ImageUser,
    ImageClose,
} from './styles';
import { DrawerProps } from '../DrawerInfoUser';

const DrawerContentView: React.FC<DrawerProps> = ({ navigation, children }) => {
    return (
        <DrawerContent>
            <HeaderDrawer>
                <ButtonUserHeader>
                    <ImageUser
                        source={require('../../assets/user-drawer.png')}
                    />
                </ButtonUserHeader>
                <ButtonCloseHeader onPress={() => navigation.closeDrawer()}>
                    <ImageClose
                        source={require('../../assets/close-drawer.png')}
                    />
                </ButtonCloseHeader>
            </HeaderDrawer>
            {children}
        </DrawerContent>
    );
};

export default DrawerContentView;
