import React from 'react';

function Modal({ imageSrc, alt, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
                <img src={imageSrc} alt={alt} className="w-full h-auto rounded-lg" />
                <button
                    onClick={onClose}
                    className="absolute bottom-2 right-2 text-red-500 font-bold text-2xl"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;