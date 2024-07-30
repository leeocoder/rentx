import React from 'react';
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';
import Logo from '@assets/images/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import CarCard, { CardCardProps } from '@components/CarCard';
import { FlatList } from 'react-native';

const fakeData: CardCardProps[] = [
  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },

  {
    id: '1',
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    type: 'Gasolina',
    image: require('@assets/images/audi.png'),
  },
];

const Home = () => {
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
      {/* <CarCard data={fakeData.data} /> */}
      {/* <CarCard data={fakeData.data} /> */}
      <CarList
        data={fakeData}
        keyExtractor={({ id }: CardCardProps) => id}
        renderItem={({ item }: { index: number; item: CardCardProps }) => (
          <CarCard data={item} />
        )}
      />
    </Container>
  );
};

export default Home;
