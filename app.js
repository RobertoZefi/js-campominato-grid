console.log('daje')

let latoCelle = 10
let celleTotali = latoCelle * latoCelle
console.log(celleTotali)


const grigliaElement = document.querySelector('.griglia')

const button = document.querySelector('.button')

button.addEventListener ('click', function(){
    grigliaElement.classList.add('active')
})



for (let i = 1; i <= celleTotali; i++){
    let cella = i  
    console.log(cella)

    let divString = `<div class="celle" style="width:calc(100% / ${latoCelle})">${cella}</div>`
    // console.log(divString)

    grigliaElement.innerHTML += divString

}

const celleElement = document.querySelectorAll('.celle')
console.log (celleElement)

for (let i = 0; i < celleElement.length; i++){
    let cella = celleElement[i]
    cella.addEventListener ('click', function(){
        console.log(i + 1)
        cella.style.backgroundColor = 'darkred';
        cella.style.color = 'white';
    })
}

