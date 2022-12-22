import { button } from "../common/CustomButton";
import { Zabiegi } from "./Zabiegi";


// FUNKCJA GENERUJĄCA OPIS DODATKOWY ZABIEGU


export function zabiegOpis(zabiegId) {
    const section = document.createElement('section');
    section.classList.add('opis');
    section.innerHTML = `
        <header>Wczytywanie...</header>
        `;

    fetch(`http://localhost:3000/treatments/${zabiegId}`)
        .then(response => response.json())
        .then(zabieg => {
            const paragraph = document.createElement('div');
            paragraph.innerHTML = `
                <h4>${zabieg.name}</h4>
                <p><strong>Rejon ciała obsługiwany w zabiegu: </strong> ${zabieg.area}</p>
                <p><strong>Czas trwania zabiegu: </strong> ${zabieg.time} minut</p>
                <p><span style="max-width: 500px">${zabieg.description}</span></p>
                <p><strong>Cena: </strong> ${zabieg.price.toFixed(2)} zł</p>
                
            `;

            const goBackButton = button('⬅ do zabiegów', () => {
                    const navigateEvent = new CustomEvent('navigate', {
                        detail: Zabiegi
                    });
                    document.body.dispatchEvent(navigateEvent);
                }, 'btn btn-secondary')

            section.querySelector('header').remove();
            section.append(paragraph);
            section.append(goBackButton);

        });


    return section;

};