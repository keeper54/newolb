import { Drivers } from '../classes/Drivers'
import { DriverInfoPageState } from '../classes/DriverInfoPageState'
// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /heroes
// https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
export class DriverInfo {
  birthdate: string = "";
  married: string = "";
  active: boolean = false;
  drivers: Drivers = new Drivers();
  pageState: DriverInfoPageState = new DriverInfoPageState();
}

// Use `const enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export enum DriverInfoActionTypes {
  FETCH_REQUEST = '@@driverInfo/FETCH_REQUEST',
  FETCH_SUCCESS = '@@driverInfo/FETCH_SUCCESS',
  FETCH_ERROR = '@@driverInfo/FETCH_ERROR',
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export class DriverInfoState {
  readonly data: DriverInfo = new DriverInfo();
  readonly errors?: string = "";
}
