import { SystemState, SystemActionTypes, UPDATE_THEME } from './types'

const initialState: SystemState = {
  theme: 'light'
}

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_THEME: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}