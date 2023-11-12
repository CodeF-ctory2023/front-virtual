import { useEffect, useState } from 'react';
import { getSocios } from '@/helpers/getSocios';

export const useFetchSocios = () => {
 
    const [socios, setSocios] = useState([]);

    const [isLoading, setIsLoading] = useState( true );

    const getNewSocios = async() => {
        const newSocios = await getSocios();
        setSocios(newSocios);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getNewSocios();
    }, []);

    return {
        socios,
        isLoading
    }

}