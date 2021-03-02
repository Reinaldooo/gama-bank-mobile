import React from "react";
import {DrawerContent, HeaderDrawer, ButtonUserHeader, ButtonCloseHeader, ImageUser, ImageClose} from "./styles";

interface NavigationProps {
    navigation: any
}

const DrawerContentView: React.FC<NavigationProps> = ({navigation, children}) => {
    return (
        <DrawerContent>
            <HeaderDrawer>
                <ButtonUserHeader>
                    <ImageUser source={require('../../assets/user-drawer.png')} />
                </ButtonUserHeader>
                <ButtonCloseHeader>
                    <ImageClose source={require('../../assets/close-drawer.png')} />
                </ButtonCloseHeader>
            </HeaderDrawer>
            {children}
        </DrawerContent>
    );
};

export default DrawerContentView;
