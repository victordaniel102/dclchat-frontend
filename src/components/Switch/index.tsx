import { useState } from "react";
import { motion } from "framer-motion";
import { SwitchContainer, SliderContainer, Handle, TextContainer, Title } from './styles';

interface Props {
    title?: string;
}

export default function Switch(props: Props) {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <SwitchContainer onClick={toggleSwitch}>
            <SliderContainer on={isOn}>
                <Handle as={motion.div} layout transition={spring} />
            </SliderContainer>
            <TextContainer>
                { props.title ? <Title>{ props.title }</Title> : null }
            </TextContainer>
        </SwitchContainer>
    );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
