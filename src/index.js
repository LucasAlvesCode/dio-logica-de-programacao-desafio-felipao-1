//Importações

let entrada = require('prompt-sync')();

// Capturar nome do personagem

console.log("Qual o seu nome aventureiro?")
let nomePersonagem = entrada()

// Saida de texto boas vindas

console.log("Olá, " + nomePersonagem + "! Seja bem-vindo(a) ao mundo de Sakturn!")

// Capturar a classe do personagem

console.log("Me diga qual a sua classe: ")

console.log("1 - Guerreiro(a) \n2 - Mago(a) \n3 - Arqueiro(a)")

// Laços para seleção de classe (Com tratamento para opção invalida)

let classePersonagem = entrada()

while(true) {

    // Tratamento de erro para opção inválida
    if (classePersonagem !== "1" && classePersonagem !== "2" && classePersonagem !== "3") {
        console.log("Opção inválida! Escolha entre 1, 2 ou 3")
        console.log("1 - Guerreiro(a) \n2 - Mago(a) \n3 - Arqueiro(a)")
        classePersonagem = entrada()
        continue;
    }
    
    // Switch para seleção de classe
    switch (classePersonagem) {
        case "1":
            console.log("Que legal! Mais um Guerreiro(a) para a nossa jornada!")
            classePersonagem = "Guerreiro(a)"
            break;
        case "2":
            console.log("Nossa! Um magnífico Mago(a) se juntou a nós!")
            classePersonagem = "Mago(a)"
            break;
        case "3":
            console.log("Agora sim! Um Arqueiro(a) para nos ajudar nas batalhas!")
            classePersonagem = "Arqueiro(a)"
            break;
    }
    break;       
}

console.log("Muito bem, " + nomePersonagem + " estamos quase lá!")
console.log("Por último, para uma experiência mais equilibrada e emocionante, me diga quanto de XP (Experiência) você tem: ")

// Laço de verifição de experiencia do personagem

let xpPersonagem = entrada()
let rankPersonagem = ""

if (xpPersonagem <= 1000) {
    console.log("Você é um(a) aventureiro(a) iniciante! Seu rank atual é Ferro.")
    rankPersonagem = "Ferro"
}else if (xpPersonagem >= 1001 && xpPersonagem <= 2000) {
    console.log("Você é um(a) aventureiro(a) intermediário! Seu rank atual é Bronze.")
    rankPersonagem = "Bronze"    
}else if (xpPersonagem >= 2001 && xpPersonagem <= 5000) {
    console.log("Você é um(a) aventureiro(a) experiente! Seu rank atual é Prata.") 
    rankPersonagem = "Prata"  
}else if (xpPersonagem >= 5001 && xpPersonagem <= 7000) {
    console.log("Você é um(a) aventureiro(a) veterano! Seu rank atual é Ouro.")
    rankPersonagem = "Ouro"
}else if (xpPersonagem >= 7001 && xpPersonagem <= 8000) {  
    console.log("Você é um(a) aventureiro(a) mestre! Seu rank atual é Platina.")
    rankPersonagem = "Platina"
}else if (xpPersonagem >= 8001 && xpPersonagem <= 9000) {
    console.log("Você é um(a) aventureiro(a) lendário! Seu rank atual é Ascendente.")
    rankPersonagem = "Ascendente"
}else if (xpPersonagem >= 9001 && xpPersonagem <= 10000) {
    console.log("Você é um(a) aventureiro(a) épico! Seu rank atual é Imortal.")
    rankPersonagem = "Imortal"
}else {
    console.log("Você é um(a) aventureiro(a) divino! Seu rank atual é Radiante.")
    rankPersonagem = "Radiante"
}

//Mensagem final

console.log("O Herói " + nomePersonagem + " é um(a) " + classePersonagem + " rank " + rankPersonagem)
console.log("Agora que já sabemos um pouco mais sobre você, está pronto(a) para começar sua jornada!")