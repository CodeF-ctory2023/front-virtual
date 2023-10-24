import { PencilSquareIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'
import { Menu } from'../components/menu';
import { changeUserInfo } from '@/services/user.services';
import { useState } from 'react';
const EditarUsuario = () => {

    const [userInfo, setUserInfo] = useState({
        firstNames: "",
        lastNames: "",
        id: "",
        email: ""
    })

    function handleOnChange(e: any) {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleOnclick = async () => {
        try {
            const response = await changeUserInfo(userInfo)
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return (
        <div className=' fixed inset-y-0 left-0 flex max-w-full '>
            <Menu />
            <div className="w-full px-18  flex flex-row  ml-11">
                <form className=" px-18 pr-6 pt-6 pb-8 mb-4  ">
                    <div className=' mb-4 '>
                        <div className="flex place-content-start mb-10 mt-11 ">
                            <ClipboardDocumentListIcon className="ml-1 h-12 w-12" aria-hidden="true" />
                            <div className="my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900">
                                Información personal
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 mt-16 '>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3 '>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2">Nombres  </label>
                                </div>
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.firstNames} name="firstNames" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='nombre ' />
                                </div>
                            </div>
                        </div>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2">Apellidos</label>
                                </div>
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.lastNames} name="lastNames" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='apellido ' />
                                </div>
                            </div>
                        </div>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2">Identificacion</label>
                                </div>
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.id} name="id" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='documento' />
                                </div>
                            </div>
                        </div>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11'>
                                    <label className="block text-gray-700 text-lg font-bold mb-2">Correo</label>
                                </div>
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} onChange={handleOnChange} type="text" value={userInfo.email} name="email" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='correo ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className=" w-18 h-60 mt-48  mr-6 text-lg font-semibold leading-6 ">
                    <button className="flex gap-1 " onClick={() => window.location.href = '/registro'}>
                        <PencilSquareIcon className="h-10" aria-hidden="true" />
                        <div className="mt-3">
                            Editar
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default EditarUsuario;