import { useState, useMemo, useEffect } from 'react';
import { getRegisterData } from '../utils/api.js';

export function useFormFields(count) {
    const [fields, setFields] = useState(
        () => Array(count).fill("")
    );

    const setters = useMemo(() => {
        return Array(count).fill().map((_, i) => (value) => {
            setFields(old => {
                const updated = [...old];
                updated[i] = value;
                return updated;
            });
        });
    }, [count]); 

    return [fields, setters];
};

export function useFormValues(dbtable, id, setters) {
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
