import BackButton from '@components/BackButton';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
} from './styles';
import { useTheme } from 'styled-components';

import Arrow from '@assets/images/arrow-left.svg';

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
            <DateValue />
          </DateInfo>
          <Arrow />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue />
          </DateInfo>
        </RentalPeriod>
      </Header>
    </Container>
  );
};

export default Schedule;
