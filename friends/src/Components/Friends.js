import React from 'react';
import { connect } from 'react-redux';
import {deleteFriend} from '../Actions/Action';

const Friends = props => {
    console.log("friend props", props)
    debugger
    if (!props.friends || !props.friends.length) {
        return <h1>No Friends... :/</h1>
    }
    return (
        <div>
            {props.friends.map(friend => (
               <ul key={friend.id}>
                Name: {friend.name},
                Age: {friend.age},
                Email: {friend.email}
                <button type="submit" onClick={() => props.deleteFriend(friend.id)}>X</button>
               </ul>
              
            ))}
        </div>
    );
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

export default connect(mstp, {deleteFriend})(Friends);

