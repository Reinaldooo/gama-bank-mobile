import React, { useRef } from 'react';
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
import { IDashboardState } from '../../store/modules/accounts/types';
import { isAuth } from '../../services/auth';
import { createFloat } from '../../utils/helpers';
import api from '../../services/api';
import { debitTransactionSuccess } from '../../store/modules/accounts/actions';
import getValidationErrors from '../../utils/getValidationErrors';
import { IRootState } from '../../store';

interface IDepositForm {
    data: string;
    descricao: string;
    valor: number | string;
}

export default function Deposit() {
    const formRef = useRef<FormHandles>(null);
    const dispatch = useDispatch();
    const { debitAccount, transactionTypes } = useSelector(
        (state: IDashboardState) => state
    );
    const { user } = useSelector((state: IRootState) => state.user);

    async function handleSubmit({ descricao, data, valor }: IDepositForm) {
        try {
            valor = createFloat(valor);
            // Start by cleaning errors
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
                data,
                descricao,
                login: user?.login,
                valor,
                planoConta: transactionTypes!['R'],
            };

            await api.post(`lancamentos`, postData).then((response) => {
                if (response.status === 200) {
                    // history.push("/dashboard");
                } else {
                    console.log('deu erro');
                }
            });

            // dispatch(
            //     debitTransactionSuccess({
            //         ...postData,
            //         // This id is temporary, it will be replaced with the real one after a reload
            //         // id: shortid(),
            //         planoConta: transactionTypes!['R'],
            //         valor: Number(valor),
            //     })
            // );

            // history.push("/dashboard");
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                // This is the way to set errors with unform. Each key is the input name and
                // it will be set on the 'error' variable coming from the useField hook in the Comp
                formRef.current?.setErrors(errors);
                return;
            }
        }
    }

    return (
        <ContainerScroll>
            <ContainerViewDashboard>
                <WhiteCardDashboard _MarginTop="30px">
                    <S.TextHeaderDashboard>Olá, Usuário</S.TextHeaderDashboard>
                    <S.DepositForm ref={formRef} onSubmit={handleSubmit}>
                        <Input
                            name="destinatario"
                            placeholder="Destinatário"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            name="plano"
                            placeholder="Plano de conta"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            name="transacao"
                            placeholder="Tipo de transação"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Input
                            name="valor"
                            placeholder="Valor de depósito"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <ButtonPrimary
                            title="Realizar depósito"
                            iconName="arrow-right"
                            iconColor="#fff"
                            iconSize={25}
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
