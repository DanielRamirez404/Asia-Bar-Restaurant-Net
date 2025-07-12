import { useState, useEffect } from 'react';
import { getRegisterData } from '../utils/api.js';

export default function useFormValues(dbtable, id, setters) {
    const [ values, setValues ] = useState(null);

    const setData = async() => {
        const data = await getRegisterData(dbtable, id);

        data.map( (value, i) => setters[i](value) ); 
    };

    useEffect( () => {
        if (id)
            setData(); 
    }, []);
}
