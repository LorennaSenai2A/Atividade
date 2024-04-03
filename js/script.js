const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};

const exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let num = document.getElementById("num").value;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      document.getElementById("resposta").innerHTML += `#${i}`;
    }
  }
};

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 1) {
    error.innerText = `O número ${num} não é primo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; // declarei variável para primo

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % o resto da divisão
    }

    primo
      ? (result.innerText = `O número ${num} é primo`)
      : (result.innerText = `O número ${num} não é primo`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num <= 0) {
    error.innerText = `O número ${num} inválido.`;
    result.innerHTML = "";
  } else {
    result.innerHTML = "";
    error.innerText = "";
    for (let i = 1; i <= 10; i++) {
      var valor = num * i;
      result.innerHTML += `${num} x ${i} = ${valor}<br>`;
    }
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;

  if (num <= 0) {
    error.innerText = `O número a cima é inválido`;
    result.innerText = "";
  } else {
    result.innerHTML = "";
    error.innerText = "";
  }

  while (num >= contador) {
    if (contador % 2 !== 0) result.innerText += `#${contador}`;
    contador++;
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;
  let soma = 0;

  if (num <= 0) {
    error.innerText = `O número a cima é inválido`;
    result.innerText = "";
  } else {
    result.innerHTML = "";
    error.innerText = "";
  }

  while (num >= contador) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
    result.innerHTML = soma;
  }
};

const exercicio7 = () => {
  let cont = 10;
  let result = document.getElementById("resposta");
  result.innerText = "";

  while (cont > 0) {
    result.innerHTML += `#${cont},`;
    cont--;
  }
};

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo")
      : (error.innerText = "A palavra não é um palíndromo");
  }
};

const exercicio9 = () => {
  let result = document.getElementById("resposta");
  let soma = 0;

  for (let i = 1; i <= 100; i++) {
    soma += i;
    result.innerHTML = soma;
  }
};

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;
  let contador = 0;

  result.innerHTML = "";
  if (num > 0) {
    while (contador <= num) {
      error.innerHTML = "";
      soma += contador;
      let media = soma / num;
      error.innerHTML = media;
      contador++;
    }
  } else {
    result.innerHTML = "";
    error.innerHTML = `O número a cima é inválido`;
  }
};

const exercicio11 = () => {
  let result = document.getElementById("resposta").innerHTML;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      document.getElementById("resposta").innerHTML += `#${i}`;
    }
  }
};

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;

  result.innerText = "";
  if (num <= 0) {
    error.innerText = `O número a cima é inválido`;
    result.innerHTML = "";
  } else {
    for (let i = 0; i < num.length; i++) {
      soma += num[i] * 1;
    }
    result.innerHTML += `${soma}`;
    error.innerText = "";
  }
};

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }
  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O número a cima é inválido`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let i = menor; i <= maior; i++) {
      let teste = verificaPrimo(i);
      if (teste) {
        result.innerText += `${i}`;
      }
    }
  }
  function verificaPrimo(numero) {
    let primo = true;
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) primo = false;
    }
    return primo;
  }
};

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0) {
    error.innerHTML = `O número a cima é inválido`;
    result.innerHTML = "";
  } else {
    let area = num1 * num2;
    error.innerText = "";
    result.innerHTML = `${num1} com o ${num2} dará ${area}`;
  }
};

const exercicio15 = () => {
  let frase = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let vogais = ["a", "e", "i", "o", "u"];
  let consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

result.innerText = "";
  error.innerText = "";
  if (frase == "") {
    error.innerText = "Digite frase";
  } else {
    for (let p = 0; p < frase.length; p++) {
      for (let i = 0; i < vogais.length; i++) {
        if (frase[p] == vogais[i]) {
          result.innerText += vogal =  | ${frase[p]} ;
        }
      }
      for (let s = 0; s < consoantes.length; s++) {
        if (frase[p] == consoantes[s]) {
          error.innerText += consoante =  | ${frase[p]} ;
        }
      }
    }
  }
};

const exercicio16 = () => {
  let usuario = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let area = 0;

  if (usuario > 0) {
    area = usuario ** 2 * 3.14;
    error.innerHTML = "";
    result.innerHTML = `A área do círculo de raio ${usuario} é = ${area}`;
  } else {
    result.innerHTML = "";
    error.innerHTML = `O número a cima é inválido`;
  }
};

const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0) {
    error.innerHTML = `O número a cima é inválido`;
    result.innerHTML = "";
  } else {
    let area = (num1 * num2) / 2;
    error.innerText = "";
    result.innerHTML = `${num1} com o ${num2} dará ${area}`;
  }
};

const exercicio18 = () => {
  let baseMaior = document.getElementById("num1").value * 1;
  let baseMenor = document.getElementById("num2").value * 1;
  let altura = document.getElementById("num3").value * 1;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    error.innerHTML = `O número a cima é inválido`;
    result.innerHTML = "";
  } else {
    let area = ((parseFloat(baseMaior) + parseFloat(baseMenor)) * altura) / 2;
    error.innerText = "";
    result.innerHTML = `A area do trapezio é ${area}`;
  }
};

const exercicio19 = () => {};

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (frase == "") {
    error.innerText = "Favor informar uma frase";
  } else {
    for (let i = 1; i <= frase.length; i++) {
      inversa += frase.charAt(frase.length - i);
    }
    result.innerText = inversa;
  }
};

const exercicio21 = () => {};

const exercicio22 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let soma = 0
  result.innerText = ""
  soma += parseInt(num)

  while (soma <= 100){
    let numero = parseInt(prompt("Informe mais um numero"))
    if (isNaN(numero) || numero <= 0 ){
      numero = parseInt(prompt("Numero invalido, informe novamente"))
    } else {
      soma += numero
    }
  }
  result.innerText = `A soma total é ${soma}`
};

const exercicio23 = () => {};

const exercicio24 = () => {};

const exercicio25 = () => {};
