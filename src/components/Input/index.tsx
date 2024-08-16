import { useTheme } from 'styled-components';

import { Container, IconContainer, InputText } from './styles';

import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

const Input = ({ iconName, ...rest }: InputProps) => {
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
      <InputText {...rest} />
    </Container>
  );
};

export default Input;
