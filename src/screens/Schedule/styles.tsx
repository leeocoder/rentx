import styled from 'styled-components/native';

import { ThemeType } from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

interface DateValueProps {
  selected: boolean;
}

export const Header = styled.View`
  width: 100%;
  height: 325px;
  justify-content: center;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.header};
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  margin-top: 32px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;
