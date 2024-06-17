//gestisco il click per iniziare il gioco
const start = document.getElementById("start");
start.addEventListener("click",
    function(){
        start.classList.add("none")
        let numeri = sequenzaNumeriRandom(1, 100, 5);
        console.log(numeri);
    }

)


// Visualizzare in pagina 5 numeri casuali.


// Da lì parte un timer di 30 secondi.


// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.






///////////FUNZIONI//////////

// funzione sequenza numeri random
function sequenzaNumeriRandom(min, max, quantita){

    const array = [];

    while(array.length < quantita){

        // genero numero random da 1 a 16 usando la funzione
        let newRandom = numRandom(min, max);
        if (!array.includes(newRandom)) {
            array.push(newRandom);
        }
    }    
    return array
}

// funzione genera numero ramndom
function numRandom(min, max) {
    return parseInt(Math.floor(Math.random() * (1 + max - min)) + min);
}