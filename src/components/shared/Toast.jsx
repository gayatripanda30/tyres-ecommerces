import React from 'react';

/**
 * Toast notification component.
 * @param {boolean} show - Whether to show the toast.
 * @param {string} message - The message to display.
 * @param {function} onClose - Callback to hide the toast.
 */
const Toast = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed z-[2000] left-4 right-4 px-4 py-3 text-sm text-center text-black transition bg-gray-300 shadow-lg sm:left-auto sm:right-6 top-6 rounded-full animate-fadeIn"
      onClick={onClose} // Allow clicking to dismiss
    >
      {message}
    </div>
  );
};

export default Toast;