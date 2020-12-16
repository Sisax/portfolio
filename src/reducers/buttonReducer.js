import { BUTTON_CHANGED } from '../actions/types';

const initialState = {
  buttonActive: 'Introduction',
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CHANGED:
      return {
        ...state,
        buttonActive: action.payload,
      };

      default: return state;
  }
}

export default buttonReducer;