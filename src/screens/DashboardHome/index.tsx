import React from "react";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import DrawerNavigator, {DrawerParamList} from "../../navigation/drawer";
import ContainerScroll from "../../components/ContainerScrollView";
import ContainerViewDashboard from "../../components/ContainerDashboard";
import WhiteCardDashboard from "../../components/WhiteCardDashboard";
import TextBalance from "../../components/TextBalance";
import * as S from "./styles";
import TextHistoricBalance from "../../components/TextHistoricBalance";

type DashboardHomeNavigationProp = DrawerNavigationProp<DrawerParamList,
    "DashboardHome">;

type Props = {
    navigation: DashboardHomeNavigationProp;
};

const DashboardHome: React.FC<Props> = ({navigation}) => {
    return (
        <ContainerScroll>
            <ContainerViewDashboard>
                <S.HeaderDashboard>
                    <S.TextHeaderDashboard>Olá, Usuário</S.TextHeaderDashboard>
                    <S.IconHeaderDashboard onPress={() => navigation.openDrawer()}>
                        <S.ImgIconHeaderDashboard source={require('../../assets/icon-user.png')}/>
                    </S.IconHeaderDashboard>
                </S.HeaderDashboard>
                <WhiteCardDashboard _MarginBottom="30px" _Padding="20px">
                    <S.HeaderCard>
                        <S.IconHeaderCard source={require('../../assets/icon-money.png')}/>
                        <S.TextHeaderCard>Saldo da conta</S.TextHeaderCard>
                    </S.HeaderCard>
                    <S.ContentCard>
                        <TextBalance>
                            R$: 1.890,00
                        </TextBalance>
                        <TextHistoricBalance>
                            Lançamentos de débito: R$ 22,50
                        </TextHistoricBalance>
                    </S.ContentCard>
                </WhiteCardDashboard>
                <WhiteCardDashboard _MarginBottom="30px" _Padding="20px">
                    <S.HeaderCard>
                        <S.IconHeaderCard source={require('../../assets/icon-money.png')}/>
                        <S.TextHeaderCard>Planos de conta</S.TextHeaderCard>
                    </S.HeaderCard>
                    <S.PlanAccountContentCard>
                        <TextBalance>
                            R$: 1.890,00
                        </TextBalance>
                        <TextHistoricBalance>
                            Tipo do plano: Receita
                        </TextHistoricBalance>
                    </S.PlanAccountContentCard>
                    <S.PlanAccountCard>
                        <S.TextExpense>
                            Tipo do plano: Despesas
                        </S.TextExpense>
                        <TextBalance _Color="#F45F5F">
                            - R$: 1.890,00
                        </TextBalance>
                    </S.PlanAccountCard>
                </WhiteCardDashboard>
                <WhiteCardDashboard _MarginBottom="90px" _Padding="20px">
                    <S.HeaderCard>
                        <S.IconHeaderCard source={require('../../assets/icon-money.png')}/>
                        <S.TextHeaderCard>Últimos Lançamentos</S.TextHeaderCard>
                    </S.HeaderCard>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>|</S.LineRowSeparatorHistoric>
                        <TextBalance _Color="#F45F5F" _mTop="10px">
                            - R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>
                            11 de Fev.
                        </S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>|</S.LineRowSeparatorHistoric>
                        <TextBalance _Color="#F45F5F" _mTop="10px">
                            - R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>
                            11 de Fev.
                        </S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>|</S.LineRowSeparatorHistoric>
                        <TextBalance _mTop="10px">
                            R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>
                            11 de Fev.
                        </S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>|</S.LineRowSeparatorHistoric>
                        <TextBalance _Color="#F45F5F" _mTop="10px">
                            - R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>
                            11 de Fev.
                        </S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>|</S.LineRowSeparatorHistoric>
                        <TextBalance _mTop="10px">
                            - R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>
                            11 de Fev.
                        </S.TextDataHistoric>
                    </S.RowLastHistoric>
                </WhiteCardDashboard>
            </ContainerViewDashboard>
        </ContainerScroll>
    );
};

export default DashboardHome;
