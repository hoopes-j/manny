//import second from './second/second'


function main() {

    console.log()

    injectAlert();

};

const max = 50;
var curNum = 10;

function generateRandom() {
    return Math.floor(Math.random() * max);
}

function injectAlert() {
    curNum += 10;
    const alertTemplate = `
    <div class="manfreid-alert" id="alert-${curNum}">
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
    newDiv.style.bottom = `${curNum}px`;
    newDiv.style.left = `${curNum/10 + 3}px`; 
    newDiv.innerHTML = alertTemplate;
    newDiv.querySelector('.manfreid-alert__header-button').addEventListener('click', () => {
        window.location.assign('https://golf.com/');
    })
    const buttons = newDiv.querySelectorAll('.manfreid-alert__button-accept');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
           injectAlert();
        })
    }
    const parent = document.getElementById('alertContainer');
    parent.append(newDiv);
}



main();


