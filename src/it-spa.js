import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './it-spa.scss';

import { Home } from './views/Home';
import { Nav } from './navigation/Nav';

const main = document.querySelector('main');

main.before(Nav());
main.append(Home());




document.body.addEventListener('navigate', (event) => {
    
    const {detail: Component} = event;
    //console.log(Component);
    
    main.innerHTML = '';
    main.append(Component());

});

document.body.addEventListener('spawnWindow', (event) => {
    const {detail: customWindow} = event;

    main.append(customWindow());
});

document.body.addEventListener('deleteWindow', (event) => {
    const {detail: customDeleteWindow} = event;

    //setTimeout(customDeleteWindow, 500);
    customDeleteWindow();
});

const lastButton = document.querySelector('nav').lastElementChild
lastButton.classList.add('koszyk-nav');