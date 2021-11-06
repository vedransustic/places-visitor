import React from 'react';

import UsersItem from "./UsersItem";
import Card from "../UI/Card";

import '../../styles/components/Users/UsersList.css'


const UsersList = (props) => {

    if(props.items.length === 0){
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        )
    }

    return <ul className="users-list">
        {props.items.map(user => (
            <UsersItem key={user.id} {...user}/>
        ))}
    </ul>
};
export default UsersList;