import React from 'react';
import Card from '../../utility/Card';
import NewUsersForm from './NewUsersForm';

import './NewUsers.css';

const NewUsers = props => {
    return (
        <Card>
            <NewUsersForm />
        </Card>
    );
};

export default NewUsers;