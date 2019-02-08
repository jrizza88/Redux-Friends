import React from 'react';

const Friends = props => {
    console.log("friend props", props)
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
               </ul>
            ))}
        </div>
    );
}

export default Friends;

