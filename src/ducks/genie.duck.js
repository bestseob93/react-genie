import { fromJS } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const types = {
  SET_GENIE_LOADED: 'GENIE/SET_GENIE_LOADED'
};

const defaultState = fromJS({
  genieLoaded: false
});

export default handleActions({
  [types.SET_GENIE_LOADED]: (state, action) => {
    return state.set('genieLoaded', true);
  }
}, defaultState);

export const actionCreators = {
  setGenieLoaded: createAction(types.SET_GENIE_LOADED)
};
