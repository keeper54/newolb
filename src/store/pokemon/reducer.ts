import { Reducer } from 'redux'
import { PokemonActionTypes, PokemonState } from './types'

// Type-safe initialState!
const initialState: PokemonState = {
  data: null,
  errors: undefined,
  loading: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<PokemonState> = (state = initialState, action) => {
  switch (action.type) {
    case PokemonActionTypes.GET_POKEMON_LIST: {
      console.log(action.type)
      return { ...state, loading: false, data: action.payload }
    }
    case PokemonActionTypes.GET_POKEMON_BY_ID: {
      console.log(action.type)
      return { ...state, loading: false, data: action.payload }
    }
    case PokemonActionTypes.GET_ERROR: {
      console.log(action.type)
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      console.log(action.type)
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as pokemonReducer }
