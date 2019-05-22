//Evaluate any actions that are commited
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], //post that comes in from action
    item: {}  //for single post
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}