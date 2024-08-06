interface CarAccessory {
  type: string;
  name: string;
}

interface CarPhoto {
  id: string;
  photo: string;
}

interface CarRent {
  period: string;
  price: number;
}

export interface CarServerInterface {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: CarRent;
  fuel_type: string;
  thumbnail: string;
  accessories: CarAccessory[];
  photos: CarPhoto[];
}

interface ScheduleByCar {
  id: string;
  unavailable_dates: string[];
}

interface CarRentalData {
  cars: CarServerInterface[];
  schedules_bycars: ScheduleByCar[];
  schedules_byuser: any[];
}
