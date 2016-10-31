
export class SpellType {
  public id : number;
  public name : string;
  public description : string;
}

export class Spell {
  public id : number;
  public name : string;
  public description : string;
  public level : number;
  public level_class : string;
  public save_type : number;
  public permits_sr : boolean;
  public MonsterId : number;
  public SpellType : SpellType;
}
