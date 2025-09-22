import { generateTicket } from './ticketImpresion.js'; 
import PrintManager from './print-manager.js';

export function printOrderTicket({id, type, address, note, client, clock, products}, afterPrint) {
    const ticket = generateTicket({
        numeroTicket: id,
        tipoVenta: type,
        direccion: address,
        mensaje: note || '¡Gracias por su preferencia!',
        clienteId: client.id,
        clienteNombre: client.name,
        fecha: clock.date,
        hora: clock.time,
        items: products
    });

    const ticketPrinter = new PrintManager(ticket, afterPrint);

    ticketPrinter.print();
}
