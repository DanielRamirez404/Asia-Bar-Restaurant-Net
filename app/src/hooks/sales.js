import { useNavigate } from "react-router-dom";

import { routes } from '../config/routes.js';

export function useHeaderButtons() {
    const navigate = useNavigate();
    
    const onNew = (id) => navigate(routes['Informacion de Venta']);

    const onSearch = () => {

    };

    return [onNew, onSearch];
} 
