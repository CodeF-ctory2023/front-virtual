import { CreditCardIcon, MapPinIcon, PencilSquareIcon, StarIcon } from "@heroicons/react/24/outline";
import react from "react"

const Viajes = () => {
    return (
        <div className="mt-16 ml-20  w-full pb-4 h-full  ">
            <div className="  border rounded-lg">
                <div className="w-auto flex text-red-600"><MapPinIcon className='ml-1 h-8 w-8 mr-6'
                    aria-hidden='true' /> Calle 10 # 25-46 </div>
                <div className="w-auto flex text-lime-500"><MapPinIcon className='ml-1 h-8 w-8 mr-6'
                    aria-hidden='true' /> Calle 55 # 55-46 </div>
                <div className="w-auto flex"><StarIcon className='ml-1 h-8 w-8 mr-6'
                    aria-hidden='true' /> 35.789</div>
            </div>


        </div>

    )
}
export { Viajes };