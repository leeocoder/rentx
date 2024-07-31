import BackButton from '@components/BackButton';
import {
  Container,
  About,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Price,
  Period,
  Rent,
} from './styles';
import ImageSlider from '@components/ImageSlider';

const CarDetails = () => {
  return (
    <Container>
      <Header>
        <ImageSlider images={[require('@assets/images/audi.png')]}>
          <BackButton onPress={() => {}} />
        </ImageSlider>
      </Header>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
};

export default CarDetails;
