import styled from 'styled-components/native';
import { ThemeType } from '../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 60px;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_600};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.title};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_400};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const FormTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.title};
`;

export const InputWrapper = styled.View`
  margin-top: 16px;
  row-gap: 8px;
`;
