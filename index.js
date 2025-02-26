const prompt = require("prompt-sync")();

// DESAFIO 1 - Desafio Classificador de nível de Herói

let nome = " ";
let xp = 0;
let nivel = "";
let continuar = "sim";

//Eu quero um comando de while para que o usuário digite sim se quiser continuar ou não se quiser parar.
while (continuar === "sim") {
  nome = prompt("Qual o nome do herói? ");
  console.log();
  xp = Number(prompt("Qual a experiencia do herói? "));

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

  console.log();
  console.log("O herói de nome " + nome + " está no nível de " + nivel);

  console.log();
  continuar = prompt("Deseja continuar? (sim / não): ");
  console.log();
}
console.log();
console.log("Obrigado pela participação");