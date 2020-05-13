import { SystemState, UPDATE_THEME, SystemActionTypes } from './types'

export function updateTheme(theme: SystemState): SystemActionTypes {
  return {
    type: UPDATE_THEME,
    payload: theme
  }
}