import { CreditCardIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import react from "react"

function Tarjetas(){
    return(
<div className="ml-20 flex flex-col w-full pb-4 h-full  ">
           <div className="pt-6 mb-4 flex h-24 w-full  border rounded-lg">
         <CreditCardIcon className="mx-4 mt-1 h-10 w-10 mr-16"/> 
         <input  type="text"className='h-12 text-center shadow apperance-none border rounded-lg  py-2 px-16 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'placeholder='******** ' />
         <div className=" h-4 w-18 content-center">
        <PencilSquareIcon className="mx-4 mt-1 h-10 w-8" aria-hidden="true"/>
        </div> 
        </div>
        <div className="pt-6 mb-4 flex h-24 w-full  border rounded-lg">
         <CreditCardIcon className="mx-4 mt-1 h-10 w-10 mr-16"/> 
         <input  type="text"className='h-12 text-center shadow apperance-none border rounded-lg  py-2 px-16 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'placeholder='******** ' />
         <div className=" h-4 w-18 content-center">
        <PencilSquareIcon className="mx-4 mt-1 h-10 w-8" aria-hidden="true"/>
        </div> 
        </div>
        <div className="pt-6 mb-4 flex h-24 w-full  border rounded-lg">
         <CreditCardIcon className="mx-4 mt-1 h-10 w-10 mr-16"/> 
         <input  type="text"className='h-12 text-center shadow apperance-none border rounded-lg  py-2 px-16 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'placeholder='******** ' />
         <div className=" h-4 w-18 content-center">
        <PencilSquareIcon className="mx-4 mt-1 h-10 w-8" aria-hidden="true"/>
        </div> 
        </div>
        
        
        
        
        
    
        
</div>

    )
}
export default Tarjetas;