import { getRegisterData } from '../utils/api.js';
import { printOrderTicket } from '../utils/ticket.js';

export function useTicketPrinter() {
    const printTicket = (id) => {
        const print = async () => {
            const fetched = await getRegisterData('sales/details', id); 
            
            const client = {
                id: fetched[1],
                name: fetched[2]
            };
            
            const products = fetched[4];

            const productsArray = [];

            products.forEach((product) => productsArray.push({
                nombre: product.Name, 
                cantidad: product.Quantity,
                precio: product.Quantity * product.Price,
                precioUnitario: product.Price 
            }));

            printOrderTicket({
                id: id,
                type: fetched[3],
                client: client,
                products: productsArray
            });
        };

        print();
    }

    return printTicket;
}
