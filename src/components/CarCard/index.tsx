import React from 'react';
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';
import Gasoline from '@assets/images/gasoline.svg';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CarServerInterface } from '../../interfaces/car-server.interface';

interface CarCardDataProps extends RectButtonProps {
  data: CarServerInterface;
}

const CarCard = ({ data, ...rest }: CarCardDataProps) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>{`R$ ${data.rent?.price}`}</Price>
          </Rent>

          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{ uri: data.thumbnail }}
        resizeMode='contain'
      />
    </Container>
  );
};

export default CarCard;
