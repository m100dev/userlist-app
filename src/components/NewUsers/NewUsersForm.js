import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ErrorModal from '../Modals/ErrorModal';

import './NewUsersForm.css';

const NewUsersForm = props => {

    const[userName, setUserName] = useState('');
    const[userAge, setUserAge] = useState('');
    const[showErrorModal, setShowErrorModal] = useState(false);

    const handleUserChange = (event) => {
        setUserName((prevName) => setUserName(event.target.value));
    }
    
    const handleAgeChange = (event) => {
        setUserAge((prevAge) => setUserAge(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(userName.trim().length === 0 || userAge <= 0) {
            setShowErrorModal(true);
            return;
        }

        const newUser = {
            id: uuidv4(),
            name: userName,
            age: userAge
        };

        props.onSaveSubmitData(newUser);

        setUserName('');
        setUserAge('');
    };

    if(setShowErrorModal) {

    }

    return (
        <>
            {showErrorModal && <ErrorModal errorMessage='test message'/>}
            <form className='user-form' onSubmit={handleSubmit}>
                <div>
                    <label className='user-form__label'>Username</label>
                    <input 
                        className='user-form__input' 
                        type='text' 
                        placeholder='John Doe' 
                        value={userName}
                        onChange={handleUserChange} 
                    />
                    <label className='user-form__label'>Age (Years)</label>
                    <input 
                        className='user-form__input' 
                        type='number' 
                        placeholder='Enter your age'
                        value={userAge}
                        onChange={handleAgeChange} 
                    />
                </div>
                <div className='user-form__actions'>
                    <button type='submit'>Add User</button>
                </div>
            </form>
        </>
    );
};

export default NewUsersForm;