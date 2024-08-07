import Acceleration from '@assets/images/acceleration.svg';
import Exchange from '@assets/images/exchange.svg';
import Energy from '@assets/images/energy.svg';
import Force from '@assets/images/force.svg';
import Gasoline from '@assets/images/gasoline.svg';
import People from '@assets/images/people.svg';
import Speed from '@assets/images/speed.svg';
import Hybrid from '@assets/images/hybrid.svg';
import Car from '@assets/images/car.svg';

import { SvgProps } from 'react-native-svg';

export function getAccessoriesIcon(iconType: string): React.FC<SvgProps> {
  const map: { [key: string]: React.FC<SvgProps> } = {
    speed: Speed,
    acceleration: Acceleration,
    turning_diameter: Force,
    electric_motor: Energy,
    hybrid_motor: Hybrid,
    gasoline_motor: Gasoline,
    seats: People,
    exchange: Exchange,
  };
  return map[iconType] || Car;
}
