import { Reducer } from 'redux'
import { DriverInfoState, DriverInfoActionTypes } from './types'

// Type-safe initialState!
const initialState: DriverInfoState = new DriverInfoState();

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<DriverInfoState> = (state = initialState, action) => {
  switch (action.type) {
    case DriverInfoActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case DriverInfoActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case DriverInfoActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as driverInfoReducer }
