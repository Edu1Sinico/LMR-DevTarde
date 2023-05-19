function nParImpar() {
    let n1 = parseInt(document.getElementById("nDigitado").value);

    if (n1 == null) {
        alert("Informe um valor!")
    }
    else if (n1 % 2 == 0) {
        alert("O valor digitado é par: " + n1);
    }
    else {
        alert("O valor digitado é impar: " + n1);
    }
}

function verOper() {
    let op = document.getElementById("pListBox").value;
    let n1 = parseInt(document.getElementById("valor1").value);  
    let n2 = parseInt(document.getElementById("valor2").value); 

    switch (op) {
        case "+":
            {
                alert("Resultado da operação: " + (n1+n2));
                break;
            }
        case "-":
            {
                alert("Resultado da operação: " + (n1-n2));
                break;
            }
        case "*":
            {
                alert("Resultado da operação: " + (n1*n2));
                break;
            }
        case "/":
            {
                if(n2 == 0)
                {
                    alert("Não existe divisão por 0");
                }
                else{
                    alert("Resultado da operação: " + (n1/n2));
                }
                break;
            }

        default:{
            alert("Informe uma operação");
            break;
        }
    }
}