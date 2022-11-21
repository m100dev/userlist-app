import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ErrorModal from '../Modals/ErrorModal';
import Card from '../UI/Card';

import './NewUsersForm.css';

const NewUsersForm = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const[userName, setUserName] = useState('');
    const[userAge, setUserAge] = useState('');
    const[showErrorModal, setShowErrorModal] = useState(false);
    const[errorMessage, setErrorMessage] = useState('There was an error with adding your user');

    const handleUserChange = (event) => {
        setUserName(event.target.value);
    };
    
    const handleAgeChange = (event) => {
        setUserAge(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Logging out the values of the references created with useRef()
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);

        // Checks if the user provided a name
        if(userName.trim().length === 0) {
            const message = 'Please enter a valid name and age (non-empty values)';
            setErrorMessage(message);
            setShowErrorModal(true);
            return;
        };

        // Checks if user provided a valid age
        if(+userAge <= 0) {
            const message = 'Please enter a valid age greater than 0';
            setErrorMessage(message);
            setShowErrorModal(true);
            return;
        };

        // Creating new state to be passed to parent component to update userData state
        const newUser = {
            id: uuidv4(),
            name: userName,
            age: userAge
        };

        // Lifting up new user State
        props.onSaveUserData(newUser);

        // Clearing form input fields
        setUserName('');
        setUserAge('');
    };

    // Retrieves ErrorModal state from ErrorModal component
    const saveErrorModalClose = errorModalState => {
        setShowErrorModal(errorModalState);
    };

    return (
        <Card>
            {showErrorModal && <ErrorModal errorMessage={errorMessage} onSaveErrorModalClose={saveErrorModalClose}/>}
            <form className='user-form' onSubmit={handleSubmit}>
                <div>
                    <label className='user-form__label'>Username</label>
                    <input
                        className='user-form__input' 
                        type='text' 
                        placeholder='John Doe' 
                        value={userName}
                        onChange={handleUserChange}
                        ref={nameInputRef} 
                    />
                    <label className='user-form__label'>Age (Years)</label>
                    <input 
                        className='user-form__input' 
                        type='number' 
                        placeholder='Enter your age'
                        value={userAge}
                        onChange={handleAgeChange}
                        ref={ageInputRef} 
                    />
                </div>
                <div className='user-form__actions'>
                    <button type='submit'>Add User</button>
                </div>
            </form>
        </Card>
    );
};

export default NewUsersForm;