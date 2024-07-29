import React from 'react';
import { Container, Header, TotalCars, HeaderContent } from './styles';
import Logo from '@assets/images/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

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
    </Container>
  );
};

export default Home;
