import React, { createContext, useState, useMemo } from 'react';
import Order from '../utils/order.js';

const OrderContext = createContext();

const defaultOrder = {
    products: [],
    note: '',
    client: null,
    payment: null
};

export function OrderWrapper({ children }) {
    const [order, setOrder] = useState(defaultOrder);

    const updateNote = (newNote) => {
        setOrder(prevOrder => ({
            ...prevOrder,
            note: newNote
        }));
    };

    const clearOrder = () => {
        setOrder(defaultOrder);
    };

    const value = useMemo(() => ({
        order,
        setOrder,
        clearOrder,
        updateNote
    }), [order]);

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContext;
