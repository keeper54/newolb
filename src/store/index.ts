import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { LayoutState, layoutReducer } from './layout'

import heroesSaga from './heroes/sagas'
import { heroesReducer } from './heroes/reducer'
import { HeroesState } from './heroes/types'
import teamsSaga from './teams/sagas'
import { TeamsState } from './teams/types'
import { teamsReducer } from './teams/reducer'
import { DriverInfoState } from './driverInfo/types';
import { driverInfoReducer } from './driverInfo/reducer';

import pokemonSaga from './pokemon/sagas'
import { pokemonReducer } from './pokemon/reducer';
import { PokemonState } from './pokemon/types';

// The top-level state object
export interface ApplicationState {
  layout: LayoutState
  heroes: HeroesState
  teams: TeamsState
  driversInformation: DriverInfoState
  pokemon: PokemonState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<ApplicationState>({
  layout: layoutReducer,
  heroes: heroesReducer,
  teams: teamsReducer,
  driversInformation: driverInfoReducer,
  pokemon: pokemonReducer
})

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(heroesSaga), fork(teamsSaga), fork(pokemonSaga)])
}
