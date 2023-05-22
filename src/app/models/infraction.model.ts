import {Vehicle} from "./vehicle.model";

export interface Infraction{
  id : number,
  date : string,
  vehicleSpeed : number,
  radarMaxSpeed : number,
  fineAmount : number,
  radarId : number,
  vehicleId : number,
  vehicle : Vehicle
}
