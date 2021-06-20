//import second from './second/second'


function main() {

    console.log()

    injectAlert();

};

const max = 50;
var curY = 10;
var curX = 1;

function generateRandom() {
    return Math.floor(Math.random() * max);
}
const windowTop: number = window.innerHeight;
const bottom = 0;
const windowRight: number = window.innerWidth;
const windowLeft = 0;
const right: number = 0;
const left: number = 1;
var directionX = right;

const up: number = 0;
const down: number = 1;
var directionY = up;

function injectAlert(flag?: number) {
    if (curY >= windowTop && directionY == up) directionY = down;
    else if (curY <= bottom && directionY == down) directionY = up;
    curY = directionY == up ? curY + 10 : curY - 10;

    if (curX >= windowRight && directionX == right) directionX = left;
    else if (curX <= windowLeft && directionX == left) directionX = right; 
    curX = directionX == right ? curX + 2 : curX - 2;
    
    const alertTemplate = `
    <div class="manfreid-alert">
        <div class="manfreid-alert__header">
            <h2 class="manfreid-alert__header-title">Warning</h2>
            <button class="manfreid-alert__header-button">X</button>
        </div>
        <div class="manfreid-alert__body">
            <div class="manfreid-alert__icon"></div>
            <div class="manfreid-alert__message">
                <img src="https://i.ibb.co/VB8ZBjp/computer.png">
                <div>
                    <p>Welcome to Manny World.</p>
                </div>
            </div>
            <div class="manfreid-alert__button-container">
                <button class="manfreid-alert__button-accept">Enter</button>        
                <button class="manfreid-alert__button-accept">Also Enter</button>
            </div>
        </div>
    </div>
    `;
    const newDiv = document.createElement('div');
    newDiv.className = 'floating-alert';
    newDiv.style.bottom = `${curY}px`;
    newDiv.style.left = `${curX}px`;
    newDiv.innerHTML = alertTemplate;
    newDiv.querySelector('.manfreid-alert__header-button').addEventListener('click', () => {
        window.location.assign('https://golf.com/');
    })
    const buttons = newDiv.querySelectorAll('.manfreid-alert__button-accept');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            move();
        })
    }
    const parent = document.getElementById('alertContainer');
    parent.append(newDiv);
}




function move() {
    let i = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (i == 1000) {
        clearInterval(id);
      } else {
        injectAlert();
        i++
      }
    }
}





main();


