import { 
    HomeIcon,
    BuildingOfficeIcon,
    AcademicCapIcon,
    BuildingStorefrontIcon,
    BuildingLibraryIcon,
    PencilSquareIcon,
    TrashIcon,
    XMarkIcon,
    DocumentCheckIcon
} from "@heroicons/react/24/outline";
import React from 'react';
import { Sites } from "@/interfaces/user.interfaces";

const icons = [
    { content: <HomeIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' /> },
    { content: <BuildingOfficeIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' /> },
    { content: <AcademicCapIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' /> },
    { content: <BuildingStorefrontIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' /> },
    { content: <BuildingLibraryIcon className='ml-1 h-10 w-10 mr-6' aria-hidden='true' /> }
];

export default function Sitios({loadSites, setLoadSites}: {loadSites: Sites[], setLoadSites: React.Dispatch<React.SetStateAction<Sites[]>>}) {

    const [modify, setModify] = React.useState({
        isAble: false,
        modifyId: 0
    });

    const [newSite, setNewSite] = React.useState({
        id: 0,
        imageId: 0,
        name:  '',
        address:   '',
    });
    
    const handleEdit = (id: Number) => () => {
        setModify({
            isAble: true,
            modifyId: Number(id)
        });
        setNewSite(loadSites[Number(id)])
    };

    const handleIcon = (newImage: Number) => () => {
        setNewSite({
            ...newSite,
            imageId: Number(newImage)
        });
    };

    function handleOnChange(e: any) {
        setNewSite({
            ...newSite,
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => () => {
        setModify({
            ...modify,
            isAble: false,
        });
    }

    const handleSave = (id: Number) => () => {
        setModify({
            ...modify,
            isAble: false,
        });
        const newData = loadSites.map((c, i) => {
            if (i === id) {
              return c = newSite;
            } else {
              return c;
            }
          });
        setLoadSites(newData);
    };

    const handleErase = (id: Number, loadSites: Sites[], setLoadSites: React.Dispatch<React.SetStateAction<Sites[]>>) => () => {
        const updatedRows = loadSites.filter((loadSites) => loadSites.id !== id);
        setLoadSites(
            updatedRows.map((row, index) => {
                return { ...row, id: index };
            })
        );
    };

    return (
        <>
            {loadSites.map(e => {
                return (
                    <div className="mt-8 ml-20 w-full h-full flex ">
                        <details>
                            <summary className="w-[30rem] cursor-pointer flex list-none justify-between"> 
                                <div className="flex ">
                                    {modify.isAble === true && modify.modifyId === e.id ?
                                        <div className="inline-block group">
                                            {icons[newSite.imageId].content}
                                            <div className=" group-hover:block hidden absolute z-1 min-w-[1px] bg-white">
                                                <button className="block" onClick={handleIcon(0)}>{icons[0].content}</button>
                                                <button className="block" onClick={handleIcon(1)}>{icons[1].content}</button>
                                                <button className="block" onClick={handleIcon(2)}>{icons[2].content}</button>
                                                <button className="block" onClick={handleIcon(3)}>{icons[3].content}</button>
                                                <button className="block" onClick={handleIcon(4)}>{icons[4].content}</button>
                                            </div>
                                      </div>:
                                        <div> {icons[e.imageId].content} </div>
                                    }
                                    {modify.isAble === true && modify.modifyId === e.id ?
                                        <input size={50} onChange={handleOnChange} type="text" value={newSite.name} name="name" className='w-60 apperance-none border-2 border-black text-2xl font-semibold leading-6'/> :
                                        <div className="text-2xl font-semibold leading-6 mt-2"> {e.name}  </div>
                                    }
                                </div>
                                {modify.isAble === true && modify.modifyId === e.id ?
                                    <div>
                                        <button className='' onClick={handleSave(e.id)}>
                                            <DocumentCheckIcon className='ml-1 h-8 w-8 mr-2' aria-hidden='true' />
                                        </button> 
                                        <button className='' onClick={handleCancel()}>
                                            <XMarkIcon className='ml-1 h-8 w-8 mr-2' aria-hidden='true' />
                                        </button> 
                                    </div>:
                                    <div>
                                        <button className='' onClick={handleEdit(e.id)}>
                                            <PencilSquareIcon className='ml-1 mt-1 h-8 w-8 mr-2' aria-hidden='true' />
                                        </button>
                                        <button className='' onClick={handleErase(e.id, loadSites, setLoadSites)}>
                                            <TrashIcon className='ml-1 h-8 w-8 mr-2' aria-hidden='true' />
                                        </button>
                                    </div>
                                }
                            </summary>
                            {modify.isAble === true && modify.modifyId === e.id ?
                                <input size={50} onChange={handleOnChange} type="text" value={newSite.address} name="address" className='w-60 apperance-none border-2 border-black text-xl font-medium leading-6 mt-4 ml-[4.2rem]'/> :
                                <div className="text-xl font-medium leading-6 w-auto pt-4 pl-16"> {e.address} </div>
                            }
                        </details>
                    </div>
                )
            })}
        </>

    )
}
export { Sitios };