import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { ThemeType } from '../../styles/theme';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  margin-right: 2px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
`;

export const InputText = styled.TextInput`
  flex: 1;
  padding: 0 22px;
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.text};
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_400};
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
`;

export const ChangePasswordVisibilityButton = styled(BorderlessButton)`
  height: 56px;
  padding-right: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
`;
