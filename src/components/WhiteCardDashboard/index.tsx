import React from "react";
import {ContainerCard} from "./styles";

interface WhiteCardGenericLoginRegisterProps {
    _Padding?: string;
    _MarginBottom?: string;
}

const WhiteCardDashboard: React.FC<WhiteCardGenericLoginRegisterProps> = ({
    _Padding,
    _MarginBottom,
    children
    }) => {
    return (
        <ContainerCard _Padding={_Padding} _MarginBottom={_MarginBottom}>
            {children}
        </ContainerCard>
    );
};

export default WhiteCardDashboard;
