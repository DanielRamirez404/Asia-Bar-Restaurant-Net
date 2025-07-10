import { useState, useMemo } from 'react';

export default function useFormFields(count) {
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
