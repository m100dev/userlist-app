import React from 'react';
import ReactDOM from 'react-dom';
import BackDrop from '../UI/BackDrop';

import './ErrorModal.css';

const ModalOverlay = props => {

    // When the user clicks on the okay, it sends state info to parent component 
    // to update the showErrorModal state.
    const handleModalClose = () => {
        props.onSaveErrorModalClose(false);
    };

    return (
        <div className="modal-error">
            <div className='modal-error__header'>Invalid Input</div>
            <div className='modal-error__content'>{props.errorMessage}</div>
            <div className='modal-error__actions'>
                <button type="button" onClick={handleModalClose}>Okay</button>
            </div>   
        </div>    
    );
}

const ErrorModal = (props) => {

    return (
        // You can also import Fragment from React or use <> </>.
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay onSaveErrorModalClose={props.onSaveErrorModalClose} errorMessage={props.errorMessage} />, document.getElementById('modal-root'))}
        </React.Fragment>
    );
};

export default ErrorModal;