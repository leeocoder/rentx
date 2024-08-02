import BackButton from '@components/BackButton';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  Content,
  Footer,
  DateTitle,
  DateValue,
} from './styles';
import { useTheme } from 'styled-components';

import Arrow from '@assets/images/arrow-left.svg';
import Button from '@components/Button';
import Calendar from '@components/Calendar';

const Schedule = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {}}
          color={colors.shape}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio {'\n'}
          fim do aluguel {'\n'}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
};

export default Schedule;
