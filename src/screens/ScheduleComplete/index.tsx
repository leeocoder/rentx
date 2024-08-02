import { useTheme } from 'styled-components';
import BrandSVG from '@assets/images/brand.svg';
import DoneSVG from '@assets/images/done.svg';

import { Container, Content, Title, Message } from './styles';
import { useWindowDimensions } from 'react-native';

const ScheduleComplete = () => {
  const { width: FullWidth } = useWindowDimensions();
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
    </Container>
  );
};

export default ScheduleComplete;
