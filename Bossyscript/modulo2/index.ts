type functionGreeting = {
    nome: string
    sobrenome?: string
}

const greetingHam = (nome:string, sobrenome?:string) => {
    
    if(sobrenome){
        return console.log(`Olá, ${nome} ${sobrenome}`)
    }
    return console.log(`Olá, ${nome}`)
}

greetingHam('Yllana')