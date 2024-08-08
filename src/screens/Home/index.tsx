import Logo from '@assets/images/logo.svg';
import CarCard from '@components/CarCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

import { RootStackParamList } from '../../routes/stack.routes';
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton,
} from './styles';
import { api } from '@services/api';
import { useEffect, useState } from 'react';
import { CarServerInterface } from '../../interfaces/car-server.interface';
import Loading from '@components/Loading';
import { useTheme } from 'styled-components';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

const Home = () => {
  const [cars, setCards] = useState<CarServerInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function loadCardsData() {
      try {
        const response = await api.get<CarServerInterface[]>('/cars');
        setCards(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCardsData();
  });
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme();
  function handleCarDetails(data: CarServerInterface) {
    navigation.navigate('CarDetails', { data });
  }

  function handleMyCars() {
    navigation.navigate('MyCars');
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
      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={({ id }: CarServerInterface) => id}
          renderItem={({
            item,
          }: {
            index: number;
            item: CarServerInterface;
          }) => (
            <CarCard
              data={item}
              onPress={() => handleCarDetails(item)}
            />
          )}
        />
      )}
      <MyCarsButton onPress={handleMyCars}>
        <Ionicons
          name='car-sport'
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  );
};

export default Home;
