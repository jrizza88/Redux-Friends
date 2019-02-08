import axios from 'axios';

    export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
    export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
    export const FETCHING_FRIENDS_ERROR = 'FETCHING_FRIENDS_ERROR';
    export const SAVING_FRIENDS = 'SAVING_FRIENDS';
    export const FRIENDS_SAVED = 'FRIENDS_SAVED';
    export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';

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
            console.log("post request for SAVING_FRIENDS", res)
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