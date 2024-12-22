# 🚀 Classificador de Nível de Herói

Este repositório contém o projeto **"Classificador de Rank de Herói"**, desenvolvido com **JavaScript** como parte da **Formação em Lógica de Programação** na DIO (Digital Innovation One) - Ministrado pelo professor Felipe Aguitar https://github.com/felipeAguiarCode.

## 📋 Descrição do Projeto
O objetivo deste projeto é criar um programa (**Não importa a linguagem adotada**) que classifique o rank de um herói com base na quantidade de **experiência (XP)** acumulada.

### 🛠️ Funcionalidades
- Exibe o **nome** e o **rank do herói** de acordo com a quantidade de XP.
- Classificação em diferentes níveis, variando de **Ferro** a **Radiante**.
- Utiliza estruturas condicionais (`if`, `else if`, `else`, `while`, `switch/case`) para determinar o nível do herói.

## 🧱 Níveis de Classificação

| **XP Acumulado**| **Rank do Herói** |
|-----------------|-------------------|
| 0 - 1000        | Ferro             |
| 1001 - 2000     | Bronze            |
| 2001 - 5000     | Prata             |
| 5001 - 7000     | Ouro              |
| 7001 - 8000     | Platina           |
| 8001 - 9000     | Ascendente        |
| 9001 - 10000    | Imortal           |
| 10001+          | Radiante          |

## 📑 Estrutura do Código

1. Definição de variáveis para armazenar:
   - **Nome do herói**
   - **XP acumulado**
   - **Rank de nível**
2. Utilização de estruturas condicionais para verificar o rank do herói com base no XP.
3. Exibição do nome do herói e seu rank correspondente.

## ⚙️ Exemplo de Código (JavaScript)

```javascript

// Importação de função de captura

let entrada = require('prompt-sync')();

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
```

## 🚧 Desafios
- Implementação correta das **estruturas condicionais**.
- Garantir que a lógica de classificação esteja funcionando sem falhas.
- Organização e clareza no código, evitando redundâncias.

## 💡 Experiência de Desenvolvimento
Apesar de ser um projeto simples, a experiência proporcionou um aprendizado significativo na aplicação de:
- **Lógica de programação**
- **Estruturas condicionais** em **JavaScript**
- Organização e boas práticas no código

## 🏆 Conclusão
O projeto **"Classificador de Rank de Herói"** é uma excelente oportunidade para reforçar conceitos de lógica de programação e iniciar o desenvolvimento de habilidades com programação. Ideal para quem está começando na área!

---
**Desenvolvido por Lucas Alves Veloso durante a Formação em Lógica de Programação na DIO**

