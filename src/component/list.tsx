import React, { useState } from 'react';
import './list.css';
import Modal from './Modal';
import Header from './header';

interface Card {
    id: number;
    text: string;
}

const List: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleAddCard = () => {
        if (inputText.trim() !== '') {
            setCards([...cards, { id: cards.length + 1, text: inputText }]);
            setInputText('');  // Clear input after adding a card
            setShowModal(false);  // Close modal after adding a card
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="list-container">
            <Header />
            <div className="header-content">
                <button className="add-button" onClick={handleShowModal}>+ เพิ่มรายการใหม่</button>
                <div className="cards-container">
                    {cards.map(card => (
                        <div key={card.id} className="card">
                            {card.text}
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>สร้างรายการใหม่</h2>
                            <button className="close-button" onClick={handleCloseModal}>×</button>
                        </div>
                        <input 
                            type="text" 
                            className="text-input" 
                            placeholder="ชื่อรายการ" 
                            value={inputText} 
                            onChange={handleInputChange} 
                        />
                        <button className="add-card-button" onClick={handleAddCard}>สร้างรายการ</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
