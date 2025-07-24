import { useState } from "react";
import { createContext } from "react";

import Order from "../utils/order.js";

const OrderContext = createContext(new Order());

export const OrderWrapper = ({ children }) => {
    const [order, setOrder] = useState(new Order());

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContext;
