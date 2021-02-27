import React from "react";
import {DrawerNavigationProp} from "@react-navigation/drawer";
//
import * as S from "./styles";
import {DrawerParamList} from "../../navigation/drawer";
import ButtonPrimary from "../../components/ButtonPrimary";

type DashboardHomeNavigationProp = DrawerNavigationProp<DrawerParamList,
    "DashboardHome">;

type Props = {
    navigation: DashboardHomeNavigationProp;
};

const DashboardHome: React.FC<Props> = ({navigation}) => {
    return (
        <S.Container>
            <S.Title>Home Dashboard</S.Title>
            <ButtonPrimary title="Abrir drawer" iconName="arrow-right" iconColor="#FFF" iconSize={25} marginTop="60px"
                           marginBottom="30px" onPress={() => navigation.openDrawer()}/>
        </S.Container>
    );
};

export default DashboardHome;
