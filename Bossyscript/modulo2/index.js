"use strict";
const greetingHam = (nome, sobrenome) => {
    if (sobrenome) {
        return console.log(`Olá, ${nome} ${sobrenome}`);
    }
    return console.log(`Olá, ${nome}`);
};
greetingHam('Yllana');
