import { action } from 'typesafe-actions'
import { DriverInfoActionTypes, DriverInfo } from './types'

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchRequest = () => action(DriverInfoActionTypes.FETCH_REQUEST)

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: DriverInfo) => action(DriverInfoActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(DriverInfoActionTypes.FETCH_ERROR, message)
