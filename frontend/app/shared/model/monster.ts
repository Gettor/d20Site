import { Spell } from './spell';
import { SkillValue } from './skill';

export class Monster {
  public id : number;
  public name : string;
  public custom_description : string;
  public hd_type : number;
  public hd_amount : number;
  public hp : number;
  public initiative : number;
  public speed : number;
  public SkillValues : SkillValue[];
}
