export function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    const calcularDigito = (base, fator) => {
        let total = 0;
        for (let i = 0; i < base.length; i++) {
            total += base[i] * fator--;
        }
        const resto = total % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const baseCPF = cpf.slice(0, 9);
    const digito1 = calcularDigito(baseCPF, 10);
    const digito2 = calcularDigito(baseCPF + digito1, 11);

    return digito1 == cpf[9] && digito2 == cpf[10];
}


export function validarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]/g, "");

    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    const calcularDigito = (base, pesos) => {
        let total = 0;
        for (let i = 0; i < base.length; i++) {
            total += base[i] * pesos[i];
        }
        const resto = total % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const baseCNPJ = cnpj.slice(0, 12);
    const digito1 = calcularDigito(baseCNPJ, pesos1);
    const digito2 = calcularDigito(baseCNPJ + digito1, pesos2);

    return digito1 == cnpj[12] && digito2 == cnpj[13];
}

export function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};