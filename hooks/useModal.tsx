import { useState } from 'react';

type UseModalReturn = [boolean, () => void, () => void];

const useModal = (initialState: boolean = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};

export { useModal };