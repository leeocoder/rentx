import BackButton from '@components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { api } from '@services/api';

import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { MyCarsNavigationProp } from '../../routes/routes-types';

import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Subtitle,
  Title,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';
import { FlatList } from 'react-native';
import CarCard from '@components/CarCard';
import {
  CarInterface,
  ScheduleByUser,
} from '../../interfaces/schedule-by-use.interface';
import Loading from '@components/Loading';

const MyCars = () => {
  const navigation = useNavigation<MyCarsNavigationProp>();
  const { colors } = useTheme();
  const [cars, setCars] = useState<ScheduleByUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get<ScheduleByUser[]>(
          'schedules_byuser?user_id=1'
        );
        setCars(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  if (loading) return <Loading />;

  return (
    <Container>
      <Header>
        <BackButton
          onPress={handleGoBack}
          color={colors.shape}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio {'\n'}
          fim do aluguel {'\n'}
        </Title>
        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamento Feito</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        <FlatList
          data={cars}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <CarWrapper>
              <CarCard data={item.car} />
              <CarFooter>
                <CarFooterTitle>Período</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>{item.startDate}</CarFooterDate>
                  <AntDesign
                    name='arrowright'
                    size={20}
                    color={colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarFooterDate>{item.endDate}</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWrapper>
          )}
          contentContainerStyle={{ rowGap: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};

export default MyCars;
