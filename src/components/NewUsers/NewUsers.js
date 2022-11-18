import React from 'react';
import Card from '../../utility/Card';
import NewUsersForm from './NewUsersForm';

import './NewUsers.css';

const NewUsers = props => {

    const saveSubmitData = (savedData) => {
        const newUserData = {
            ...savedData
        }

        props.onSaveUserData(newUserData);
    };

    return (
        <Card>
            <NewUsersForm onSaveSubmitData={saveSubmitData}/>
        </Card>
    );
};

export default NewUsers;