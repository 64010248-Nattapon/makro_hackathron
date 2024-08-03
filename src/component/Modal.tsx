import React from 'react';
import './Modal.css';

interface ModalProps {
    showModal: boolean;
    handleClose: () => void;
    handleAddCard: () => void;
    inputText: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, handleClose, handleAddCard, inputText, handleInputChange }) => {
    if (!showModal) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={handleClose}>×</button>
                <h2>สร้างรายการใหม่</h2>
                <input 
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="ชื่อรายการ"
                    className="text-input"
                />
                <button className="add-card-button" onClick={handleAddCard}>สร้างรายการ</button>
            </div>
        </div>
    );
};

export default Modal;
