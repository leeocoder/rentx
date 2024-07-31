import styled from 'styled-components/native';
import { ThemeType } from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

// width: ${Dimensions.get('window').width}px;

export const Container = styled.View`
  width: 109px;
  height: 92px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_primary};
  padding: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_500};
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
  margin-top: 14px;
`;
