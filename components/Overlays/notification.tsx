import { Fragment, MouseEventHandler } from "react";

/*  export function Overlay({ isOpen, setIsOpen, children, title, description }: {isOpen: boolean, setIsOpen: CallableFunction ,onClose: MouseEventHandler, children: any, title: string, description: string}) */
interface NotificationProps{
  title:String;
  description:String;
  isOpen: boolean;
  setIsOpen:boolean;
  children: React.ReactNode;
  onClose: () => void;  
}
const Notification=({title,description,isOpen,setIsOpen,children,onClose}:NotificationProps)=>{
    return (
        <Fragment>
            {isOpen && (
                <div className=' m-8 flex flex-col w-96 gap-10'>
                    <div className=' flex flex-row'>
                        <div className=' font-semibold w-3/4  text-3xl '>
                            {title}
                        </div>
                        <div className=' w-1/4 '>
                            {children}
                        </div>
                    </div>
                    <div className=' font-normal text-lg ml-4 '>
                        {description}
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export  {Notification};
