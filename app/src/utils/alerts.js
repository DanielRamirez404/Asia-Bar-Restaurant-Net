import Swal from 'sweetalert2';

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
