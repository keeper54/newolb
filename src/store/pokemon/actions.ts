import { action } from 'typesafe-actions'
import { PokemonList, Pokemon, PokemonActionTypes } from './types'

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const getPokemonList = () => action(PokemonActionTypes.GET_POKEMON_LIST)
export const getError = (message: string) => action(PokemonActionTypes.GET_ERROR, message)
export const getPokemonById = (data: Pokemon) => action(PokemonActionTypes.GET_POKEMON_BY_ID, data)
