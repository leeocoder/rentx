import BackButton from '@components/BackButton';
import {
  Container,
  About,
  Header,
  Accessories,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Price,
  Period,
  Rent,
  Footer,
} from './styles';
import ImageSlider from '@components/ImageSlider';
import Accessory from '@components/Accessory';
import Speed from '@assets/images/speed.svg';
import Button from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CarDetailsNavigationProp } from '../../routes/routes-types';
import { CarServerInterface } from '../../interfaces/car-server.interface';
import { formatNumberAsCurrency } from '@utils/format-number-as-currency.util';
import { getAccessoriesIcon } from '@utils/get-accessories-icon';

interface Params {
  data: CarServerInterface;
}

const CarDetails = () => {
  const navigation = useNavigation<CarDetailsNavigationProp>();
  const route = useRoute();
  const { data } = route.params as Params;
  function handleRental() {
    navigation.navigate('Schedule', { car: data });
  }
  return (
    <Container>
      {/* <Header>
        <ImageSlider images={data.photos}>
          <BackButton onPress={() => navigation.goBack()} />
        </ImageSlider>
      </Header> */}
      <Content>
        <Details>
          <Description>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>
          </Description>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{formatNumberAsCurrency(data.price)}</Price>
          </Rent>
        </Details>
        <Accessories>
          {data.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoriesIcon(accessory.type)}
            />
          ))}
        </Accessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleRental}
        />
      </Footer>
    </Container>
  );
};

export default CarDetails;
