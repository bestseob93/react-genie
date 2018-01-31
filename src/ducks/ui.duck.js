import { fromJS } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const types = {
  SET_SPINNER_VISIBLE: 'UI/SET_SPINNER_VISIBLE'
};

const defaultState = fromJS({
  isSpin: false
});

export default handleActions({
  [types.SET_SPINNER_VISIBLE]: (state, action) => {
    console.log(action);
    return state.set('isSpin', action.payload.visiblity);
  }
}, defaultState);

export const actionCreators = {
  setSpinnerVisible: createAction(types.SET_SPINNER_VISIBLE)
};
