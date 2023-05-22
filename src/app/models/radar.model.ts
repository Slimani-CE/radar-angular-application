import {Infraction} from "./infraction.model";

export interface Radar{
  id : number,
  maxSpeed : number,
  longitude : number,
  latitude : number,
  infractions : Array<Infraction>,
  nbrInfractions : number
}
