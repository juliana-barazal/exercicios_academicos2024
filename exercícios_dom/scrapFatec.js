//scrap para buscar o objetivo das matérias da grade no site da fatec rubens lara

function showObj(){
    let listDivs = document.querySelectorAll("p.tab-text:first-of-type");
    listDivs.forEach(element =>{
            console.log(element.textContent);
    });
}