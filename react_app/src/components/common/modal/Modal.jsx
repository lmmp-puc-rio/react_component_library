// # Main Import
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

// # Import Component Style
import './Modal.css'

//Import Specific Styling
import {darkColors} from '../MaterialColors'

// # Contexts
import { ModalContext } from '../../../contexts/ModalContext';

// add this states to the main component where modal appears
// const [isModalOpen,setIsModalOpen] = useState(true);
// Add children to define message inside each modal
// Props: isOpen, setIsOpen and confirmAction(callback for confirm button)


function Modal(props) {

    const {isModalOpen, setIsModalOpen} = useContext(ModalContext)

    const cancelURL = props.cancelURL;

    const closeModal = () => {
        setIsModalOpen(!isModalOpen);

    }

    if (!isModalOpen) return null;

    return ReactDOM.createPortal(
        <div>
            {/* Dark background thar covers screen */}
            <div className="modal_overlay">
                {/* Main container */}
                <div className='modal_container'>
                    {/* Close X button on right upper corner */}
                    <a href={cancelURL}>
                        <button onClick={closeModal} className='modal_close-button'><i className='fas fa-times'/></button>
                    </a>
                    {/* Children that defines modal internal features */}
                    {props.children}


                    {/* Cancel button */}
                    {/* <a href={cancelURL}> */}
                    {/* //TODO: Check how to do without reload */}
                        {/* <button className='modal_cancel-button'
                                onClick={closeModal}
                                //specific styling
                                style={{backgroundColor: darkColors.red}}>
                                <i className='fas fa-times'/> Cancel
                        </button>
                    </a> */}
                    
                    
                </div>
            </div>
        </div>
        ,document.getElementById("modal_portal"),
        );
    }

export default Modal;