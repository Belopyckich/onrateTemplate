import React from 'react';
import { useSelector } from 'react-redux';
import {ADD_FRIEND } from '../../redux/reducer/userReducer';
import UserBlock from "../../components/UserBlock/UserBlock";
import style from "./Users.module.css";

const Users = () => {
    const users = useSelector(state => state.users.users);

    return (
        <div className={style.main}>
            <div className={style.users}>
                {users.map((user, index) => 
                    <UserBlock user={user} actionType={ADD_FRIEND} key={index}/>
                )}
            </div>
        </div>
    );
};

export default Users;