import React from 'react';
import { connect } from 'react-redux';
import {storedFriends} from '../Actions/Action';
import styled from 'styled-components';

class FriendInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                name: '',
                age: '',
                email: '',
                error: false
        }
    }

    inputChange = e => {
        let reg = new RegExp('^[0-9]+$');
        if (e.target.name === 'age') {
            if (!reg.test(e.target.value)){
                this.setState({
                   error: !this.state.error, age:''
                })
                console.log("not number")
            } else 
            {this.setState({ 
                
                [e.target.name]: e.target.value
        })}
        }
       else 
        {this.setState({ 
                    [e.target.name]: e.target.value
            })
        }
    }

    addFriend = e => {
        e.preventDefault();
    
        const newFriend = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email
        }
        // console.log('history props:', this.props.history.push(this.state.friend))
        // this.props.history.push(this.state.friend)
        this.props.storedFriends(newFriend)
        this.setState({
            name: '',
            age: '',
            email: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.addFriend}>
                <label>Name</label>
                <input type="text"
                 name="name"
                  placeholder="Name" 
                  onChange={this.inputChange}
                   value={this.state.name}/>

                <label>Age</label>
                <input type="text"
                 name="age" 
                 placeholder="Age" 
                 onChange={this.inputChange} 
                 value={this.state.age}/>
               

                <label>Email</label>
                <input type="text" 
                name="email" 
                placeholder="Email" 
                onChange={this.inputChange} 
                value={this.state.email}/>

                <button type="submit">Add Friend!</button>
            </form>
        )
    }

}

const mstp = (state) => {
    return {
        friends: state.friendRootReducer.friends,
        fetchingFriends: state.friendRootReducer.fetchingFriends,
        friendsFetched: state.friendRootReducer.friendsFetched,
        friendsSaved: state.friendRootReducer.friendsSaved,
        savingFriends: state.friendRootReducer.savingFriends,
        error: state.friendRootReducer.error
    }
}

export default connect(mstp, {storedFriends})(FriendInput);