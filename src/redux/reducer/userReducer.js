import {api} from "../../api/api";

const initialState = {
    isLoading: false,
    users: [],
    friends: []
}

export const ADD_USERS = "ADD_USERS";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const IS_LOADING = "IS_LOADING";

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return {...state, isLoading: true} 
        case ADD_USERS:
            return {...state, users: action.payload, isLoading: false}
        case ADD_FRIEND:
            return {...state, friends: [...state.friends, action.payload]}
        case REMOVE_FRIEND:
            return {...state, friends: state.friends.filter(friend => friend !== action.payload)}
        default:
            return state; 
    }
}

export const getUsersThunk = () => (dispatch) => {
    return api.getUsers().then(users => dispatch({type: ADD_USERS, payload: users}));
}

export default UserReducer;