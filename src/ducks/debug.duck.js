import { fromJS } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const types = {
  HANDLE_DEBUG_VALUE: 'DEBUG/HANDLE_DEBUG_VALUE'
};

const defaultState = fromJS({
  genieMsg: ''
});

export default handleActions({
  [types.HANDLE_DEBUG_VALUE]: (state, action) => {
      return state.set('genieMsg', action.payload.value);
  }
}, defaultState);

export const actionCreators = {
  handleDebugValue: createAction(types.HANDLE_DEBUG_VALUE)
};