/**
 * Función para generar un ticket de impresión térmica de 58mm
 * @param {Object} datos - Objeto con los datos del ticket
 * @param {string} datos.empresa - Nombre de la empresa


 * @param {string} datos.fecha - Fecha de la transacción
 * @param {string} datos.hora - Hora de la transacción
 * @param {string} datos.numeroTicket - Número de ticket/orden
 * @param {string} datos.tipoVenta - Tipo de venta (ej: "Para llevar", "Mesa X")
 * @param {Array} datos.items - Array de objetos con los productos
 * @param {string} datos.items[].nombre - Nombre del producto
 * @param {number} datos.items[].cantidad - Cantidad del producto
 * @param {number} datos.items[].precio - Precio unitario
 * @param {number} datos.subtotal - Subtotal de la compra
 * @param {number} datos.iva - Impuesto (si aplica)
 * @param {number} datos.total - Total a pagar

 * @returns {string} - Texto formateado para impresión
 */

// Función para dividir texto en líneas según el ancho máximo
const dividirEnLineas = (texto, maxCaracteres) => {
  if (!texto) return [''];
  if (texto.length <= maxCaracteres) return [texto];
  
  const palabras = texto.split(' ');
  const lineas = [];
  let lineaActual = '';
  
  palabras.forEach(palabra => {
    if (palabra.length > maxCaracteres) {
      // Si una palabra es más larga que el ancho máximo, la dividimos
      if (lineaActual) lineas.push(lineaActual.trim());
      for (let i = 0; i < palabra.length; i += maxCaracteres) {
        lineas.push(palabra.substring(i, i + maxCaracteres));
      }
      lineaActual = '';
    } else if ((lineaActual + ' ' + palabra).length <= maxCaracteres) {
      lineaActual = lineaActual ? `${lineaActual} ${palabra}` : palabra;
    } else {
      if (lineaActual) lineas.push(lineaActual);
      lineaActual = palabra;
    }
  });
  
  if (lineaActual) lineas.push(lineaActual);
  return lineas;
};

