import React from 'react';
import './Pop-up.css';

const Popup = ({ message, isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <p>{message}</p>
                {children}
            </div>
        </div>
    );
};

export default Popup;
