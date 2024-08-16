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

const InputPassword = ({ iconName, ...rest }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function changePasswordVisible(): void {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const theme = useTheme();
  return (
    <Container>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text_details}
        />
      </IconContainer>
      <InputText
        {...rest}
        secureTextEntry={isPasswordVisible}
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
