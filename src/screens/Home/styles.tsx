import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ThemeType } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_primary};
`;

export const Header = styled.View`
  height: 113px;
  width: 100%;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.header};
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
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_400};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    rowGap: 16,
  },
  showsVerticalScrollIndicator: false,
})``;
