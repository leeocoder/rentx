import styled from 'styled-components/native';
import { ThemeType } from '../../styles/theme';

type BulletIndexProps = {
  active?: boolean;
};

export const Container = styled.View<BulletIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: ${({ theme, active }: { theme: ThemeType } & BulletIndexProps) =>
    active ? theme.colors.title : theme.colors.shape};
`;
