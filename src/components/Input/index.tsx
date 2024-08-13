import { useTheme } from 'styled-components';

import { Container } from './styles';

import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

const Input = ({ iconName }: InputProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Feather
        name={iconName}
        size={24}
        color={'red'}
      />
    </Container>
  );
};

export default Input;
