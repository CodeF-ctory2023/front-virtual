import React, { ReactNode } from 'react';

interface VentEmergenteProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const VentEmergente: React.FC<VentEmergenteProps> = ({ children, isOpen, closeModal }) => {
  const modalClass = isOpen
    ? "fixed z-999 top-0 left-0 w-full min-h-screen bg-black bg-opacity-75 justify-center items-center flex"
    : "fixed z-999 top-0 left-0 w-full min-h-screen bg-black bg-opacity-75 justify-center items-center hidden";

  const handleModalClick = (e: React.MouseEvent): void => e.stopPropagation();

  return (
    <article className={modalClass} onClick={closeModal}>
      <div className="relative" onClick={handleModalClick}>
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto flex flex-col">
          {children}
          <button onClick={closeModal} 
          className='bg-blue-socio text-white px-1 py-2 font-semibold hover:scale-105 w-20 rounded-md mt-4 flex justify-center self-center'
          >
            Ok
          </button>
        </div>
      </div>
    </article>
  )
}

export { VentEmergente };

