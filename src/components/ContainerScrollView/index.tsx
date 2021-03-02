import React from "react";
import {ContainerScrollView} from "./style";

interface ScrollViewProps {
    _bgColor?: string;
}

const ContainerScroll: React.FC<ScrollViewProps> = ({children, _bgColor}) => {
    return (
        <ContainerScrollView _bgColor={_bgColor}>
            {children}
        </ContainerScrollView>
    );
};

export default ContainerScroll;
