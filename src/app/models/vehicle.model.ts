import {Owner} from "./owner.model";

export interface Vehicle{
  id : number,
  regNumber : string,
  brand : string,
  fiscalPower : number,
  model : string,
  owner : Owner,
}
