import React from 'react';
import { Container } from './style';

type BulletProps = {
  active?: boolean;
};

const Bullet = ({ active = false }: BulletProps) => {
  return <Container active={active} />;
};

export default Bullet;
