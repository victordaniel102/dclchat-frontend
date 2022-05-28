import { ButtonContainer } from './styles';
import { ButtonHTMLAttributes } from 'react';
import Ink from 'react-ink';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = (props : ButtonProps) => {
    return (
        <ButtonContainer {...props}>
            <Ink />
            {props.children}
        </ButtonContainer>
    );
}

export default Button;