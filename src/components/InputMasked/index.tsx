import React, {
    useRef,
    useEffect,
    useImperativeHandle,
    forwardRef,
    useState,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
//
import * as S from './styles';
import { brlMask, formatCPF } from '../../utils/helpers';

interface InputProps extends TextInputProps {
    name: string;
    icon?: string;
    mask: 'BRL' | 'CPF';
}

interface InputValueRef {
    value: string;
}

interface InputRef {
    focus(): void;
}
const InputMasked: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, icon, mask, ...rest },
    ref
) => {
    // This is a very rare kind of component thats uses "useImperativeHandle"
    // useImperativeHandle allows me to pass values and methods from a Child
    // component back up to a Parent using a ref. From there, the Parent can either
    // use it itself or pass it to another Child. This is needed here because the
    // input already has his own ref but the parent also sends a ref. The hook
    // receives the ref from parent and add the focus method to it

    // Input is actually a render function, and on the export, "forwardRef" turns
    // it into a component

    // https://medium.com/@binyamin/react-hooks-useref-useimperativehandle-uselayouteffect-ede6f40f393e
    // https://www.selbekk.io/blog/2020/05/forwarding-refs-in-typescript/
    // Correcting link above because RefForwardComponent is deprecated:
    // https://stackoverflow.com/questions/58991706/typescript-refforwardingcomponent-not-working

    const {
        registerField,
        defaultValue,
        fieldName,
        error,
        clearError,
    } = useField(name);
    const inputElRef = useRef<any>(null);
    const inputValueRef = useRef<InputValueRef>({ value: defaultValue });
    const [isFocused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const isBRL = mask === 'BRL';

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
        });
    }, []);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElRef.current.focus();
        },
    }));

    const handleFocus = () => {
        clearError();
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleChange = (value: string) => {
        if (!isBRL) {
            inputValueRef.current.value = formatCPF(value);
            setInputValue(formatCPF(value));
            return;
        }

        value = brlMask(value);

        if (!value) {
            inputValueRef.current.value = '';
            setInputValue('');
            return;
        }
        inputValueRef.current.value = 'R$ ' + value;
        setInputValue('R$ ' + value);
    };

    return (
        <S.Container isErrored={!!error}>
            <S.Icon
                name={icon}
                size={20}
                color={isFocused ? '#025aa2' : '#999'}
            />

            <S.TextInput
                ref={inputElRef}
                placeholderTextColor="#999"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={inputValue}
                defaultValue={defaultValue}
                onChangeText={(value) => handleChange(value)}
                {...rest}
            />
            {isBRL && <S.MaxValue>Max: R$ 9.999,99</S.MaxValue>}
        </S.Container>
    );
};

export default forwardRef(InputMasked);
