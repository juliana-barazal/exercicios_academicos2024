//exercícios gerados pelo chat gpt para treino

//exercicio 1
function alterarTexto(){
    let p = document.querySelector("#paragrafo1");  
    p.innerHTML = "O texto foi alterado com sucesso!";
}

//exercicio 2
function trocarImagem(img){
    img.src = "novaImagem.png";
    img.alt = "texto alt para nova imagem";
}

//exercicio 3
function adicionarItem(){
    let li = document.createElement("li");
    li.innerText = "Novo elemento";
    document.querySelector("#listaEx3").appendChild(li);
}

//exercicio 4
function alterarCor(){
    document.body.style.backgroundColor="#f5f4f9";
}


