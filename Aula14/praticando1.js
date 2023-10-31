let nome = prompt("Qual é o seu nome?");
document.getElementById("nome").innerHTML = nome; 

function addTexto(){
    let texto = document.createElement("p");
    texto.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum illum esse in itaque quibusdam illo officia et vitae, repellendus labore quis ducimus voluptatibus cupiditate distinctio molestias neque adipisci velit. Voluptate, recusandae sapiente veritatis corrupti cum placeat asperiores magnam blanditiis ab ipsam consequatur nisi commodi quaerat nihil repellendus. Fugit, nulla reprehenderit sequi enim maxime qui laborum illo molestiae repudiandae quas!"
    document.getElementById("paragrafos").appendChild(texto);
}

function remTexto(){
    let textos = document.getElementById("paragrafos");
    while (textos.firstChild) {
        textos.removeChild(textos.firstChild);
    }
}