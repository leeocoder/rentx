import { useTheme } from 'styled-components';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

type BackButtonProps = {
  color?: string;
};

const BackButton = ({
  color,
  ...props
}: BackButtonProps & BorderlessButtonProps) => {
  const theme = useTheme();
  return (
    <Container {...props}>
      <MaterialIcons
        name='chevron-left'
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};

export default BackButton;
