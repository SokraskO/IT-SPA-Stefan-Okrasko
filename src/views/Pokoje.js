import { pokojItem } from "./PokojItem";

// DODAWANIE LISTY Z POKOJAMI DO WYBORU

export function Pokoje() {

    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Pokoje</h2>
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Wczytywanie listy pokojów...</span>
        </div>
    `;

    fetch('http://localhost:3000/rooms')
        .then(response => {
            return response.json()
        })
        .then(rooms => {
            const ul = document.createElement('ul');
            const roomsLi = rooms.map(room => pokojItem(room));
            ul.append(...roomsLi);
            section.querySelector('div').remove();
            section.append(ul);
        });

    return section;
};
