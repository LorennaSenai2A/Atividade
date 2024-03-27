const exercicio1 = () => {
document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};

const exercicio2 = () => {
document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
let num = document.getElementById("num").value;
for (let i = 0; i <= num; i ++) {
    if (i % 2 == 0) {
     document.getElementById("resposta").innerHTML += `#${i}`;
    }
}
};

const exercicio3 = () => {
document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>";
let num = document.getElementById("num").value;
for (let i = 1; i <= num; i +=2) {
     document.getElementById("resposta").innerHTML += `#${i}`;
    }
;}
