import React, { useEffect } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//
import * as S from './styles';
import { DrawerParamList } from '../../navigation/drawer';
import ButtonPrimary from '../../components/ButtonPrimary';
import { getDateInfo } from '../../utils/helpers';
import api from '../../services/api';
import { IRootState } from '../../store';
import { logOutUser } from '../../store/modules/user/actions';
import {
    accountDataSuccess,
    transactionTypesSuccess,
} from '../../store/modules/accounts/actions';
import ContainerScroll from '../../components/ContainerScrollView';
import ContainerViewDashboard from '../../components/ContainerDashboard';
import WhiteCardDashboard from '../../components/WhiteCardDashboard';
import TextBalance from '../../components/TextBalance';
import TextHistoricBalance from '../../components/TextHistoricBalance';

type DashboardHomeNavigationProp = DrawerNavigationProp<
    DrawerParamList,
    'DashboardHome'
>;

type Props = {
    navigation: DashboardHomeNavigationProp;
};

const DashboardHome: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: IRootState) => state.user);

    async function removeAuthData() {
        await AsyncStorage.clear();
        dispatch(logOutUser());
    }

    useEffect(() => {
        const [currentMonth] = getDateInfo();

        const params = {
            inicio: `${currentMonth!.year}-${currentMonth!.month}-01`,
            fim: `${currentMonth!.year}-${currentMonth!.month}-${
                currentMonth!.lastDay
            }`,
            login: user?.login,
        };

        const headers = {
            Authorization: user?.token,
        };

        async function getApiInfo() {
            try {
                const [
                    { data: accounts },
                    { data: tTypes },
                ] = await Promise.all([
                    api.get(`/dashboard`, {
                        params,
                        headers,
                    }),

                    api.get('/lancamentos/planos-conta', {
                        params,
                    }),
                ]);
                dispatch(accountDataSuccess(accounts));
                dispatch(transactionTypesSuccess(tTypes));
            } catch (err) {
                if (err.response?.data.error === 'ExpiredJwtException') {
                    removeAuthData();
                    return;
                }
            }
        }
        getApiInfo();
    }, [dispatch]);

    return (
        <ContainerScroll>
            <ContainerViewDashboard>
                <S.HeaderDashboard>
                    <S.TextHeaderDashboard>Olá, Usuário</S.TextHeaderDashboard>
                    <S.IconHeaderDashboard
                        onPress={() => navigation.openDrawer()}
                    >
                        <S.ImgIconHeaderDashboard
                            source={require('../../assets/icon-user.png')}
                        />
                    </S.IconHeaderDashboard>
                </S.HeaderDashboard>
                <WhiteCardDashboard _MarginBottom="30px" _Padding="20px">
                    <S.HeaderCard>
                        <S.IconHeaderCard
                            source={require('../../assets/icon-money.png')}
                        />
                        <S.TextHeaderCard>Saldo da conta</S.TextHeaderCard>
                    </S.HeaderCard>
                    <S.ContentCard>
                        <TextBalance>R$: 1.890,00</TextBalance>
                        <TextHistoricBalance>
                            Lançamentos de débito: R$ 22,50
                        </TextHistoricBalance>
                    </S.ContentCard>
                </WhiteCardDashboard>
                <WhiteCardDashboard _MarginBottom="30px" _Padding="20px">
                    <S.HeaderCard>
                        <S.IconHeaderCard
                            source={require('../../assets/icon-money.png')}
                        />
                        <S.TextHeaderCard>Planos de conta</S.TextHeaderCard>
                    </S.HeaderCard>
                    <S.PlanAccountContentCard>
                        <TextBalance>R$: 1.890,00</TextBalance>
                        <TextHistoricBalance>
                            Tipo do plano: Receita
                        </TextHistoricBalance>
                    </S.PlanAccountContentCard>
                    <S.PlanAccountCard>
                        <S.TextExpense>Tipo do plano: Despesas</S.TextExpense>
                        <TextBalance _Color="#F45F5F">
                            - R$: 1.890,00
                        </TextBalance>
                    </S.PlanAccountCard>
                </WhiteCardDashboard>
                <WhiteCardDashboard _MarginBottom="90px" _Padding="20px">
                    <S.HeaderCard>
                        <S.IconHeaderCard
                            source={require('../../assets/icon-money.png')}
                        />
                        <S.TextHeaderCard>Últimos Lançamentos</S.TextHeaderCard>
                    </S.HeaderCard>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <TextBalance _Color="#F45F5F" _mTop="10px">
                            - R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>11 de Fev.</S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <TextBalance _Color="#F45F5F" _mTop="10px">
                            - R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>11 de Fev.</S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <TextBalance _mTop="10px">R$: 1.890,00</TextBalance>
                        <S.TextDataHistoric>11 de Fev.</S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <TextBalance _Color="#F45F5F" _mTop="10px">
                            - R$: 1.890,00
                        </TextBalance>
                        <S.TextDataHistoric>11 de Fev.</S.TextDataHistoric>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <TextBalance _mTop="10px">- R$: 1.890,00</TextBalance>
                        <S.TextDataHistoric>11 de Fev.</S.TextDataHistoric>
                    </S.RowLastHistoric>
                </WhiteCardDashboard>
            </ContainerViewDashboard>
        </ContainerScroll>
    );
};

export default DashboardHome;
