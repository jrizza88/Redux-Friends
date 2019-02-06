import React from 'react';

const Friends = props => {
    console.log("friend props", props)
    return (
        <div>
            {props.friends.map(friend => (
               <li key={friend.id}>
                Name: {friend.name},
                Age: {friend.age},
                Email: {friend.email}
               </li>
            ))}
        </div>
    );
}

export default Friends;

