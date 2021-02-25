import React from "react";
import {ContainerScrollView} from "./style";

const ContainerScroll: React.FC = ({children}) => {
    return (
        <ContainerScrollView>
            {children}
        </ContainerScrollView>
    );
};

export default ContainerScroll;
