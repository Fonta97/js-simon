// generazione numeri random
const arrayRandom = [];

for (let i = 0; i < 5; i++) {
    randomNum = randomNumMM(1, 100);

    arrayRandom.push(randomNum);
}

// seleziono output nel document html dei numeri random che ci dice simone
const containerRandomSimon = document.querySelector(".simonOutput");

containerRandomSimon.innerHTML = "simone dice" + arrayRandom;

// delay numeri timeout numeri
setTimeout(hideNumbers, 2500);
// delay esecuzione funzione simone dice (non può essere uguale come tempo di timeout alla funzione hideNumbers se uso il prompt)
setTimeout(simonedice, 5000);


/*********************************************************/
/*                      FUNZIONI                         */
/*********************************************************/

function hideNumbers() {
    containerRandomSimon.classList.add("hidden");
}

// funzione gioco simone dice con scomparsa dallo schermo
function simonedice() {

    const arrayUserNum = [];

    // prompt con push nell'array dei numeri detti dall'utente
    for (let i = 0; i < 5; i++) {
        userNum = parseInt(prompt("Ti ricordi i numeri? Inseriscili!"));
        arrayUserNum.push(userNum);
    }

    // array numeri indovinati
    const arrayCorrectNum = [];

    // array numeri errati
    const arrayMissedNum = [];

    // controllo dei numeri arrayuser con quelli dell'array random  
    for (let i = 0; i < 5; i++) {
        if (arrayUserNum.includes(arrayRandom[i])) {
            arrayCorrectNum.push(arrayRandom[i]);
        } else {
            arrayMissedNum.push(arrayRandom[i]);
        }
    }

    // controllo per stampare messaggio di vittoria o sconfitta con insieme quali numeri ha sbagliato l'utente
    if (arrayMissedNum.length >= 1) {
        console.log("hai perso, mancavano i numeri: ", arrayMissedNum);
    } else {
        console.log("hai vinto bomber!, hai la memoria di un elefante!");
    }
}


// funzione random numero compreso tra min e max
function randomNumMM(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
