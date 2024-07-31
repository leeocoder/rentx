import styled from 'styled-components/native';
import { ThemeType } from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  color: string;
}

// width: ${Dimensions.get('window').width}px;

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }: { theme: ThemeType } & ButtonProps) =>
    color ? color : theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background_secondary};
`;
