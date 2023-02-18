const images = ['./Images/Alexandria.jpg',
                './Images/Babylon.jpg',
                './Images/Ephesos.jpg',
                './Images/Giza.jpg',
                './Images/Halicarnassus.jpg',
                './Images/Olympia.jpg',
                './Images/Rhodes.jpg'
];

let names = [];
let count;

const numberOfPlayers = document.getElementById('number-of-players');
const playerNames = document.getElementById('player-names');
const draw = document.getElementById('draw');
const playerDraw = document.getElementById('player-draw');

function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let index = Math.floor(Math.random() * arr.length);
        
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
}

function removeElements(tag) {
    let lastChild = tag.lastChild;

    while (lastChild) {
        tag.removeChild(lastChild);
        lastChild = tag.lastChild;
    }
}

numberOfPlayers.addEventListener('change', () => {
    count = numberOfPlayers.value;
    
    removeElements(playerNames);
    removeElements(playerDraw);

    for (let i = 0; i < count; i++) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = 'Player ' + (i + 1) + ' ';
        const input = document.createElement('input');
        paragraph.appendChild(input);
        playerNames.appendChild(paragraph);
    }
});

draw.addEventListener('click', () => {
    removeElements(playerDraw);
    names = [];
    const inputs = playerNames.getElementsByTagName('input');

    for (let i = 0; i < count; i++) {
        names.push(inputs[i].value);
    }

    for (let i = 0; i < count; i++) {
        const th = document.createElement('th');
        th.innerHTML = names[i];
        playerDraw.appendChild(th);
    }
    shuffle(images);

    const tr = document.createElement('tr');
    for (let i = 0; i < count; i++) {
        const td = document.createElement('td');
        const img = document.createElement('img');
        img.src = images[i];
        td.appendChild(img);
        tr.appendChild(td);
        playerDraw.appendChild(tr);
    }
});