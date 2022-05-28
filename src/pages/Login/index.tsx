import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './style';
import { useState } from 'react';

const Login = (props: { onEnter: Function }) => {
    const [name, setName] = useState("");

    return (
        <Container>
            <p>Entrar</p>
            <h1>DCL Chat</h1>
            <div>
                <Input type="text" placeholder="Nome de usuário" onChange={(e) => setName(e.target.value)} />
                <Button onClick={(e) => props.onEnter(name)}>Entrar</Button>
            </div>
        </Container>
    );
}

export default Login;