import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ThemeType } from '../../styles/theme';
import { Dimensions } from 'react-native';

type ImageIndexProps = {
  active?: boolean;
};

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const ImagesIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
  gap: 8px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: ${({ theme, active }: { theme: ThemeType } & ImageIndexProps) =>
    active ? theme.colors.title : theme.colors.shape};
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
