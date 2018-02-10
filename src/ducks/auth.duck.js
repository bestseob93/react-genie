import { fromJS } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const types = {
    LOGIN: 'AUTH/LOGIN',
    LOGOUT: 'AUTH/LOGOUT'
};

const defaultState = fromJS({
    isLogged: false
});

export default handleActions({
    [types.LOGIN]: (state, action) => {
        return state.set('isLogged', true);
    },
    [types.LOGOUT]: (state, action) => {
        return state.set('isLogged', false);
    }
}, defaultState);

export const actionCreators = {
    login: createAction(types.LOGIN),
    logout: createAction(types.LOGOUT)
};
