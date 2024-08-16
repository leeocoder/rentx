import { useTheme } from 'styled-components';

import { Container, IconContainer, InputText } from './styles';

import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

const Input = ({ iconName, value, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  function handleInputFocus(): void {
    setIsFocused(true);
  }

  function handleInputBlur(): void {
    setIsFocused(false);
    setIsFilled(!!value?.trim());
  }

  const theme = useTheme();
  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || (!isFocused && isFilled)
              ? theme.colors.main
              : theme.colors.text_details
          }
        />
      </IconContainer>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
