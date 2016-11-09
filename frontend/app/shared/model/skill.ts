
export class SkillValue {
  public value : number;
  public Skill : Skill;
}

export class Skill {
  public id : number;
  public name : string;
  public description : string;
  public key_attribute : string;
  public can_use_untrained : boolean;
}
