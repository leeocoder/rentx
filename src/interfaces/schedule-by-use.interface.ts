import { CarServerInterface } from './car-server.interface';

// Interface principal para o objeto schedules_byuser
export interface ScheduleByUser {
  id: string;
  user_id: number;
  car: CarServerInterface;
  startDate: string;
  endDate: string;
}

// Interface para a estrutura de Car
export interface CarInterface {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: Rent;
  fuel_type: string;
  thumbnail: string;
  accessories: Accessory[];
  photos: string[];
}

// Interface para a estrutura de Rent
interface Rent {
  period: string;
  price: number;
}

// Interface para a estrutura de Accessory
interface Accessory {
  type: string;
  name: string;
}
