const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');

const maxRound = document.querySelector('#maxRd');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btnR = document.querySelector('#btnR');

let p1Score = 0;
let p2Score = 0;
let max = 1;
let isGameOver = false;

maxRound.addEventListener('change', function(e) {
    max = this.value;
    reset();
})

btn1.addEventListener('click', function(e) {
    if (!isGameOver) {
        p1Score++
        p1.innerText = p1Score;
        if (p1Score == max) {
            p1.classList.add('winner');
            p2.classList.add('loser');
            btn1.disabled = true;
            btn2.disabled = true;
            isGameOver = true;
        }
    }
});

btn2.addEventListener('click', function(e) {
    if (!isGameOver) {
        p2Score++
        p2.innerText = p2Score;
        if (p2Score == max) {
            p2.classList.add('winner');
            p1.classList.add('loser');
            btn1.disabled = true;
            btn2.disabled = true;
            isGameOver = true;
        }
    }
});

btnR.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1.innerText = 0;
    p2.innerText = 0;
    btn1.disabled = false;
    btn2.disabled = false;
    p1.classList.remove('winner','loser');
    p2.classList.remove('winner','loser');
}