

export const regExDic = {


    soloLetras : {
       pattern: "[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+",
        title: "Solo se permite el uso de letras en este campo"
    },

    telefono : {
        pattern : "^\\d+$",
        title : "Debe introducir un numero celular valido como: 04161234567"
    },

    identificacion : {
        pattern: "^(V|E)\\d{7,}$|^J\\d{10,}$",
        title: "Debe ingresar un documento de identidad valido: \d V20111222 \d J1234567890 \d E12345678 "
    }



}