import React from "react";
import {useNavigation} from "@react-navigation/native";
//
import * as S from "./styles";
import ContainerScroll from "../../components/ContainerScrollView";
import ContainerViewDashboard from "../../components/ContainerDashboard";
import WhiteCardDashboard from "../../components/WhiteCardDashboard";
import TextBalance from "../../components/TextBalance";
import {Text, View} from "react-native";

export default function Plans() {
    const navigation = useNavigation();
    return (
        <ContainerScroll>
            <ContainerViewDashboard>
                <WhiteCardDashboard _MarginBottom="120px" _Padding="20px 20px 40px">
                    <S.HeaderCard>
                        <S.IconHeaderCard
                            source={require('../../assets/icon-money.png')}
                        />
                        <S.TextHeaderCard>Planos</S.TextHeaderCard>
                    </S.HeaderCard>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <S.ViewPlans>
                            <S.TextViewPlans>Receitas</S.TextViewPlans>
                            <S.LettersViewPlans>R</S.LettersViewPlans>
                        </S.ViewPlans>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <S.ViewPlans>
                            <S.TextViewPlans>Despesas</S.TextViewPlans>
                            <S.LettersViewPlans>D</S.LettersViewPlans>
                        </S.ViewPlans>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <S.ViewPlans>
                            <S.TextViewPlans>TRF_ENTRE_CONTAS</S.TextViewPlans>
                            <S.LettersViewPlans>TC</S.LettersViewPlans>
                        </S.ViewPlans>
                    </S.RowLastHistoric>
                    <S.RowLastHistoric>
                        <S.LineRowSeparatorHistoric>
                            |
                        </S.LineRowSeparatorHistoric>
                        <S.ViewPlans>
                            <S.TextViewPlans>TRF_ENTRE_USUARIOS</S.TextViewPlans>
                            <S.LettersViewPlans>TU</S.LettersViewPlans>
                        </S.ViewPlans>
                    </S.RowLastHistoric>
                </WhiteCardDashboard>
            </ContainerViewDashboard>
        </ContainerScroll>
    );
}
