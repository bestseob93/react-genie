import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import * as goodsAPI from 'services/goodsAPI';

/* ACTION TYPES */
const types = {
  SET_INITIAL_DATA: 'GOODS/SET_INITIAL_DATA',
  GET_GOODS_THUMBS: 'GOODS/GET_GOODS_THUMBS',
  GET_GOODS_DETAIL: 'GOODS/GET_GOODS_DETAIL',
  GET_SEARCH_RESULT: 'GOODS/GET_SEARCH_RESULT',
  ADD_PROD_CART: 'GOODS?ADD_PROD_CART'
};

const defaultState = fromJS({
  isInit: false,
  goodsThumbs: [],
  searchResults: [],
  goodsDetail: null,
  cart: []
});

/* REDUCER */
export default handleActions({
  [types.SET_INITIAL_DATA]: (state, action) => {
    return state.set('isInit', true);
  },
  [`${types.GET_GOODS_THUMBS}_FULFILLED`]: (state, action) => {
    return state.set('goodsThumbs', fromJS(action.payload));
  },
  [`${types.GET_GOODS_THUMBS}_REJECTED`]: (state, action) => {
    return state.set('goodsThumbs', action.payload);
  },
  [`${types.GET_GOODS_DETAIL}_FULFILLED`]: (state, action) => {
    return state.set('goodsDetail', fromJS(action.payload));
  },
  [`${types.GET_SEARCH_RESULT}_FULFILLED`]: (state, action) => {
    return state.set('searchResults', fromJS(action.payload));
  },
  [types.ADD_PROD_CART]: (state, action) => {
    return state.set('cart', state.get('cart').concat(fromJS(action.payload)));
  }
}, defaultState);

/* ACTION CREATORS */
export const actionCreators = {
  setInitialData: createAction(types.SET_INITIAL_DATA, goodsAPI.initDatas),
  getGoodsThumbnails: createAction(types.GET_GOODS_THUMBS, goodsAPI.requestGoodsThumbnails),
  getGoodsDetail: createAction(types.GET_GOODS_DETAIL, goodsAPI.requestGoodsDetail),
  getSearchResult: createAction(types.GET_SEARCH_RESULT, goodsAPI.requestSearchResult),
  addProdCart: createAction(types.ADD_PROD_CART)
};
