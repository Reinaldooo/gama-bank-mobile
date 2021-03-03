import React, { useRef, useState } from 'react';
//
import ButtonPrimary from '../../components/ButtonPrimary';
import ContainerScroll from '../../components/ContainerScrollView';
import * as S from './styles';
import * as Yup from 'yup';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import WhiteCardDashboard from '../../components/WhiteCardDashboard';
import ContainerViewDashboard from '../../components/ContainerDashboard';
import { useDispatch, useSelector } from 'react-redux';
import {
    IDashboardState,
    ILancamentoRedux,
} from '../../store/modules/accounts/types';
import { isAuth } from '../../services/auth';
import { createFloat } from '../../utils/helpers';
import api from '../../services/api';
import { debitTransactionSuccess } from '../../store/modules/accounts/actions';
import getValidationErrors from '../../utils/getValidationErrors';
import { IRootState } from '../../store';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { number } from 'yup/lib/locale';

interface IDepositForm {
    data: string;
    descricao: string;
    valor: number | string;
}

export default function Deposit() {
    const formRef = useRef<FormHandles>(null);
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('');

    const { debitAccount, transactionTypes } = useSelector(
        (state: IRootState) => state.accounts
    );

    const { user } = useSelector((state: IRootState) => state.user);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setDate(date.toISOString().substring(0, 10));
        console.log(date);
        hideDatePicker();
    };

    function nav() {
        navigation.navigate('DashboardTabNavigator');
    }

    async function handleSubmit({ descricao, data, valor }: IDepositForm) {
        try {
            valor = createFloat(valor);
            formRef.current?.setErrors({});

            const schema = Yup.object({
                data: Yup.string().required('Campo obrigatório'),
                descricao: Yup.string().required('Campo obrigatório'),
                valor: Yup.number()
                    .max(9999.99, 'Valor máximo de R$ 9.999,99')
                    .required('Campo obrigatório'),
            });

            await schema.validate(
                { descricao, data, valor },
                { abortEarly: false }
            );

            const postData = {
                conta: debitAccount!.id,
                data: date,
                descricao,
                login: user!.login!,
                valor,
                planoConta: transactionTypes!['R'][0],
            };

            await api.post(`lancamentos`, postData).then((response) => {
                if (response.status === 200) {
                    console.log(postData);

                    nav();
                } else {
                    console.log('deu erro');
                    console.log(postData);
                }
            });

            dispatch(
                debitTransactionSuccess({
                    ...postData,
                    id: '156552',
                    valor: Number(valor),
                })
            );
            nav();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
                return;
            }
        }
    }
    const submitFormButton = () => {
        formRef.current?.submitForm();
        console.log('postData');
    };

    return (
        <ContainerScroll>
            <ContainerViewDashboard>
                <WhiteCardDashboard _MarginTop="30px">
                    <S.TextHeaderDashboard>Olá, Usuário</S.TextHeaderDashboard>
                    <S.DepositForm ref={formRef} onSubmit={handleSubmit}>
                        <Input
                            name="Descrição"
                            placeholder="Descrição"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Button
                            onPress={showDatePicker}
                            title="Show date picker!"
                        />

                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />

                        <Input
                            name="valor"
                            placeholder="Valor de depósito"
                            keyboardType={number}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <ButtonPrimary
                            title="Realizar depósito"
                            iconName="arrow-right"
                            iconColor="#fff"
                            iconSize={25}
                            onPress={submitFormButton}
                            marginTop="20px"
                            marginBottom="30px"
                            bgColor="#63dc3f"
                            color="#fff"
                        />
                    </S.DepositForm>
                </WhiteCardDashboard>
            </ContainerViewDashboard>
        </ContainerScroll>
    );
}
