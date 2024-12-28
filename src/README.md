
# 🛡️ RPG Personalizado - Bem-vindo ao Mundo de Sakturn! 🗺️

Este projeto simples é um script interativo criado em **JavaScript** para estudo e prática com intuito de personalizar o personagem de um jogador em um universo RPG, chamado **Sakturn**. Por meio de perguntas dinâmicas e validações, o código captura informações do jogador, como nome, classe e experiência, e define o rank do personagem no jogo.

---

## 📝 Descrição do Código  

O código é estruturado em três etapas principais, cada uma realizada por funções específicas para tornar o fluxo modular e fácil de entender. Aqui está a descrição completa de cada parte:

### 🔧 **Declarações de Variáveis**  

As variáveis são inicializadas para armazenar as informações do personagem. O script usa o pacote `prompt-sync` para capturar a entrada do usuário.  

```javascript
let entrada = require('prompt-sync')()
let nomePersonagem = ""
let classePersonagem = ""
let rankPersonagem = ""
```

---

### 🚀 **Funções do Código**  

#### 1️⃣ **Função `capturarNome()`**  

Esta função solicita o nome do personagem do jogador e o armazena na variável `nomePersonagem`.

```javascript
function capturarNome(){
    console.log("Qual o seu nome aventureiro?") //Solicita o nome do personagem ao usuario
    nomePersonagem = entrada() // Captura o que foi digitado pelo usuario e armazena na variável nomePersonagem
    console.clear() // Limpa a tela do console para a entrada do proximo comando
}
```

- **O que faz?**  
  - Exibe uma mensagem ao jogador pedindo o nome.  
  - Usa `entrada()` para capturar a resposta.  

---

#### 2️⃣ **Função `capturarClasse()`**  

Esta função solicita que o jogador escolha a classe do personagem entre as opções disponíveis: **Guerreiro(a)**, **Mago(a)** e **Arqueiro(a)**.  

```javascript
function capturarClasse(){
    console.log("Me diga. Qual a sua classe? ")
    console.log("1 - Guerreiro(a) 2 - Mago(a) 3 - Arqueiro(a)")

    classePersonagem = entrada()

    while(true) {

        if (classePersonagem !== "1" && classePersonagem !== "2" && classePersonagem !== "3") {
            console.log("Opção inválida! Escolha entre 1, 2 ou 3")
            classePersonagem = entrada()
            continue;
        }

        switch (classePersonagem) {
            case "1":
                classePersonagem = "Guerreiro(a)"
                break;
            case "2":
                classePersonagem = "Mago(a)"
                break;
            case "3":
                classePersonagem = "Arqueiro(a)"
                break;
        }
        break;       
    }
}
```

- **Destaques:**  
  - Validação para impedir seleções inválidas.  
  - Conversão do número selecionado para o nome da classe usando `switch`.  

---

#### 3️⃣ **Função `capturarExp()`**  

A função captura a quantidade de experiência (XP) do jogador e define o rank correspondente com base em faixas predefinidas.  

```javascript
// Função para captura da Experiencia do personagem + laços para classificação do rank a partir da EXP

function capturarExp(){

    console.clear()

    entrada = require('prompt-sync')()

    console.log("Por último, para uma experiência mais equilibrada e emocionante.\n")
    console.log("Quanto de XP (Experiência) você já obteve? \n")

    // Laço de verificação de experiencia do personagem

    let xpPersonagem = entrada()

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
}

```

- **Destaques:**  
  - Faixas de XP são usadas para determinar o rank: **Ferro**, **Bronze**, **Prata**, **Ouro**, **Platina**, **Ascendente**, **Imortal** e **Radiante**.  

---

### 🛠️ **Execução do Código**

As funções são chamadas em sequência, criando uma experiência interativa e lógica:  

```javascript
//Chamada das funções (Nome do Personagem)

capturarNome()

// Saida de texto boas vindas

console.log("Olá, " + nomePersonagem + "! Seja bem-vindo(a) ao mundo de Sakturn!")
console.log("\nFarei breves perguntas para personalizar sua experiência, Tudo bem?!\n")

//Chamada das funções (Classe do personagem)

capturarClasse()

//Chamada da função (Experiência)

capturarExp()
```

1. Captura do nome do jogador.  
2. Escolha da classe.  
3. Determinação do rank com base na XP.  

Por fim, exibe o perfil completo do personagem.  

**Código:**
```javascript
console.log("O Herói " + nomePersonagem + " é um(a) " + classePersonagem + " rank " + rankPersonagem)
console.log("Agora que já sabemos um pouco mais sobre você, está pronto(a) para começar sua jornada!")
```

**Saída:**
```plaintext
O Herói Arthur é um(a) Guerreiro(a) rank Ouro

Agora que já sabemos um pouco mais sobre você, está pronto(a) para começar sua jornada!
```

---

## 🚀 Como Executar  

1. Certifique-se de ter o **Node.js** instalado no sistema.  
2. Clone o repositório:  
   ```bash
   git clone https://github.com/LucasAlvesCode/dio-logica-de-programacao-desafio-felipao-1.git
   ```
3. Instale o pacote `prompt-sync`:  
   ```bash
   npm install prompt-sync
   ```
4. Execute o arquivo `index.js`:  
   ```bash
   node index.js
   ```

---

## 🛡️ Resultado Esperado  

O código cria uma experiência imersiva e personaliza o perfil do jogador com base nas respostas fornecidas. A saída final inclui:  
- **Nome do Personagem**  
- **Classe Escolhida**  
- **Rank Baseado no XP**  

Exemplo:  
```plaintext
O Herói Arthur é um(a) Guerreiro(a) rank Ouro

Agora que já sabemos um pouco mais sobre você, está pronto(a) para começar sua jornada!
```

---

## 👨‍💻 Autor  

Criado por **Lucas Alves** com o objetivo de explorar conceitos de interatividade e validação em JavaScript utilizando como proposta o desafio do curso de Lógica de Programação da DIO. 

---
