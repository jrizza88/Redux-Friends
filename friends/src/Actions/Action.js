import axios from 'axios';

    export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
    export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
    export const FETCHING_FRIENDS_ERROR = 'FETCHING_FRIENDS_ERROR';
    export const SAVING_FRIENDS = 'SAVING_FRIENDS';
    export const FRIENDS_SAVED = 'FRIENDS_SAVED';
    export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';
    export const UPDATE_FRIEND = 'UPDATE_FRIEND';
    export const FRIEND_UPDATED = 'FRIEND_UPDATED';
    export const DELETING_FRIEND = 'DELETING_FRIEND';
    export const FRIEND_DELETED = 'FRIEND_UPDATED';
    export const ERROR = 'ERROR';

    export const fetchFriends = () => dispatch => {
        dispatch ({type: FETCHING_FRIENDS})
        axios
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            console.log("get request for FETCHING_FRIENDS", res)
            dispatch({
                type: FRIENDS_FETCHED,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: FETCHING_FRIENDS_ERROR,
                payload: 'Fetching friends failed...'
            });
        });
    }

    export const storedFriends = friends => dispatch => {
        dispatch ({type: SAVING_FRIENDS})
        axios
        .post(`http://localhost:5000/api/friends`, friends)
        .then(res => {
            console.log("post request for FRIENDS_SAVED", res)
            dispatch({
                type: FRIENDS_SAVED,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: ADD_FRIEND_ERROR,
                payload: error
            });
        });
    }

    export const updateFriend = id => dispatch => {
        dispatch ({type: UPDATE_FRIEND})
        axios
        .post(`http://localhost:5000/api/friends`, id)
        .then(res => {
            console.log("PUT request for FRIEND_UPDATED", res)
            dispatch({
                type: UPDATE_FRIEND,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: ERROR,
                payload: error
            });
        });
    }