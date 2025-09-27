// console.clear();
const types = ['elf', 'ninja', 'ogre', 'warrior', 'wizard'];
const names = ['Elara', 'Orion', 'Seraphina', 'Draven', 'Zephyr'];

// Walter, if you read this, the swordRain function i just grabbed the code, i didn't write it.  thought it looked cool
function swordRain() {
    const swords = ['⚔️','🗡️', '🥷', '🤺']; 
    for (let i = 0; i < 100; i++) {
      const span = document.createElement('span');
      span.className = 'emoji';
      span.textContent = swords[Math.floor(Math.random() * swords.length)];
      span.style.left = Math.random() * 100 + 'vw';      
      span.style.animationDuration = 2 + Math.random() * 3 + 's'; 
      document.body.appendChild(span);
  
      // remove after animation ends
      span.addEventListener('animationend', () => span.remove());
    }
  }
  
function getRandomNumberBetween(low, high){
    return Math.floor(low + Math.random() * (high - low +1));
}

const abilities = ['jump', 'crouch', 'magic', 'run', 'fly', 'sneak', 'swim'];
function getRandomAbility(){
    let randomAbility = Math.round(Math.random() * (abilities.length - 1));
    return abilities[randomAbility];
}

getRandomAbility();

function createCharacter(){
    return {
        type: types[getRandomNumberBetween(0, 4)],
        name: names[getRandomNumberBetween(0, 4)],
        age: getRandomNumberBetween(20, 50),
        health: getRandomNumberBetween(50, 100),
        hitPoints: getRandomNumberBetween(10, 20),
        defense: getRandomNumberBetween(5, 20),
        ability1: getRandomAbility(),
        ability2: getRandomAbility(),
        ability3: getRandomAbility(),
        ability4: getRandomAbility(),
        ability5: getRandomAbility()
    }
}

function displayCharacter(player, el){
    const playerEl = document.querySelector(el);
    let characterInfo = '';
    for(const property in player){
        characterInfo += `${property}: ${player[property]} <br>`;
    }
    playerEl.innerHTML = characterInfo;
}

let winner = document.querySelector('.winner');
let p1Health = document.querySelector('.p1-health');
let p2Health = document.querySelector('.p2-health');
let announceRound = document.querySelector('.round_announce');
let scoreTracker = document.querySelector('.score_tracker');

const player1 = createCharacter();
const player2 = createCharacter();

const startBattleButton = document.querySelector('.js-start-battle-button');

startBattleButton.addEventListener('click', function(){


    displayCharacter(player1, '.player1');
    displayCharacter(player2, '.player2');
})

const fight = document.querySelector('.fight-button');

let player1Counter = 0;
let player2Counter = 0;
let fightRoundCounter = 0;

function roundTracker(){
    if(fightRoundCounter === 0){
        announceRound.innerHTML = 'Round 1, Fight!';
    } else if (fightRoundCounter === 1){
        announceRound.innerHTML = 'Round 2, Fight!';
    } else if (fightRoundCounter === 3){
        announceRound.innerHTML = 'Round 3, Fight!';
    }
}

let gameOver = false;

fight.addEventListener('click', function(){
    if(gameOver) return;
    roundTracker();
    player1.hitPoints = getRandomNumberBetween(10, 20);
    player2.hitPoints = getRandomNumberBetween(10, 20);

    // this if and else counts and wins for player1
    if (player1.hitPoints > player2.hitPoints && player1Counter < 2){
        player1Counter ++;
        winner.innerHTML = 'player1 inflicts damage!  😁 🤺 🥷  Player1 wins the round!';
        scoreTracker.innerHTML = `Player1: <span style='color:red'>${player1Counter}</span>, Computer: <span style='color:red'>${player2Counter}</span>`;
    } else if(player1Counter === 2){
            winner.textContent = `You win! Congratulations!!! Game Over!`;
            swordRain();
            gameOver = true;
    }  else if(player2Counter < 2){
        player2Counter ++;
        winner.textContent = 'Computer inflicts damage!  🤖 😳 🤖';
        scoreTracker.innerHTML = `Player1: <span style='color:red'>${player1Counter}</span>, Computer: <span style='color:red'>${player2Counter}</span>`;
    } else if (player2Counter == 2){
        winner.textContent = `Computer wins! Game over!  😭`;
        gameOver = true;
    }
    fightRoundCounter ++;
    });

   

    