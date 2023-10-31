function somar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

function subtrair(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}

function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
}