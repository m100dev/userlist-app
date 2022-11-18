import React from 'react';
import Card from '../utility/Card';

import './UserList.css';

const UserList = props => {
    
    console.log(props.userItem);
    
    return (
        <Card>
            <ul className='user-list'>
                {props.userItem.map((user) => {
                    return <li className={'user-list__item'} key={user.id}>{`${user.name} (${user.age} years old)`}</li>
                })}
            </ul>
        </Card>
    );
};

export default UserList;