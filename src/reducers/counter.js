/**
 * Created by dr2009 on 2017/2/3.
 */
import * as types from '../constants/ActionTypes';

export default (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}