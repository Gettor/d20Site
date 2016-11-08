import { Spell } from './spell';

export class Monster {
  public id : number;
  public name : string;
  public custom_description : string;
  public hd_type : number;
  public hd_amount : number;
  public hp : number;
  public initiative : number;
  public speed : number;
  public Spells : Spell[];
}
