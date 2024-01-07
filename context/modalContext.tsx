import React, { createContext, useState, useContext, ReactNode,useEffect } from 'react';

// Define the shape of the context data
interface ModalContextType {
    isModalOpen: boolean;
    modalName: string;
    showModal: (name: string) => void;
    hideModal: () => void;
    step:string|null
    changeStep: (name: string) => void;
}

// Provide a default value (could be undefined or a valid default object)
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps>  = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState('');
    const [step, setStep] = useState<string | null>(null);

    useEffect(()=>{
        const initialStep = localStorage.getItem("step");
        if (initialStep) {
            setStep(initialStep);
        }
}, []) 

    // Function to open the modal with a specific name
    const showModal = (name:string) => {
        setModalName(name);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const hideModal = () => {
        setIsModalOpen(false);
    };

    const changeStep=(name:string)=>{
        setStep(name)
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, modalName, showModal, hideModal,step,changeStep }}>
            {children}
        </ModalContext.Provider>
    );
};