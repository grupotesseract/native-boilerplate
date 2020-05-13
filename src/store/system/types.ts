export interface SystemState {
  theme: 'dark' | 'light'
}

export const UPDATE_THEME = 'UPDATE_THEME'

interface UpdateThemeAction {
  type: typeof UPDATE_THEME
  payload: SystemState
}

export type SystemActionTypes = UpdateThemeAction