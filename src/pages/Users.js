import React from 'react';
import UsersList from "../components/Users/UsersList";
import {DUMMY_USERS_DATA} from "../const";

const Users = () => {

    return (
        <>
           <UsersList items={DUMMY_USERS_DATA}/>
        </>
    )
}

export default Users