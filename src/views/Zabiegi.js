import { zabiegItem } from "./ZabiegItem";

// DODAWANIE LISTY Z ZABIEGAMI DO WYBORU

export function Zabiegi() {

    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Zabiegi</h2>
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Wczytywanie listy zabiegów...</span>
        </div>
    `;

    fetch('http://localhost:3000/treatments')
        .then(response => {
            return response.json()
        })
        .then(zabiegi => {
            const ul = document.createElement('ul');
            const zabiegiLi = zabiegi.map(zabieg => zabiegItem(zabieg));  // dodać funckje zabiegItem()
            ul.append(...zabiegiLi);
            section.querySelector('div').remove();
            section.append(ul);
        });

    return section;
};
