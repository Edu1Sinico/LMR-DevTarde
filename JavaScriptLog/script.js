function concatenar(){
    var nome, sobrenome;

    var Element1 =  document.getElementById('pNome');
    var Element2 = document.getElementById('pSobre');

    nome = Element1.value;
    sobrenome = Element2.value;

    alert("Nome: " + nome + " " + sobrenome);
}