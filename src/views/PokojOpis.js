import { Pokoje } from "./Pokoje";
import { button } from "../common/CustomButton";


// FUNKCJA GENERUJĄCA OPIS DODATKOWY POKOJU


export function opisPokoju(roomId) {
    const section = document.createElement('section');
    section.classList.add('opis');
    section.innerHTML = `
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Wczytywanie opisu pokoju...</span>
        </div>
        `;

    fetch(`http://localhost:3000/rooms/${roomId}`)
        .then(response => response.json())
        .then(room => {
            const paragraph = document.createElement('div');
            paragraph.innerHTML = `
                    <h4>${room.name}</h4>
                    <p><strong>Ilość łóżek: </strong> ${room.beds}</p>
                    <p><strong>Dla ilu gości: </strong> ${room.guests}</p>
                    <p><span style="max-width: 500px">${room.description}</span></p>
                    <p><strong>Cena: </strong> ${room.price.toFixed(2)} zł</p>
            `;

            const goBackButton = button('⬅ do pokojów', () => {
                    const navigateEvent = new CustomEvent('navigate', {
                        detail: Pokoje
                    });
                    document.body.dispatchEvent(navigateEvent);
                }, 'btn btn-secondary')

            section.querySelector('div').remove();
            section.append(paragraph);
            section.append(goBackButton);

        });


    return section;

};