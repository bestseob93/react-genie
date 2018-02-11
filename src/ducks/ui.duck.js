import { fromJS } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const types = {
  SET_SPINNER_VISIBLE: 'UI/SET_SPINNER_VISIBLE',
  SET_CART_ANIM_VISIBLE: 'UI/SET_CART_ANIM_VISIBLE'
};

const defaultState = fromJS({
  isSpin: false,
  isCartShow: false
});

export default handleActions({
  [types.SET_SPINNER_VISIBLE]: (state, action) => {
    return state.set('isSpin', action.payload.visiblity);
  },
  [types.SET_CART_ANIM_VISIBLE]: (state, action) => {
    return state.set('isCartShow', action.payload);
  }
}, defaultState);

export const actionCreators = {
  setSpinnerVisible: createAction(types.SET_SPINNER_VISIBLE),
  setCartAnimVisible: createAction(types.SET_CART_ANIM_VISIBLE)
};
