import { IconType } from 'react-icons';
import {HiIdentification} from 'react-icons/hi2'

interface InputProps{
    placeHolder: string;
}

const Input = ({placeHolder}: InputProps) => {
    return <input placeholder={placeHolder}/>
};

export {Input};