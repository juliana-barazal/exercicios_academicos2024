    //exercício 1
    function mudarDiv() {
        let divs = document.querySelectorAll("div");
        let body = document.body;
        document.querySelector("#ultimaDiv").innerHTML = "Aqui não é mais uma div, agora é um p";

        for (let i = 0; i < divs.length; i++) {
            let p = document.createElement("p");
            p.innerHTML = divs[i].innerHTML;
            body.replaceChild(p, divs[i])
        }
    }


    //exercicio2
    function removeLIs() {
        let ul2 = document.querySelector("#ul2");
        for (let i = ul2.children.length - 1; i >= 0; i--) {
           ul2.removeChild(ul2.children[i]);
        }

    }


    //exercicio3
    function removeTodosLis(){
        let ULs= document.querySelectorAll("ul");
        for(let i = 0; i < ULs.length; i++){
            for(let j = ULs[i].children.length -1; j >= 0; j--){
                ULs[i].removeChild(ULs[i].children[j]);
            }
        }
    }
