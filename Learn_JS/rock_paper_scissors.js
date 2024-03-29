const playerChoise = 'Scissors';
let choises = ['Rock', 'Paper', 'Scissors'];
let randomIndex = Math.floor(Math.random() * choises.length);
let randomChoise = choises[randomIndex];

function gameEvaluation(playerChoise, randomChoise) {
    if (playerChoise === 'Rock' && randomChoise === 'Scissors') {
        return 'You have won!';
    } else if (playerChoise === 'Rock' && randomChoise === 'Paper') {
        return 'You lost :(';
    } else if (playerChoise === 'Paper' && randomChoise === 'Rock') {
        return 'You have won!';
    } else if (playerChoise === 'Paper' && randomChoise === 'Scissors') {
        return 'You lost :(';
    } else if (playerChoise === 'Scissors' && randomChoise === 'Paper') {
        return 'You have won!';
    } else if (playerChoise === 'Scissors' && randomChoise === 'Rock') {
        return 'You lost :(';
    } else {
        return 'Its a tie... Play again!'
    }
}

console.log(`YOU: ${playerChoise} vs CPU: ${randomChoise}`);
console.log(gameEvaluation(playerChoise, randomChoise));
