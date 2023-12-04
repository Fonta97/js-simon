const arrayRandom = [];

for (let i = 0; i < 5; i++) {
    randomNum = randomNumMM(1, 100);

    arrayRandom.push(randomNum);
}

const containerRandomSimon = document.querySelector(".simonOutput");

containerRandomSimon.innerHTML = arrayRandom;
setTimeout(simonedice, 5000);

/*********************************************************/
/*                      FUNZIONI                         */
/*********************************************************/

function simonedice() {
    containerRandomSimon.classList.add("hidden");

}

function randomNumMM(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
