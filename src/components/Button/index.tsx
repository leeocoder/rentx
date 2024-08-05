import React from 'react';
import { Container, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

const Button = ({ title, color, ...rest }: ButtonProps) => {
  return (
    <Container
      color={color}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
