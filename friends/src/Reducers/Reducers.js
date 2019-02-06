

import {
    FETCHING_FRIENDS, 
    FRIENDS_FETCHED, 
    FETCHING_FRIENDS_ERROR,
    SAVING_FRIENDS,
    FRIENDS_SAVED,
    ADD_FRIEND_ERROR
} from '../Actions/Action.js';


const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    // updatingFriend: false,
    // friendUpdated: false,
    // deletingFriend: false,
    // friendDeleted: false,
    error: null
}

export const friendRootReducer = (state = initialState, action) => {
  switch  (action.type){
    case FETCHING_FRIENDS:
        return {...state, fetchingFriends: true, friends: [], error: ""}
    case FRIENDS_FETCHED: 
        return {...state, fetchingFriends: false, friends: action.payload, error: ""}
    case FETCHING_FRIENDS_ERROR: 
        return {...state, savingFriends: false, friends: action.payload, error: action.payload}
    case SAVING_FRIENDS: 
        return {...state, savingFriends: true, friends: action.payload, error: ""}
    case FRIENDS_SAVED: 
        return {...state, savingFriends: false, friends: action.payload, error: ""}
    case ADD_FRIEND_ERROR: 
        return {...state, savingFriends: false, friends: action.payload, error: action.payload}
    default: 
    return state;
  }
}