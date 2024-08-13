import React from 'react';
import { Container, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  enable?: boolean;
  isLoading?: boolean;
  light?: boolean;
}

const Button = ({
  title,
  color,
  enable = true,
  isLoading = false,
  light = false,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();
  return (
    <Container
      color={color}
      {...rest}
      enabled={enable}
      style={{ opacity: enable ? 1 : 0.5 }}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
