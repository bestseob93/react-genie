import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import * as goodsAPI from 'services/goods';

/* ACTION TYPES */
const types = {
  SET_INITIAL_DATA: 'GOODS/SET_INITIAL_DATA',
  GET_GOODS_THUMB: 'GOODS/GET_GOODS_THUMB'
};

const defaultState = fromJS({
  isInit: false,
  goodsThumbs: []
});

/* REDUCER */
export default handleActions({
  [types.SET_INITIAL_DATA]: (state, action) => {
    return state.set('isInit', true);
  },
  [`${types.GET_GOODS_THUMB}_FULFILLED`]: (state, action) => {
    console.log(action);
    return state.set('goodsThumbs', action.payload)
  },
  [`${types.GET_GOODS_THUMB}_REJECTED`]: (state, action) => {
    console.log(action);
    return state.set('goodsThumbs', action.payload)
  }
}, defaultState);

/* ACTION CREATORS */
export const actionCreators = {
  setInitialData: createAction(types.SET_INITIAL_DATA, goodsAPI.initDatas),
  getGoodsThumbnails: createAction(types.GET_GOODS_THUMB, goodsAPI.getGoodsThumbnails)
};

