import styled from 'styled-components/native';

import { ThemeType } from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

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
  font-size: ${RFValue(30)}px;
  margin-top: 32px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.title};
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const CarWrapper = styled.View`
  width: 100%;
`;

export const CarFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
  margin-top: 2px;
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text_details};
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.title};
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
`;
