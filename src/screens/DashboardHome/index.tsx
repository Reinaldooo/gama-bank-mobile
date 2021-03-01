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
        <S.Container>
            <S.Title>Home Dashboard</S.Title>
            <ButtonPrimary
                title="Abrir drawer"
                iconName="arrow-right"
                iconColor="#FFF"
                iconSize={25}
                marginTop="60px"
                marginBottom="30px"
                onPress={() => navigation.openDrawer()}
            />
        </S.Container>
    );
};

export default DashboardHome;
