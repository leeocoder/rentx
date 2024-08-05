import React from 'react';
import { Container, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
}

const ConfirmButton = ({ title, ...rest }: ConfirmButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ConfirmButton;
