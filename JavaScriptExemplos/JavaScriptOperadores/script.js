function boasVindas() {

    let nome;
    let sobrenome;

    nome = prompt("DIgite o seu nome", "Digite aqui");
    sobrenome = prompt("Digite o seu sobrenome", "Digite aqui");

    alert("Olá " + nome + " " + sobrenome);

}

function somar() {
    let x, y;

    x = parseInt(prompt("Digite um número"));
    y = parseInt(prompt("Digite outro número"));

    alert("O resultado da soma será: " + (x + y));

    alert("O resultado da subtração será: " + (x - y));

    alert("O resultado da multiplicação será: " + (x * y));

    if (!y == 0) {
        alert("O resultado da divisão será: " + (x / y));
    }
    else{
        alert("Não existe divisão por zero.");
    }
}

