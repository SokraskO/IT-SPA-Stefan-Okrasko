
import { opisPokoju } from "./PokojOpis";
import { button } from "../common/CustomButton";
import { koszykManager } from "../cart/KoszykManager";

// FUNKCJA GENERUJĄCA ELEMENT LI POKOJU

export function pokojItem(room) {
    const li = document.createElement('li');

    const buttonReadMore = button('Czytaj więcej...', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: () => opisPokoju(room.id)
        });

        document.body.dispatchEvent(navigateEvent);
    }, 'btn btn-secondary');

    const section = document.createElement('section');
    section.innerHTML = ``

    

    const addToCartButton = button('Do koszyka', () => {
        koszykManager.addItem(room);
    }, 'btn btn-success');


    li.innerHTML = `
        <h4>${room.name}</h4>
        <p>Cena: ${room.price.toFixed(2)} zł</p>
        <footer>
            
        </footer>
        `;

    li.querySelector('footer').append(buttonReadMore);
    li.querySelector('footer').append(addToCartButton);
    li.querySelector('footer').append(section);

    return li;

};
