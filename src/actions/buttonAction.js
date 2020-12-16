import { BUTTON_CHANGED } from './types';

export const changeActiveButton = (buttonId) => ({
  type: BUTTON_CHANGED,
  payload: buttonId,
});