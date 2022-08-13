import PainoBody from './components/PainoBody/PainoBody';
import './styles/style.css';

function test() {
    const container = document.querySelector('.container');
    container.innerHTML = 'dasdasdas';

    const paino = new PainoBody();
    paino.init();

    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'a') {
            paino.getKeyBoard('Do').play();
        } else if (e.key === 's') {
            paino.getKeyBoard('Re').play();
        }
    });
}

test();