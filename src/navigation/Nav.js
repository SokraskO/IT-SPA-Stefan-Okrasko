
import { Home } from "../views/Home";
import { Pokoje } from "../views/Pokoje";
import { Zabiegi } from "../views/Zabiegi";
import { koszyk } from "../views/Koszyk";
import { koszykWindow, deleteKoszykWindow } from "../views/koszykWindow";


const navItems = [
    {name: 'FUTURE IT SPA', component: Home},
    {name: 'Pokoje', component: Pokoje},
    {name: 'Zabiegi', component: Zabiegi},
    {name: `<i class="fa-sharp fa-solid fa-cart-shopping"></i>`, component: koszyk}
];


export function Nav() {

    const nav = document.createElement('nav');
    nav.classList.add('sticky-top');


    const navButtons = navItems.map(navItem => {
        const navButton = document.createElement('button');
        navButton.setAttribute('type', 'button');
        navButton.innerHTML = navItem.name;

        navButton.addEventListener('click', () => {
            const navigateEvent = new CustomEvent('navigate', {
                detail: navItem.component
            });
            document.body.dispatchEvent(navigateEvent);
        });
        return navButton;
    });

    const koszykButton = navButtons[navButtons.length-1];
    koszykButton.addEventListener('mouseenter', () => {
        const spawnWindowEvent = new CustomEvent('spawnWindow', {
            detail: koszykWindow
        });
        document.body.dispatchEvent(spawnWindowEvent);
    });
    koszykButton.addEventListener('mouseleave', () => {
        const deleteWindowEvent = new CustomEvent('deleteWindow', {
            detail: deleteKoszykWindow
        });
        document.body.dispatchEvent(deleteWindowEvent);
    });



    nav.append(...navButtons);
    
    return nav;
}

