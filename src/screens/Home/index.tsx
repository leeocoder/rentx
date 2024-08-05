import Logo from '@assets/images/logo.svg';
import CarCard, { CardCardProps } from '@components/CarCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MOCK_CAR_DATA_LIST } from '@utils/car-data.mock';

import { RFValue } from 'react-native-responsive-fontsize';

import { RootStackParamList } from '../../routes/stack.routes';
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={MOCK_CAR_DATA_LIST}
        keyExtractor={({ id }: CardCardProps) => id}
        renderItem={({ item }: { index: number; item: CardCardProps }) => (
          <CarCard
            data={item}
            onPress={handleCarDetails}
          />
        )}
      />
    </Container>
  );
};

export default Home;
