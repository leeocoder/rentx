import React from 'react';
import { Container, Name } from './styles';
import { SvgProps } from 'react-native-svg';

type AccessoryProps = {
  name: string;
  icon: React.FC<SvgProps>;
};

const Accessory = ({ name, icon: Icon }: AccessoryProps) => {
  return (
    <Container>
      <Icon
        width={24}
        height={24}
      />
      <Name>{name}</Name>
    </Container>
  );
};

export default Accessory;
