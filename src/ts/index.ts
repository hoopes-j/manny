//import second from './second/second'


function main() {
    const sports: HTMLElement = document.querySelector('.sports');

    sports.addEventListener('click', () => {
        window.location.pathname = '/enter';
    })

};


// if (window.location.pathname = "") {
//     main();
// }

// if (window.location.pathname = "./folder/second.ts") {
//     second.main();
// }
