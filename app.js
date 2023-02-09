console.log('daje')

let latoCelle = 10
let celleTotali = latoCelle * latoCelle
console.log(celleTotali)

const grigliaElement = document.querySelector('.griglia')

for (let i = 0; i < celleTotali; i++){
    let cella = i +1 
    console.log(cella)

    let divString = `<div class="celle" style="width:calc(100% / ${latoCelle})">${cella}</div>`
    console.log(divString)

    grigliaElement.innerHTML += divString
}

const celleElement = document.querySelectorAll('.celle')