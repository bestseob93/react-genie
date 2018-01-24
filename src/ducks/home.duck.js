import { Record} from 'immutable';
import { createActions, handleActions } from 'redux-actions';


export const types = {
    SHOW_BUTTON: 'HOME/SHOW_BUTTON'
};

const defaultState = Record({
    isButtonShow: false
});

export default handleActions({
    [types.SHOW_BUTTON]: (state, action) => {
        return state;
    }
}, defaultState);

export const actions = {
    showButton: createActions(types.SHOW_BUTTON)
};