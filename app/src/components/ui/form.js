import { Search, FileText } from "lucide-react";
import './form.css';
import { getDocumentRules } from '../../config/documentRules';

export function RequiredInputBox({ title, textSetter, type = 'text', regex = null, value = null, showDocumentSelector = false }) {
    const venezuelanDocuments = [
        { value: 'ci_venezolano', label: 'V-' },
        { value: 'ci_extranjero', label: 'E-' },    
        { value: 'rif_personal', label: 'RIF V-' },
        { value: 'rif_juridico', label: 'RIF J-' },
        { value: 'rif_gobierno', label: 'RIF G-' }
    ];

    const handleDocumentNumberChange = (e, docType) => {
        const inputValue = e.target.value;
        const rules = getDocumentRules(docType);
        
        // Aplicar formato según el tipo de documento
        let formattedValue = rules.format(inputValue);
        
        // Limitar la longitud máxima
        if (formattedValue.length > rules.maxLength) {
            formattedValue = formattedValue.slice(0, rules.maxLength);
        }
        
        textSetter(prevValue => ({
            ...prevValue,
            docNumber: formattedValue
        }));
    };

    const handleDocumentTypeChange = (e) => {
        const selectedDoc = e.target.value;
        const docType = selectedDoc.split('_')[0];
        const rules = getDocumentRules(selectedDoc);
        
        textSetter(prevValue => ({
            ...prevValue,
            docType: selectedDoc,
            docPrefix: rules.prefix,
            docNumber: '' // Resetear el número al cambiar el tipo
        }));
    };

    const getCurrentDocumentRules = () => {
        return value?.docType ? getDocumentRules(value.docType) : null;
    };

    const currentRules = getCurrentDocumentRules();
    const placeholder = currentRules?.placeholder || title;

    if (showDocumentSelector) {
        return (
            <div className='input-box'>
                <label>{title}</label>
                <div className="document-fields-container">
                    <div className="document-type-container">
                        <div className="document-icon">
                            <FileText size={16} />
                        </div>
                        <select 
                            className="document-type-selector"
                            onChange={handleDocumentTypeChange}
                            value={value?.docType || ''}
                        >
                            <option value="" disabled>Doc.</option>
                            {venezuelanDocuments.map((doc) => (
                                <option key={doc.value} value={doc.value}>
                                    {doc.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="document-input-container">
                        <input
                            type="text"
                            className="document-number-input"
                            placeholder={placeholder}
                            value={value?.docNumber || ''}
                            onChange={(e) => handleDocumentNumberChange(e, value?.docType)}
                            maxLength={currentRules?.maxLength || 20}
                        />
                    </div>
                </div>
                {currentRules && (
                    <div className="document-hint">
                        <small>{currentRules.description}</small>
                    </div>
                )}
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
