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

export type CardCardProps = {
  id: string;
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  type: string;
  image: string;
};

type CarCardDataProps = {
  data: CardCardProps;
};

const CarCard = ({ data }: CarCardDataProps) => {
  console.log(data);
  return (
    <Container>
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
        source={data.image}
        resizeModel='contain'
      />
    </Container>
  );
};

export default CarCard;
