
//definisco le variabili globali
const secondi = document.getElementById("secondi");
const timer = document.getElementById("timer");
const visualizza = document.getElementById("visualizza");
let conteggio;
const arrayInput = [];
const inputUser = document.getElementById("input");
const form =  document.querySelector("form");
const inviaNum = document.getElementById("invia_num");
const output = document.getElementById("output");
let numeri;

//gestisco il click per iniziare il gioco
const start = document.getElementById("start");
start.addEventListener("click",
    function(){
        start.classList.add("none")
        secondi.classList.remove("none");
        numeri = sequenzaNumeriRandom(1, 100, 5);
        console.log(numeri);

         //   Visualizzare in pagina 5 numeri casuali. 
        visualizza.innerText ="questi sono i numeri : "+ numeri ;  
    }
  ,startTimer(5),
);

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
                    clearInterval(conteggio);
                    secondi.classList.add("none");
                    visualizza.classList.add("none");
                    inputUser.classList.remove("none");
                    inviaNum.classList.remove("none");

                    let contoClick = 0;
                    
                    // gestisco click per inviare dati
                    inviaNum.addEventListener("click",
                        function(){//al click inserisco i dati nell'array 
                            
                           //setto il placeholder in base al n di click
                            contoClick++;
                            if(contoClick===0){
                                inputUser.setAttribute("placeholder","inserisci il primo numero")
                            }else if(contoClick===1){
                                inputUser.setAttribute("placeholder","inserisci il secondo numero")
                            }else if(contoClick===2){
                                inputUser.setAttribute("placeholder","inserisci il terzo numero")

                            }else if(contoClick===3){
                                inputUser.setAttribute("placeholder","inserisci il quarto numero")
                            }else if(contoClick===4){
                                inputUser.setAttribute("placeholder","inserisci il quinto numero")

                            }

                            //inserisco il valore nell'array
                            let valoreInput = parseInt(inputUser.value);
                            arrayInput.push(valoreInput);
                            
                                                    
                            
                            
                            if (arrayInput.length===5){
                                inputUser.classList.add("none");
                                inviaNum.classList.add("none");
                                console.log(arrayInput);
                                console.log(contoClick);
                                //stampo l'output
                                output.classList.remove("none");

                                // confronto array
                                for (let index = 0; index < arrayInput.length; index++) {
                                    const element = arrayInput[index];
                                    console.log(element); 
                                    if(numeri.includes(element)){
                                        output.innerHTML = `<h2> complimenti hai trovato ${index} numeri </h2>`
                                    } else{
                                         output.innerHTML = `<h2> non hai trovato  numeri </h2>`
                                    } 
                                }
                                
                                     

                            } 

                            

                                  
                        }

                    )

                }
            }, 1000);
    
}





