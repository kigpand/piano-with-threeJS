import PainoBody from './components/PainoBody/PainoBody';

function test() {
    const container = document.querySelector('.container');
    container.innerHTML = 'dasdasdas';

    const paino = new PainoBody();
    paino.init();
}

test();