
import { koszykManager } from "../cart/KoszykManager";
import { button } from "../common/CustomButton";
import { today, maximumDate } from "../common/dateHandler";
import { RealizacjaZamowieniaDemo } from "./RealizacjaDemo";


const thisDate = today();
const maxDate = maximumDate();

export function koszyk() {

    const section = document.createElement('section');
    section.classList.add('koszyk');

    section.innerHTML = `
        <h2>Twój koszyk</h2>
    `;

    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('tr');
    tableHead.innerHTML = `
        <th>Zamawiasz</th>
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


        const removeFromCart = button('<i class="fa-sharp fa-solid fa-xmark"></i>', () => {
            koszykManager.removeItem(cartObject.item);

            const navigateEvent = new CustomEvent('navigate', {
                detail: koszyk
            });
        
            document.body.dispatchEvent(navigateEvent);
        })

        tr.lastElementChild.append(removeFromCart);

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

    const roomDateForm = document.createElement('form');

    roomDateForm.innerHTML = `
        <div>
            <label for="przyjazd" class="form-label">Data przyjazdu:</label>
            <input type="date" id="przyjazd" name="dataPrzyjazdu"
            value="${thisDate}"
            min="${thisDate}" max="${maxDate}" class="form-control">
        </div>
        <br/>
        <div>
            <label for="wyjazd" class="form-label">Data wyjazdu:</label>
            <input type="date" id="wyjazd" name="dataWyjazdu"
            value="${thisDate}"
            min="${thisDate}" max="${maxDate}" class="form-control">
        </div>
        
    `

    const realizacja = button('Realizuj zamówienie <i class="fa-sharp fa-solid fa-check"></i>',() => {

        const navigateEvent = new CustomEvent('navigate', {
            detail: RealizacjaZamowieniaDemo
        });
        document.body.dispatchEvent(navigateEvent);
    }, 'btn btn-success');
    



    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);
    section.append(roomDateForm);
    section.append(realizacja);

    return section;
}
