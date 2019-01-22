import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PokemonActionTypes, PokemonList, Pokemon, PokemonState } from './types'
import { getPokemonById, getError, getPokemonList } from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

function* handleFetchAllPokemon(action: ReturnType<typeof getPokemonList>) {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_ENDPOINT, '/')

    if (res.error) {
      yield put(getError(res.error))
    } else {
      yield put(getPokemonList())
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getError(err.stack!))
    } else {
      yield put(getError('An unknown error occured.'))
    }
  }
}

function* handleSelectPokemon(action: ReturnType<typeof getPokemonById>) {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, `/teams/${action.payload}`)

    if (res.error) {
      yield put(getError(res.error))
    } else {
      yield put(getPokemonById(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(getError(err.stack!))
    } else {
      yield put(getError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchAllRequest() {
  yield takeEvery(PokemonActionTypes.GET_POKEMON_LIST, handleFetchAllPokemon)
}

function* watchSelectPokemon() {
  yield takeLatest(PokemonActionTypes.GET_POKEMON_BY_ID, handleSelectPokemon)
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* pokemonSaga() {
  yield all([fork(watchFetchAllRequest), fork(watchSelectPokemon)])
}

export default pokemonSaga
