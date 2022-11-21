import React from 'react';
import BackDrop from '../../utility/BackDrop';

import './ErrorModal.css';

const ErrorModal = (props) => {

    // When the user clicks on the okay, it sends state info to parent component 
    // to update the showErrorModal state.
    const handleModalClose = () => {
        props.onSaveErrorModalClose(false);
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