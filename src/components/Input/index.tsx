import { InputContainer } from './styles';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = (props : InputProps) => {
    return (
        <InputContainer {...props}></InputContainer>
    );
}

export default Input;