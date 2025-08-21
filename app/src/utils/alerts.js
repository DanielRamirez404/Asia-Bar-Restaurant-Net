import Swal from 'sweetalert2';

const redHue = "#D9534F";
const greenHue = "#5CB85C";
const textHue = "#333333";
const iconHue = "#777777";

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
