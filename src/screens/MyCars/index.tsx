import { useNavigation } from '@react-navigation/native';

import { MyCarsNavigationProp } from '../../routes/routes-types';
import { Container } from './styles';

const MyCars = () => {
  const navigation = useNavigation<MyCarsNavigationProp>();
  return <Container></Container>;
};

export default MyCars;
