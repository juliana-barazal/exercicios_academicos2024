//exercício 1
function pPink(){
    let ps = document.querySelectorAll("div p");
    ps.forEach (element =>{
    element.style.color = "#ff007f";   
    })
}

//exercício 2
const dados= [{nome:"Teste",acao:"MOSTRAR"},{nome:"Nome1",acao:"IGNORAR"},{nome:"Nome2",acao:"MOSTRAR"}];

function mostrarEmP(array){
    let button = document.querySelector("#buttonNomes");
    for(let i = 0; i<dados.length; i++){
        if(array[i].acao === "MOSTRAR"){
            let p = document.createElement("p");
            p.innerHTML = array[i].nome;
            button.appendChild(p)
        }
    }
}

function ignorados(array){
    let ignorados = 0;
    let button = document.querySelector("#buttonIgnorados");
    array.forEach(element => {
        if(element.acao === "IGNORAR"){
            ignorados++;
        }
    })
    let div = document.createElement("div");
    div.innerHTML = ignorados;
    button.appendChild(div)
}

function numDePs(array){
    let mostrados = 0;
    let button = document.querySelector("#buttonMostrados");
    array.forEach(element => {
        if(element.acao === "MOSTRAR"){
            mostrados++;
        }
    })
    let p = document.createElement("p");
    p.innerText = mostrados;
    button.appendChild(p);
}

//exercicio 3
function rolar(){
    let number = document.querySelector("#numero").value;
    let button = document.querySelector("#buttonLista");
    let ul = document.createElement("ul");
    for(let i = 0; i < number; i++){
        let li = document.createElement("li");
        if(i % 2 === 0){
            li.style.color = "blue";
        }
        else{
            li.style.color = "red";
        }
        li.innerText = i;
        ul.appendChild(li);
    }
    button.appendChild(ul);
}

//exercicio 4
function nomearImgs(){
    
}

