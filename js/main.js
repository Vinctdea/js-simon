const secondi = document.getElementById("secondi");
const timer = document.getElementById("timer");
const visualizza = document.getElementById("visualizza");
let conteggio;
const arrayInput = [];
const inputUser = document.getElementById("input");
const form =  document.querySelector("form");
const inviaNum = document.getElementById("invia_num");



//gestisco il click per iniziare il gioco
const start = document.getElementById("start");
start.addEventListener("click",
    function(){
        start.classList.add("none")
        secondi.classList.remove("none");
        let numeri = sequenzaNumeriRandom(1, 100, 5);
        console.log(numeri);

         //   Visualizzare in pagina 5 numeri casuali. 
        visualizza.innerText ="questi sono i numeri : "+ numeri ;  
    }
  ,startTimer(5),
);


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

//funzione timer
function startTimer (nSec){
    let sec = nSec;
    conteggio = setInterval(
            function(){
                sec--;
                timer.innerText = sec;
                if(sec===0){
                    clearInterval(conteggio)
                    secondi.classList.add("none");
                    visualizza.classList.add("none");
                    inputUser.classList.remove("none");
                    inviaNum.classList.remove("none");

                    let contoClick=0
                    // gestisco click per inviare dati
                    inviaNum.addEventListener("click",
                        function(){//al click inserisco i dati nell'array 
                           
                            contoClick++;
                            if(contoClick===0){
                                inputUser.setAttribute("placeholder",  "inserisci il primo numero")
                            }else if(contoClick===1){
                                inputUser.setAttribute("placeholder"," inserisci il secondo numero")
                            }else if(contoClick===2){
                                inputUser.setAttribute("placeholder", "inserisci il terzo numero")

                            }else if(contoClick===3){
                                inputUser.setAttribute("placeholder", "inserisci il quarto numero")
                            }else if(contoClick===4){
                                inputUser.setAttribute("placeholder", "inserisci il quinto numero")

                            }

                            let valoreInput=inputUser.value;
                            arrayInput.push(valoreInput);
                            inputUser.value= "";
                            if (arrayInput.length===5){
                                inputUser.classList.add("none");
                                inviaNum.classList.add("none");
                                console.log(arrayInput);
                                console.log(contoClick);
                            }                              
      
                        }

                    )

                }
            }, 1000);
    
}


