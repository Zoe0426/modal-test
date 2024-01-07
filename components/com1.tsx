import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Context
import { useModal } from '../context/modalContext';

//components
import ModalCard from './modalCard';
import Com3 from './com3';
import RegisterEmail from './registerEmail';
import UserRegister from './userRegister';



export default function RegisterContent() {

       // Modal context
    const { step } = useModal();
   


 
const renderRegisterContent = () => {
     
    switch (step) {
        case 'emailValidation':
            return (
                <RegisterEmail/>
            );

        case 'token':
            return (
                <Com3/>
            );
        // Add more cases as needed
        default:
            return <UserRegister/>; // or some default component if you like
    }
};

    return (
        <>
        <ModalCard>
        <div className=' flex w-full justify-around'>
            <div className={step===null?' text-red-600' : ''}>step 1</div>
            <div className={step==="emailValidation"?'text-red-600' : ''}>step 2</div>
            <div className={step==="token"?'text-red-600' : ''}>step 3</div>
        </div>
{renderRegisterContent()}
        </ModalCard>

        </>
    );
}
