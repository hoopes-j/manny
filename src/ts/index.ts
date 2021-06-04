
function main() {
    const sports: HTMLElement = document.querySelector('.sports');

    sports.addEventListener('click', () => {
        window.location.pathname = '/enter';
    })

}

main();