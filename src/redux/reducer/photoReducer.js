
const initialState = {
    photos: []
}

export const ADD_PHOTO = "ADD_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return {...state, photos: [...state.photos, action.payload]}
        case REMOVE_PHOTO:
            return {...state, photos: state.photos.filter(photo => photo !== action.payload)};
        default:
            return state;
    }
}

export default photoReducer;