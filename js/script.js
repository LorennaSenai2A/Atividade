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
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num <= 0) {
    error.innerText = `O número a cima é inválido`;
    result.innerText = "";
  } else {
    result.innerHTML = "";
    error.innerText = "";
  }

  while (condition) {
    
  }
};

const exercicio8 = () => {

}

