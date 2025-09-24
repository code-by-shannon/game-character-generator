// console.clear();
const types = ['elf', 'ninja', 'ogre', 'warrior', 'wizard'];
const names = ['Elara', 'Orion', 'Seraphina', 'Draven', 'Zephyr'];

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

// const player1El = document.querySelector('.player1');
// console.log(player1);

// player1El.innerHTML = '<strong>hello</strong>'

function displayCharacter(player, el){
    const playerEl = document.querySelector(el);
    let characterInfo = '';
    for(const property in player){
        characterInfo += `${property}: ${player[property]} <br>`;
    }
    playerEl.innerHTML = characterInfo;
}



const startBattleButton = document.querySelector('.js-start-battle-button');

startBattleButton.addEventListener('click', function(){
    const player1 = createCharacter();
    const player2 = createCharacter();

    displayCharacter(player1, '.player1');
    displayCharacter(player2, '.player2');

    if (player1.hitPoints > player2.hitPoints){
        console.log('player1 wins!')
    } else {
        console.log('player2.wins');
    }
})

