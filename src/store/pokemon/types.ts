import {
  PokemonListItem, PokemonAbility, PokemonForm, PokemonGameIndice,
  PokemonMove, PokemonSpecies, PokemonSprites, PokemonStat, PokemonType
} from '../classes/Pokemon'

// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /pokemon
// https://pokeapi.co/api/v2/pokemon/
export class PokemonList {

  count: number = null
  next: string = null
  previous: string = null
  results: PokemonListItem[]
}

// Response object for GET /pokemon/{id}
// https://pokeapi.co/api/v2/pokemon/5/
export class Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonForm[];
  game_indices: PokemonGameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

// Use `const enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.

export enum PokemonActionTypes {
  GET_POKEMON_LIST = '@@pokemon/GET_POKEMON_LIST',
  GET_POKEMON_BY_ID = '@@pokemon/GET_POKEMON_BY_ID',
  GET_ERROR = '@@pokemon/GET_ERROR'
}

// ["getPokemonsList", "pokemon/"],
// ["getPokemonColorsList", "pokemon-color/"],
// ["getPokemonFormsList", "pokemon-form/"],
// ["getPokemonHabitatsList", "pokemon-habitat/"],
// ["getPokemonShapesList", "pokemon-shape/"],
// ["getPokemonSpeciesList", "pokemon-species/"],

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export class PokemonState {
  readonly data: PokemonList = new PokemonList();
  readonly errors?: string = "";
  readonly loading?: boolean;
}
