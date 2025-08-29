import { RequiredInput, WarningText, DisabledInputBox } from '../../ui/form.js';

function Input(title, type) {
    this.title = title;
    this.type = type;
}

function NewClientInputs({ values, setters }) {
    const inputs = [
        new Input("Nombre del Cliente", "text"),
        new Input("Dirección del Cliente", "city"),
        new Input("Teléfono del Cliente", "phone")
    ];

    const totalInputs = inputs.length;

    return (
        <>
            {inputs.map( (input, i) => {
                console.log(input);
                console.log(i);
                return (<RequiredInput 
                    key={`${input.title}-${i}`}
                    type={input.type}
                    title={input.title}
                    value={values[i]}
                    onChange={setters[i]}
                />)
                    

                }
            )}
        </>
    );
}

function NewClientInfo({ values, setters }) {
    return(
        <>
            <WarningText text="Documento de Identidad no encontrado. Por favor, ingrese el resto de los datos del cliente." />
            <NewClientInputs values={values} setters={setters} />
        </>
    );
} 

export function ClientInfo({ isNewClient, foundName, values, setters }) {
    return isNewClient ? 
        <NewClientInfo values={values} setters={setters}/> : 
        <DisabledInputBox title="Nombre de Cliente Encontrado" value={foundName} />;
}
