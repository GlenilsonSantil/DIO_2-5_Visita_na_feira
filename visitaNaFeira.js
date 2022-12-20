// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

//TODO: Complete os espaços em branco
let line = gets().split(" ");
let A = parseInt(line[0]); 
let B = parseInt(line[1]); 
//TODO: Faça a soma do número de pimentões e imprima o resultado

let total = A + B;

print("X = " + total);