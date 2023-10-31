let corAtual = '';

function mudarCorFundo(element) {
    corAtual = document.body.style.backgroundColor;
    document.body.style.backgroundColor = getComputedStyle(element).backgroundColor;
}

function previewCorFundo(element) {
    document.body.style.backgroundColor = getComputedStyle(element).backgroundColor;
    document.getElementById("preview").style.visibility = 'visible';
}

function voltarCorFundo() {
    document.body.style.backgroundColor = corAtual;
    document.getElementById("preview").style.visibility = 'hidden';
}

function voltarCorFundoOriginal() {
    corAtual = '';
    document.body.style.backgroundColor = 'white';
    document.getElementById("preview").style.visibility = 'hidden';
}