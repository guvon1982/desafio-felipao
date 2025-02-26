const prompt = require("prompt-sync")();

// DESAFIO 1 - Desafio Classificador de nível de Herói

let nome = "";
let xp = 0;
let nivel = "";
let continuar = "sim"; // Inicializa com "sim" para entrar no loop

while (continuar.toLowerCase() === "sim") {
  // Solicita os dados do herói
  nome = prompt("Qual o nome do herói? ");
  xp = Number(prompt("Qual a experiência do herói? "));

  // Classifica o nível do herói
  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp > 2000 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp > 5000 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp > 7000 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp > 10000) {
    nivel = "Radiante";
  }

  // Exibe o resultado
  console.log("O herói de nome " + nome + " está no nível de " + nivel);

  // Pergunta se o usuário deseja continuar
  continuar = prompt("Deseja continuar? (sim / não): ");
}

console.log("Obrigado pela participação!");
