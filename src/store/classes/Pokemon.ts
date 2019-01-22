export class PokemonListItem {
  name: string = ""
  url: string = ""
}

export class PokemonAbility2 {
  name: string;
  url: string;
}

export class PokemonAbility {
  ability: PokemonAbility2;
  is_hidden: boolean;
  slot: number;
}

export class PokemonForm {
  name: string;
  url: string;
}

export class PokemonVersion {
  name: string;
  url: string;
}

export class PokemonGameIndice {
  game_index: number;
  version: PokemonVersion;
}

export class PokemonMove2 {
  name: string;
  url: string;
}

export class PokemonMoveLearnMethod {
  name: string;
  url: string;
}

export class PokemonVersionGroup {
  name: string;
  url: string;
}

export class PokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokemonMoveLearnMethod;
  version_group: PokemonVersionGroup;
}

export class PokemonMove {
  move: PokemonMove2;
  version_group_details: PokemonVersionGroupDetail[];
}

export class PokemonSpecies {
  name: string;
  url: string;
}

export class PokemonSprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export class PokemonStat2 {
  name: string;
  url: string;
}

export class PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStat2;
}

export class PokemonType2 {
  name: string;
  url: string;
}

export class PokemonType {
  slot: number;
  type: PokemonType2;
}
