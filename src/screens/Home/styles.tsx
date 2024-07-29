import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: 113px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.font.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;
