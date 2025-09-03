import Swal from 'sweetalert2';

import './alerts.css';

const redHue = "#D9534F";
const greenHue = "#5CB85C";
const textHue = "#333333";
const iconHue = "#777777";
const blueHue = "#406088";

export function questionAlert(title, message, onYes, onNo = () => {}) {
    Swal.fire({
        title: title,
        text: message,
        color: textHue,
        showDenyButton: true,
        icon: "question",
        iconColor: iconHue,
        confirmButtonText: "Sí",
        confirmButtonColor: greenHue,
        denyButtonText: "No",
        denyButtonColor: redHue,
    }).then( (result) => {
        if (result.isConfirmed) 
            onYes();
        else
            onNo();
    });
}

function simpleAlert(title, message, icon, iconColor, buttonText = "Vale") {
    Swal.fire({
        title: title,
        text: message,
        color: textHue,
        icon: icon,
        iconColor: iconColor,
        confirmButtonText: buttonText,
        confirmButtonColor: blueHue,
    });
}

export function iconlessAlert(title, message) {
    simpleAlert(title, message);
}

export function infoAlert(title, message) {
    simpleAlert(title, message, "info", iconHue);
}

export function successAlert(title, message) {
    simpleAlert(title, message, "success", greenHue, "Genial");
}

export function errorAlert(title, message) {
    simpleAlert(title, message, "error", redHue);
}

function getRowHtmlString(row) {
    let htmlString = "\t\t<tr>\n";
    
    row.map( (value) => {
        htmlString += "\t\t\t<td>" + value + "</td>\n";
    });
    
    htmlString += "\t\t</tr>\n";

    return htmlString;
}

function getProductsTable(data) {
    const fields = ["Nombre", "Precio Unitario", "Cantidad"];

    let htmlString = "<table class=\"products-table\">\n";

    htmlString += "\t<tr>\n";
    
    fields.map( (field) => {
        htmlString += "\t\t<th>" + field + "</th>\n"
    });

    data.map( (row) => {
        htmlString += getRowHtmlString(row);
    });

    htmlString += "\t</tr>\n";

    htmlString += "</table>";

    return htmlString;
}

export function productsAlert(data) {
    Swal.fire({
        title: "Productos",
        html: getProductsTable(data),
        confirmButtonText: "Vale",
        confirmButtonColor: redHue,
    });
}
