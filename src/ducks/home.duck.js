import { fromJS } from 'immutable';
import { createActions, handleActions } from 'redux-actions';


const types = {
    SHOW_BUTTON: 'HOME/SHOW_BUTTON'
};

export const showButton = createActions(types.SHOW_BUTTON);

const defaultState = fromJS({
    isButtonShow: false
});

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case types.SHOW_BUTTON:
      return state.set('isButtonShow', true);
    default:
      return state;
  }
}
