import { useTheme } from 'styled-components';

import {
  ChangePasswordVisibilityButton,
  Container,
  IconContainer,
  InputText,
} from './styles';

import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

const InputPassword = ({ iconName, value, ...rest }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  function handleInputFocus(): void {
    setIsFocused(true);
  }

  function handleInputBlur(): void {
    setIsFocused(false);
    setIsFilled(!!value?.trim());
  }

  function changePasswordVisible(): void {
    setIsPasswordVisible(!isPasswordVisible);
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
        {...rest}
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <ChangePasswordVisibilityButton onPress={changePasswordVisible}>
        <Feather
          name={isPasswordVisible ? 'eye' : 'eye-off'}
          size={24}
          color={theme.colors.text_details}
        />
      </ChangePasswordVisibilityButton>
    </Container>
  );
};

export default InputPassword;
