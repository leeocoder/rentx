import BrandSVG from '@assets/images/brand.svg';
import DoneSVG from '@assets/images/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import { useWindowDimensions } from 'react-native';
import ConfirmButton from '@components/ConfirmButton';
import { ScheduleCompleteNavigationProp } from '../../routes/routes-types';
import { useNavigation } from '@react-navigation/native';

const ScheduleComplete = () => {
  const { width: FullWidth } = useWindowDimensions();
  const navigation = useNavigation<ScheduleCompleteNavigationProp>();
  return (
    <Container>
      <BrandSVG width={FullWidth} />
      <Content>
        <DoneSVG
          width={80}
          height={80}
        />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir
          {'\n'}
          até a concessionária da RENTX
          {'\n'}
          pegar o seu automóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton
          title='OK'
          onPress={() => navigation.navigate('Home')}
        />
      </Footer>
    </Container>
  );
};

export default ScheduleComplete;
