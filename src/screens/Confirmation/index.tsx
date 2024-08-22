import BrandSVG from '@assets/images/brand.svg';
import DoneSVG from '@assets/images/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import { useWindowDimensions } from 'react-native';
import ConfirmButton from '@components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  title: string;
  message: string;
  confirmationRoute: string;
}

const Confirmation = () => {
  const route = useRoute();
  const { title, message, confirmationRoute } = route.params as Params;

  const { width: FullWidth } = useWindowDimensions();
  const navigation = useNavigation<any>();
  return (
    <Container>
      <BrandSVG width={FullWidth} />
      <Content>
        <DoneSVG
          width={80}
          height={80}
        />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton
          title='OK'
          onPress={() => navigation.navigate(confirmationRoute)}
        />
      </Footer>
    </Container>
  );
};

export default Confirmation;
