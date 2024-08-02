import styled from 'styled-components/native';
import { ThemeType } from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.header};
  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-family: ${({ theme }: { theme: ThemeType }) =>
    theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 40px;
`;

export const Message = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text_details};
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  text-align: center;
  margin-top: 16px;
  line-height: ${RFValue(25)}px;
`;
