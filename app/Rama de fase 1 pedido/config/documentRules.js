export const DOCUMENT_RULES = {
    // Cédula Venezolana
    'ci_venezolano': {
        prefix: 'V-',
        minLength: 9,  // V- + 7 dígitos
        maxLength: 10, // V- + 8 dígitos
        pattern: /^V-\d{7,8}$/,
        placeholder: 'V-12345678',
        description: 'Cédula venezolana (7 u 8 dígitos)',
        format: (value) => {
            const numbers = value.replace(/[^0-9]/g, '');
            return `V-${numbers}`;
        },
        validate: (value) => {
            const numbers = value.replace(/[^0-9]/g, '');
            return numbers.length >= 7 && numbers.length <= 8;
        }
    },
    
    // Cédula Extranjero
    'ci_extranjero': {
        prefix: 'E-',
        minLength: 9,  // E- + 7 dígitos
        maxLength: 10, // E- + 8 dígitos
        pattern: /^E-\d{7,8}$/,
        placeholder: 'E-20123456',
        description: 'Cédula extranjera (7 u 8 dígitos)',
        format: (value) => {
            const numbers = value.replace(/[^0-9]/g, '');
            return `E-${numbers}`;
        },
        validate: (value) => {
            const numbers = value.replace(/[^0-9]/g, '');
            return numbers.length >= 7 && numbers.length <= 8;
        }
    },
    
    // RIF Persona Natural
    'rif_personal': {
        prefix: 'V-',
        minLength: 8,  // V- + 7
        maxLength: 11, // V- + 9
        pattern: /^V-\d{7,9}$/,
        placeholder: 'V-12345678',
        description: 'RIF Personal (V- + 7 a 9 dígitos)',
        format: (value) => {
            const clean = value.replace(/[^0-9Vv-]/g, '').toUpperCase();
            if (!clean) return 'V-';
            if (clean.startsWith('V-')) {
                return `V-${clean.substring(2).replace(/\D/g, '')}`.slice(0, 11);
            } else if (clean.startsWith('V')) {
                return `V-${clean.substring(1).replace(/\D/g, '')}`.slice(0, 10);
            }
            return `V-${clean.replace(/\D/g, '')}`.slice(0, 10);
        },
        validate: (value) => /^V-\d{7,9}$/.test(value.toUpperCase())
    },
    
    // RIF Jurídico
    'rif_juridico': {
        prefix: 'J-',
        minLength: 8,  // J- + 7
        maxLength: 11, // J- + 9
        pattern: /^J-\d{7,9}$/,
        placeholder: 'J-30746135',
        description: 'RIF Jurídico (J- + 7 a 9 dígitos)',
        format: (value) => {
            const clean = value.replace(/[^0-9Jj-]/g, '').toUpperCase();
            if (!clean) return 'J-';
            if (clean.startsWith('J-')) {
                return `J-${clean.substring(2).replace(/\D/g, '')}`.slice(0, 11);
            } else if (clean.startsWith('J')) {
                return `J-${clean.substring(1).replace(/\D/g, '')}`.slice(0, 10);
            }
            return `J-${clean.replace(/\D/g, '')}`.slice(0, 10);
        },
        validate: (value) => /^J-\d{7,9}$/.test(value.toUpperCase())
    },
    
    // RIF Gobierno
    'rif_gobierno': {
        prefix: 'G-',
        minLength: 8,  // G- + 7
        maxLength: 11, // G- + 9
        pattern: /^G-\d{7,9}$/,
        placeholder: 'G-20000123',
        description: 'RIF Gobierno (G- + 7 a 9 dígitos)',
        format: (value) => {
            const clean = value.replace(/[^0-9Gg-]/g, '').toUpperCase();
            if (!clean) return 'G-';
            if (clean.startsWith('G-')) {
                return `G-${clean.substring(2).replace(/\D/g, '')}`.slice(0, 11);
            } else if (clean.startsWith('G')) {
                return `G-${clean.substring(1).replace(/\D/g, '')}`.slice(0, 10);
            }
            return `G-${clean.replace(/\D/g, '')}`.slice(0, 10);
        },
        validate: (value) => /^G-\d{7,9}$/.test(value.toUpperCase())
    }
};

export const getDocumentRules = (docType) => {
    return DOCUMENT_RULES[docType] || {
        prefix: '',
        minLength: 0,
        maxLength: 20,
        pattern: /^.*$/,
        placeholder: '',
        description: 'Documento no reconocido',
        format: (value) => value,
        validate: () => true
    };
};
