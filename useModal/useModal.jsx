import React, { useCallback, useState } from 'react';
import Modal from '../components/modal/modal';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  // Modal, open, close, isOpen이 담긴 객체 반환
  return {
    Modal: isOpen
      ? ({ children }) => (
          <Modal onClose={useBlur ? close : null}>{children}</Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
};

export default useModal;
