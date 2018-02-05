import { fromJS } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const types = {
  SET_GENIE_LOADED: 'GENIE/SET_GENIE_LOADED',
  SET_USER_INFO: 'GENIE/SET_USER_INFO',
  SET_APP_DEVICE: 'GENIE/SET_APP_DEVICE'
};

const defaultState = fromJS({
  genieLoaded: false,
  username: '',
  address: '',
  deviceType: ''
});

export default handleActions({
  [types.SET_GENIE_LOADED]: (state, action) => {
    return state.set('genieLoaded', true);
  },
  [types.SET_USER_INFO]: (state, action) => {
    return state.set('username', fromJS(action.payload.username))
                .set('address', fromJS(action.payload.address));
  },
  [types.SET_APP_DEVICE]: (state, action) => {
    return state.set('deviceType', fromJS(action.payload.deviceType));
  }
}, defaultState);

export const actionCreators = {
  setGenieLoaded: createAction(types.SET_GENIE_LOADED),
  setUserInfo: createAction(types.SET_USER_INFO),
  setAppDevice: createAction(types.SET_APP_DEVICE)
};
