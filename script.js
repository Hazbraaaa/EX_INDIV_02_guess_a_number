function whatToGuess() {
    let num = Number(prompt("Vole un nombre CHIPEUR ?"));

    while (num <= 0 || num >= 50) {
        alert("Entre 0 et 50, stp !");
        num = Number(prompt("Vole un nombre CHIPEUR ?"));
    }
    return num;
}

function didIWin() {
    if (givenNumber.value == numToFind) {
        alert("Bravo BABOUCHE !")
        document.querySelector('#info').innerHTML = "ET C'EST GAGNE ! C'EST GAGNE, C'EST GAGNE ! WE DID IT ! HOURRA !";
    }
    else if (numToFind > givenNumber.value) {
        alert("C'est plus !");
    }
    else if (numToFind < givenNumber.value) {
        alert("C'est moins !");
    }
}

function adjustInter() {
    if (givenNumber.value <= min || givenNumber.value >= max) {
        alert("Sérieusement ? Regarde l'intervalle bon sang !");
        return; 
    }
    else if (min < givenNumber.value && givenNumber.value < numToFind) {
        min = givenNumber.value;
        message.innerHTML = `Can you help me? Chipeur a volé un nombre entre ${min} et ${max}`; 
    }
    else if (numToFind < givenNumber.value && givenNumber.value < max) {
        max = givenNumber.value;
        message.innerHTML = `Can you help me? Chipeur a volé un nombre entre ${min} et ${max}`;
    }
}

function calculateAttempt() {
    msgAttempt.innerText = `Vous avez fait ${attempt} tentative(s)`;
    attempt++;
}

function gamePlay() {
    if (message.innerHTML != "ET C'EST GAGNE ! C'EST GAGNE, C'EST GAGNE ! WE DID IT ! HOURRA !") {
        didIWin();
        adjustInter();
        calculateAttempt();
    }
    else {
        alert("T'as gagné poto, recharge la page si tu veux rejouer !");
    }
}

let check = document.querySelector('#check');
let numToFind = whatToGuess();
let givenNumber = document.querySelector('#numberTried');
let attempt = 1;
let min = 0;
let max = 50;
let message = document.querySelector('#info');
let msgAttempt = document.querySelector('#attempt');

message.innerHTML = `Can you help me? Chipeur a volé un nombre entre ${min} et ${max}`;
check.addEventListener("click", gamePlay); 