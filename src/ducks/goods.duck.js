import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import * as goodsAPI from 'services/goods';

/* ACTION TYPES */
const types = {
  SET_INITIAL_DATA: 'GOODS/SET_INITIAL_DATA',
  GET_GOODS_THUMBS: 'GOODS/GET_GOODS_THUMBS',
  GET_GOODS_DETAIL: 'GOODS/GET_GOODS_DETAIL',
};

const defaultState = fromJS({
  isInit: false,
  goodsThumbs: [],
  goodsDetail: null
});

/* REDUCER */
export default handleActions({
  [types.SET_INITIAL_DATA]: (state, action) => {
    return state.set('isInit', true);
  },
  [`${types.GET_GOODS_THUMBS}_FULFILLED`]: (state, action) => {
    return state.set('goodsThumbs', action.payload)
  },
  [`${types.GET_GOODS_THUMBS}_REJECTED`]: (state, action) => {
    return state.set('goodsThumbs', action.payload)
  },
  [`${types.GET_GOODS_DETAIL}_FULFILLED`]: (state, action) => {
    return state.set('goodsDetail', action.payload)
  }
}, defaultState);

/* ACTION CREATORS */
export const actionCreators = {
  setInitialData: createAction(types.SET_INITIAL_DATA, goodsAPI.initDatas),
  getGoodsThumbnails: createAction(types.GET_GOODS_THUMBS, goodsAPI.requestGoodsThumbnails),
  getGoodsDetail: createAction(types.GET_GOODS_DETAIL, goodsAPI.requestGoodsDetail)
};

