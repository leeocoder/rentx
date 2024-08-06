import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { ThemeType } from '../../styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;
export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_400};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  gap: 24px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text_details};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_400};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: 167px;
  height: 100%;
`;
