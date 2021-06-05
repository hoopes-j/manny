//import second from './second/second'
function main() {
    console.log();
    injectAlert();
}
;
var max = 50;
var curNum = 10;
function generateRandom() {
    return Math.floor(Math.random() * max);
}
function injectAlert() {
    curNum += 10;
    var alertTemplate = "\n    <div class=\"manfreid-alert\" id=\"alert-" + curNum + "\">\n        <div class=\"manfreid-alert__header\">\n            <h2 class=\"manfreid-alert__header-title\">Warning</h2>\n            <button class=\"manfreid-alert__header-button\">X</button>\n        </div>\n        <div class=\"manfreid-alert__body\">\n            <div class=\"manfreid-alert__icon\"></div>\n            <div class=\"manfreid-alert__message\">\n                <img src=\"https://i.ibb.co/VB8ZBjp/computer.png\">\n                <div>\n                    <p>Welcome to Manny World.</p>\n                </div>\n            </div>\n            <div class=\"manfreid-alert__button-container\">\n                <button class=\"manfreid-alert__button-accept\">Enter</button>        \n                <button class=\"manfreid-alert__button-accept\">Also Enter</button>\n            </div>\n        </div>\n    </div>\n    ";
    var newDiv = document.createElement('div');
    newDiv.className = 'floating-alert';
    newDiv.style.bottom = curNum + "px";
    newDiv.style.left = curNum / 10 + 3 + "px";
    newDiv.innerHTML = alertTemplate;
    newDiv.querySelector('.manfreid-alert__header-button').addEventListener('click', function () {
        window.location.assign('https://golf.com/');
    });
    var buttons = newDiv.querySelectorAll('.manfreid-alert__button-accept');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            injectAlert();
        });
    }
    var parent = document.getElementById('alertContainer');
    parent.append(newDiv);
}
main();
//# sourceMappingURL=index.js.map