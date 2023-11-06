import { CreditCardIcon, MapPinIcon, PencilSquareIcon, StarIcon } from "@heroicons/react/24/outline";
import react from "react"

const Sitios = () => {
    return (
        <><div className="mt-16 ml-20  w-full pb-4 h-full flex border rounded-lg">
            <StarIcon className='ml-1 h-8 w-8 mr-6'
                aria-hidden='true' />
            <div className="  ">
                <div className="w-auto "> Casa </div>
                <div className="w-auto "> Direccion........ </div>
            </div>
        </div><div className="mt-8 ml-20  w-full pb-4 h-full flex border rounded-lg ">
                <StarIcon className='ml-1 h-8 w-8 mr-6'
                    aria-hidden='true' />
                <div className="   ">
                    <div className="w-auto "> Trabajo</div>
                    <div className="w-auto "> Direccion........ </div>
                </div>
            </div></>

    )
}
export { Sitios };