import { useState, useCallback } from 'react';

/**
 * Custom hook for managing toast notifications.
 * @param {number} duration - Duration in ms for the toast to show (default: 2000)
 * @returns {object} { showToast, toastMessage, triggerToast, hideToast }
 */
const useToast = (duration = 2000) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = useCallback((message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, duration);
  }, [duration]);

  const hideToast = useCallback(() => {
    setShowToast(false);
  }, []);

  return {
    showToast,
    toastMessage,
    triggerToast,
    hideToast,
  };
};

export default useToast;