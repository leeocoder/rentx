import BackButton from '@components/BackButton';
import { Container, Header } from './styles';
import ImageSlider from '@components/ImageSlider';

const CarDetails = () => {
  return (
    <Container>
      <Header>
        <ImageSlider images={[require('@assets/images/audi.png')]}>
          <BackButton onPress={() => {}} />
        </ImageSlider>
      </Header>
    </Container>
  );
};

export default CarDetails;
