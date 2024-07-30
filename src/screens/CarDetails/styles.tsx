import styled from 'styled-components/native';

import { ThemeType } from '../../styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
`;

export const Header = styled.SafeAreaView`
  margin-top: 32px;
`;
