import styled from 'styled-components/native';
import { ThemeType } from '../../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_primary};
`;
