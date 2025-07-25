import { Search, FileText } from "lucide-react";
import './form.css';

export function RequiredInputBox({ title, textSetter, type = 'text', regex = null, value = null, showDocumentSelector = false }) {
    const venezuelanDocuments = [
        { value: 'rif_personal', label: 'RIF Personal (V-XXXXXXXX)' },
        { value: 'rif_juridico', label: 'RIF Jurídico (J-XXXXXXXXX)' },
        { value: 'rif_gobierno', label: 'RIF Gobierno (G-XXXXXXXXX)' },
        { value: 'ci_venezolano', label: 'C.I. Venezolano (V-XXXXXXXX)' },
        { value: 'ci_extranjero', label: 'C.I. Extranjero (E-XXXXXXXX)' },
        { value: 'pasaporte', label: 'Pasaporte' },
        { value: 'otro', label: 'Otro Documento' }
    ];

    if (showDocumentSelector) {
        return (
            <div className='input-box'>
                <label>{title}</label>
                <div className="document-input-container">
                    <div className="document-icon">
                        <FileText size={20} />
                    </div>
                    <select 
                        className="document-type-selector"
                        onChange={(e) => {
                            // Extraer solo el valor del documento sin el prefijo
                            const selectedDoc = e.target.value;
                            const docType = selectedDoc.split('_')[0];
                            textSetter(prevValue => ({
                                ...prevValue,
                                docType: docType,
                                docPrefix: docType === 'ci' ? 'V' : docType === 'rif' ? 'J' : ''
                            }));
                        }}
                        defaultValue=""
                    >
                        <option value="" disabled>Seleccione un documento</option>
                        {venezuelanDocuments.map((doc) => (
                            <option key={doc.value} value={doc.value}>
                                {doc.label}
                            </option>
                        ))}
                    </select>
                    <div className="document-separator"></div>
                    <input
                        type="text"
                        className="document-number-input"
                        placeholder={title}
                        value={value?.docNumber || ''}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            // Validar según el tipo de documento seleccionado
                            let formattedValue = inputValue;
                            const docType = value?.docType;
                            
                            if (docType === 'rif' || docType === 'ci') {
                                // Permitir solo números después del prefijo
                                formattedValue = inputValue.replace(/[^0-9-]/g, '');
                                // Formatear según el tipo de documento
                                if (docType === 'rif') {
                                    // Formato: J-123456789
                                    if (formattedValue.length > 0 && !formattedValue.includes('-')) {
                                        formattedValue = value?.docPrefix + '-' + formattedValue;
                                    }
                                } else if (docType === 'ci') {
                                    // Formato: V-12345678 o E-12345678
                                    if (formattedValue.length > 0 && !formattedValue.includes('-')) {
                                        formattedValue = value?.docPrefix + '-' + formattedValue;
                                    }
                                }
                            }
                            
                            textSetter(prevValue => ({
                                ...prevValue,
                                docNumber: formattedValue
                            }));
                        }}
                    />
                </div>
            </div>
        );
    }

    // Comportamiento original para otros tipos de input
    return (
        <div className='input-box'>
            <label htmlFor={title}>
                {title}
            </label>
            
            <input 
                type={type} 
                id={title} 
                placeholder={title} 
                pattern={regex} 
                onChange={(e) => textSetter(e.target.value)} 
                value={value}
            />
        </div>
    );
}

export function SearchInputBox({ textSetter, value = null }) {
    return (
        <>
            <Search className="search-icon" />

            <input
                type="text"
                className="search-input-box"
                placeholder="Buscar"
                value={value}
                onChange={(e) => textSetter(e.target.value)}
            />
        </>
    );
}

export function RequiredSelector({ title, options, textSetter }) {
    return(
        <div className="input-box">
            <label htmlFor={title}>{title}</label>
            <select 
                className="selector" 
                id={title} 
                defaultValue={options[0]} 
                onChange={(e) => textSetter(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
