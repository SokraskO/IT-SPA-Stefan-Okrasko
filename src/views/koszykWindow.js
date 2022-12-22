import { koszykManager } from "../cart/KoszykManager";


// FUNKCJA KTÓRA TWÓRZY OKNO Z PODSUMOWANIEM KOSZYKA (nie została do końca dopracowana)

export function koszykWindow() {

    const section = document.createElement('section');
    section.classList.add('koszyk');
    section.classList.add('koszyk-window');
    section.classList.add('go-in');
    

    section.innerHTML = `
        <h2>Twój koszyk</h2>
    `;

    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('tr');
    tableHead.innerHTML = `
        <th>Chcesz zamówić</th>
        <th>Cena</th>
        <th>Ilość</th>
        <th></th>
    `;
    
    const tableRows = koszykManager.getAllItems().map(cartObject => {

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${cartObject.item.name}</td>
        <td>${cartObject.item.price.toFixed(2)} zł</td>
        <td>${cartObject.quantity}</td>
        <td></td>
        `

        return tr;

    });

    const tableFooter = document.createElement('tr');

    tableFooter.innerHTML = `
        <td></td>
        <td>
            <strong>${koszykManager.getTotal().toFixed(2)} zł</strong> 
        </td>
        <td></td>
        <td></td>
    `

    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);
    
    return section;

}

export function deleteKoszykWindow() {
    const sectionDelete = document.querySelector('.koszyk-window');
    sectionDelete.classList.remove('go-in');
    sectionDelete.classList.add('go-out');


        function removeIt() {
            sectionDelete.remove();
        };       
    setTimeout(removeIt, 1000);
}