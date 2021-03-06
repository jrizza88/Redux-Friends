import React from "react";
import { connect } from "react-redux";
import Friends from "../Components/Friends";
import FriendInput from '../Components/FriendInput';
// import { connect} from 'react-redux';
import {fetchFriends, storedFriends} from '../Actions/Action.js';
import styled from 'styled-components';

class FriendListView extends React.Component{

    componentDidMount(e){
        this.props.fetchFriends()
    }


    render(){
        if (this.props.fetchingFriends){
            return <div> Friend data is loading....</div>
        }
        return (
            <div>
                <Friends />
                <FriendInput />
            </div>
        )
    }
}

    const mstp = state => {
        console.log(state)
        return {
            friends: state.friendRootReducer.friends,
            fetchingFriends: state.friendRootReducer.fetchingFriends,
            friendsFetched: state.friendRootReducer.friendsFetched,
            friendsSaved: state.friendRootReducer.friendsSaved,
            savingFriends: state.friendRootReducer.savingFriends,
            error: state.friendRootReducer.error
        }
    }

    export default connect(mstp, {fetchFriends, storedFriends})(FriendListView);

