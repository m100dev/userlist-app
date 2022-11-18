import React, { useState } from 'react';

import './NewUsersForm.css';

const NewUsersForm = props => {

    const[userName, setUserName] = useState('');
    const[userAge, setUserAge] = useState('')

    const handleUserChange = (event) => {
        setUserName((prevName) => setUserName(event.target.value));
    }
    
    const handleAgeChange = (event) => {
        setUserAge((prevAge) => setUserAge(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            id: Math.round(Math.random() * 5000),
            name: userName,
            age: userAge
        };

        console.log('A new user was added', newUser);
    }

    return (
        <form className='user-form' onSubmit={handleSubmit}>
            <div>
                <label className='user-form__label'>Username</label>
                <input 
                    className='user-form__input' 
                    type='text' 
                    placeholder='John Doe' 
                    onChange={handleUserChange} 
                />
                <label className='user-form__label'>Age (Years)</label>
                <input 
                    className='user-form__input' 
                    type='text' 
                    placeholder='Enter your age'
                    onChange={handleAgeChange} 
                />
            </div>
            <div className='user-form__actions'>
                <button type='submit'>Add User</button>
            </div>
        </form>
    );
};

export default NewUsersForm;