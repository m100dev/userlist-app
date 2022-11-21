import React from 'react';
import BackDrop from '../../utility/BackDrop';

import './ErrorModal.css';

const ErrorModal = (props) => {



    const handleModalClose = () => {
        console.log('modal close')
    };

    return (
        <>
            <BackDrop />
            <div className="modal-error">
                <div className='modal-error__header'>Invalid Input</div>
                <div className='modal-error__content'>{props.errorMessage}</div>
                <div className='modal-error__actions'>
                    <button type="button" onClick={handleModalClose}>Okay</button>
                </div>   
            </div>    
        </>
    );
};

export default ErrorModal;