console.log('daje')

let latoCelle = 10
let celleTotali = latoCelle * latoCelle
console.log(celleTotali)


const grigliaElement = document.querySelector('.griglia')

const button = document.querySelector('.button')
//let punteggioElement = document.getElementById('punteggio')
let risultatoElement = document.getElementById('risultato')
button.addEventListener ('click', startGame)

const bombe = []

while (bombe.length <= 15){
    let numRandom = Math.floor (Math.random () * celleTotali) + 1
    if (bombe.includes(numRandom)){
        numRandom = false
    } else{
        bombe.push(numRandom)
    }
}
console.log(bombe)



function startGame (){
    resetGriglia()

    generaGriglia(latoCelle)
    
    const celleElement = document.querySelectorAll('.celle')
    console.log (celleElement)
    

    for (let i = 0; i < celleElement.length; i++){
        let cella = celleElement[i]
        cella.addEventListener ('click', onClick)
    }
}

function onClick(event){
    const cella = event.target
    numeroCella = parseInt(cella.innerHTML) 
    console.log(numeroCella)
    console.log(event.target)
    cella.classList.add('bg-red')
    cella.removeEventListener('click', onClick)
    let risultato
    
    for (let i = 0; i < bombe.length; i++){
        let numeroBomba = bombe[i]
        if (numeroBomba === numeroCella){
            cella.classList.add('bg-green')
            risultato = `<div class=risultato>HAI PERSO</div>`
            risultatoElement.innerHTML += risultato
        } 
    }
}

function resetGriglia(){
    grigliaElement.innerHTML = ''
    risultatoElement.innerHTML = ''
}

function generaGriglia(){
    for (let i = 1; i <= celleTotali; i++){
        let cella = i  
        console.log(cella)
    
        let divString = `<div class="celle" style="width:calc(100% / ${latoCelle})">${cella}</div>`
        // console.log(divString)
    
        grigliaElement.innerHTML += divString
    }
}