import styled, { css } from 'styled-components/native';
import { ThemeType } from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  gap: 2px;
  border-bottom-width: 2px;
  border-bottom-color: transparent;

  ${({ theme, isFocused }: { theme: ThemeType } & ContainerProps) =>
    isFocused
      ? css`
          border-bottom-width: 2px;
          border-bottom-color: ${theme.colors.main};
        `
      : null}
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
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
