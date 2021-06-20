//import second from './second/second'
function main() {
    console.log();
    injectAlert();
}
;
var max = 50;
var curY = 10;
var curX = 1;
function generateRandom() {
    return Math.floor(Math.random() * max);
}
var windowTop = window.innerHeight;
var bottom = 0;
var windowRight = window.innerWidth;
var windowLeft = 0;
var right = 0;
var left = 1;
var directionX = right;
var up = 0;
var down = 1;
var directionY = up;
function injectAlert(flag) {
    if (curY >= windowTop && directionY == up)
        directionY = down;
    else if (curY <= bottom && directionY == down)
        directionY = up;
    curY = directionY == up ? curY + 10 : curY - 10;
    if (curX >= windowRight && directionX == right)
        directionX = left;
    else if (curX <= windowLeft && directionX == left)
        directionX = right;
    curX = directionX == right ? curX + 2 : curX - 2;
    var alertTemplate = "\n    <div class=\"manfreid-alert\">\n        <div class=\"manfreid-alert__header\">\n            <h2 class=\"manfreid-alert__header-title\">Warning</h2>\n            <button class=\"manfreid-alert__header-button\">X</button>\n        </div>\n        <div class=\"manfreid-alert__body\">\n            <div class=\"manfreid-alert__icon\"></div>\n            <div class=\"manfreid-alert__message\">\n                <img src=\"https://i.ibb.co/VB8ZBjp/computer.png\">\n                <div>\n                    <p>Welcome to Manny World.</p>\n                </div>\n            </div>\n            <div class=\"manfreid-alert__button-container\">\n                <button class=\"manfreid-alert__button-accept\">Enter</button>        \n                <button class=\"manfreid-alert__button-accept\">Also Enter</button>\n            </div>\n        </div>\n    </div>\n    ";
    var newDiv = document.createElement('div');
    newDiv.className = 'floating-alert';
    newDiv.style.bottom = curY + "px";
    newDiv.style.left = curX + "px";
    newDiv.innerHTML = alertTemplate;
    newDiv.querySelector('.manfreid-alert__header-button').addEventListener('click', function () {
        window.location.assign('https://golf.com/');
    });
    var buttons = newDiv.querySelectorAll('.manfreid-alert__button-accept');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            move();
        });
    }
    var parent = document.getElementById('alertContainer');
    parent.append(newDiv);
}
function move() {
    var i = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (i == 1000) {
            clearInterval(id);
        }
        else {
            injectAlert();
            i++;
        }
    }
}
main();
//# sourceMappingURL=index.js.map