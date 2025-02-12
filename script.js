function giveNb() {
    return document.querySelector('#numberTried').value;
}

function whatToGuess() {
    let num = Number(prompt("Vole un nombre CHIPEUR ?"));

    while (num <= 0 || num >= 50) {
        alert("Entre 0 et 50, stp !");
        num = Number(prompt("Vole un nombre CHIPEUR ?"));
    }
    return num;
}

function didIWin(num1, num2) {
    if (num1 == num2) {
        return true;
    }
    else if (num1 < num2) {
        alert("C'est plus !");
    }
    else if (num1 > num2) {
        alert("C'est moins !");
    }
    return false;
}

function gamePlay(numToFind) {
    let givenNumber = giveNb();
    let result = didIWin(givenNumber, numToFind);
    if (result) {
        document.querySelector('#info').innerHTML = "ET C'EST GAGNE ! C'EST GAGNE, C'EST GAGNE ! WE DID IT ! HOURRA !";
    }
    return givenNumber;
}

let check = document.querySelector('#check');
let numToFind = whatToGuess();
let attempt = 1;
let min = 0;
let max = 50;
document.querySelector('#info').innerHTML = `Can you help me? Chipeur a volé un nombre entre ${min} et ${max}`;

check.addEventListener("click", () => {
    if (document.querySelector('#info').innerHTML != "ET C'EST GAGNE ! C'EST GAGNE, C'EST GAGNE ! WE DID IT ! HOURRA !") {
        document.querySelector('#attempt').innerHTML = `Vous avez fait  ${attempt} tentative(s)`;
        let result = gamePlay(numToFind);
        if (result <= min || result >= max) {
            alert("Sérieusement ? Regarde l'intervalle bon sang !");
            return; 
        }
        if (min < result && result < numToFind) {
            min = result;
            document.querySelector('#info').innerHTML = `Can you help me? Chipeur a volé un nombre entre ${min} et ${max}`;   
        }
        else if (numToFind < result && result < max) {
            max = result;
            document.querySelector('#info').innerHTML = `Can you help me? Chipeur a volé un nombre entre ${min} et ${max}`;   
        }
        attempt++;
    }
    else {
        alert("T'as gagné poto, recharge la page si tu veux rejouer !")
    }
}); 