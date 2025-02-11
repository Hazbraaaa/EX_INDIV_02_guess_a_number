function giveMeANumber() {
    return Number(prompt("Quel nombre à disparu BABOUCHE ?"));
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

function gamePlay() {
    let flag = false;
    let attempt = 1;
    let numToFind = whatToGuess();

    while (!flag && attempt <= 5) {
        alert(`Tentative n°${attempt}`);
        let givenNumber = giveMeANumber();
        let result = didIWin(givenNumber, numToFind);

        if (result) {
            flag = true;
            document.querySelector('#info').innerHTML = "Et c'est gagné, c'est gagné ! We did it ! Hourra !";
            document.querySelector('#attempt').innerHTML = `Il t'a fallu ${attempt} tentatives !`;
        }
        attempt++;
        if (attempt == 6 && !flag) {
            document.querySelector('#info').innerHTML = `Abandonne Nullos !`;
        }
    }
}

let play = document.querySelector('#play');
play.addEventListener("click", gamePlay);