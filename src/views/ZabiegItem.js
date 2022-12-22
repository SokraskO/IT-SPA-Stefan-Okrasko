import { koszykManager } from "../cart/KoszykManager";
import { button } from "../common/CustomButton";
import { zabiegOpis } from "./ZabiegOpis";


// FUNKCJA GENERUJĄCA ELEMENT LI ZABIEGU

export function zabiegItem(zabieg) {
    const li = document.createElement('li');

    const buttonReadMore = button('Czytaj więcej...', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: () => zabiegOpis(zabieg.id)
        });
        document.body.dispatchEvent(navigateEvent);
    }, 'btn btn-secondary');

    const addToCartButton = button('Do koszyka', () => {
        koszykManager.addItem(zabieg);
    }, 'btn btn-success');

    li.innerHTML = `
        <h4>${zabieg.name}</h4>
        <p>${zabieg.price.toFixed(2)} zł</p>
        <footer>
            
        </footer>
        `;

    li.querySelector('footer').append(buttonReadMore);
    li.querySelector('footer').append(addToCartButton);

    return li;

};