export const generarTicket = (datos) => {
  // Caracteres máximos por línea (para impresora de 58mm)
  const MAX_CHARS = 32;
  
  // Función para centrar texto
  const centrarTexto = (texto) => {
    const lineas = dividirEnLineas(texto, MAX_CHARS);
    return lineas.map(linea => {
      const espacios = Math.max(0, Math.floor((MAX_CHARS - linea.length) / 2));
      return ' '.repeat(espacios) + linea;
    }).join('\n');
  };

  // Función para alinear a los lados
  const alinearLados = (izquierda, derecha) => {
    const espacio = MAX_CHARS - izquierda.length - derecha.length;
    if (espacio >= 0) {
      return izquierda + ' '.repeat(espacio) + derecha;
    } else {
      // Si no cabe, ponemos en líneas separadas
      return `${izquierda}\n${' '.repeat(MAX_CHARS - derecha.length)}${derecha}`;
    }
  };

  // Función para crear una línea divisoria
  const lineaDivisoria = (caracter = '-') => caracter.repeat(MAX_CHARS);

  // Iniciar el ticket
  let ticket = [];

  // Encabezado
  ticket.push(''); // Línea en blanco
  
  // Información del ticket
  ticket.push(lineaDivisoria('-'));
  ticket.push(alinearLados(`Ticket #${datos.numeroTicket || '0000'}`, datos.fecha || ''));
  
  // Mostrar número de mesa solo si el tipo de venta es "Para comer aquí"
  const esParaComerAqui = datos.tipoVenta && 
    datos.tipoVenta.toLowerCase().includes('comer') || 
    datos.tipoVenta.toLowerCase().includes('aquí');
    
  if (esParaComerAqui && datos.mesa) {
    ticket.push(alinearLados(`Hora: ${datos.hora || ''}`, `Mesa: ${datos.mesa || ''}`));
  } else {
    ticket.push(`Hora: ${datos.hora || ''}`);
  }
  
  ticket.push(`TIPO DE VENTA: ${datos.tipoVenta || 'No especificado'}`);
  ticket.push(lineaDivisoria('-'));
  
  // Línea en blanco antes de los productos
  ticket.push('');
  
  // Encabezado de productos
  ticket.push('CANT  DESCRIPCION       TOTAL');
  ticket.push(lineaDivisoria('-'));
  
  // Procesar cada ítem del pedido
  datos.items.forEach(item => {
    const nombre = item.nombre || 'Producto';
    const cantidad = item.cantidad || 1;
    const precioUnitario = item.precioUnitario || item.precio / (cantidad || 1);
    const totalItem = item.precio;
    
    // Si el nombre es muy largo, lo dividimos en líneas
    const nombreLines = dividirEnLineas(nombre, MAX_CHARS - 10); // Dejamos espacio para cantidad y precio
    
    nombreLines.forEach((line, index) => {
      if (index === 0) {
        // Primera línea con cantidad, nombre y precio
        const nombreConCantidad = `${cantidad}x ${line}`;
        const precioStr = `$${totalItem.toFixed(2)}`;
        ticket.push(alinearLados(nombreConCantidad, precioStr));
      } else {
        // Líneas adicionales del nombre (sangradas)
        ticket.push(`    ${line}`);
      }
    });
    
    // Si hay un precio unitario diferente, lo mostramos en una línea aparte
    if (precioUnitario && precioUnitario * cantidad !== totalItem) {
      ticket.push(`  (${cantidad} x $${precioUnitario.toFixed(2)})`);
    }
  });
  
  // Línea en blanco antes de los totales
  ticket.push('');
  
 

  
  // Línea del total
  ticket.push(lineaDivisoria('='));
  ticket.push(alinearLados('TOTAL:', `$${datos.total.toFixed(2)}`));
  ticket.push(lineaDivisoria('='));
  
  // Mensaje final (opcional)
  if (datos.mensaje) {
    ticket.push('');
    // Dividir el mensaje en líneas si es muy largo
    const lineasMensaje = dividirEnLineas(datos.mensaje, MAX_CHARS);
    lineasMensaje.forEach(linea => ticket.push(centrarTexto(linea)));
    
    ticket.push(''); // Línea en blanco después del mensaje
  }
  
  // Pie de página

  ticket.push('\n\n\n'); // Espacio para cortar el ticket
  
  // Agregar comandos de corte (si se usa con impresora térmica real)
  // ticket.push('\x1B@'); // Inicializar impresora
  // ticket.push('\x1DVA\x00'); // Cortar papel
  
  return ticket.join('\n');
};

// Ejemplo de uso:
/*
const datosEjemplo = {
  empresa: 'ASIA BAR RESTAURANT',
  fecha: '22/07/2025',
  hora: '14:30:45',
  numeroTicket: '0001',
  tipoVenta: 'Para llevar',
  items: [
    { nombre: 'Arroz Frito Especial', cantidad: 2, precio: 12.50 },
    { nombre: 'Té Helado', cantidad: 1, precio: 2.50 },
  ],

  total: 31.90,

};

const ticket = generarTicket(datosEjemplo);
console.log(ticket);
*/

// Para usar en React:
/*
import { generarTicket } from './utils/ticketImpresion';

// Al momento de imprimir:
const handleImprimir = () => {
  const ticket = generarTicket(datosDelTicket);
  
  // Opción 1: Imprimir en una ventana emergente
  const ventana = window.open('', '_blank');
  ventana.document.write(`<pre>${ticket}</pre>`);
  ventana.document.close();
  ventana.print();
  
  // Opción 2: Usar con impresora térmica directa (requiere configuración adicional)
  // const printWindow = window.open('', '_blank');
  // printWindow.document.write(`<html><body><pre>${ticket}</pre><script>window.print();window.close();</script></body></html>`);
  // printWindow.document.close();
};
*/