import React, { useState, InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";
//
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputPrimary: React.FC<InputProps> = ({  name, ...rest }) => {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    // Unform setup
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  function focus() {
    setFocused(true)
    clearError()
  }

  return (
    <S.Container isFocused={isFocused} isErrored={!!error}>
      <input
        onFocus={focus}
        onBlur={() => setFocused(false)}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <S.ErrorTooltip title={error}>
        </S.ErrorTooltip>
      )}
    </S.Container>
  );
};

export default InputPrimary;
