import styled from 'styled-components/native';

import { ThemeType } from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
`;

export const Header = styled.SafeAreaView`
  margin-top: 32px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text_details};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.title};
`;

export const Price = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.main};
`;

export const Period = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text_details};
  text-transform: uppercase;
`;

export const About = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text_details};
  width: 100%;
  margin-top: 24px;
  line-height: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_primary};
  padding: 24px;
`;
