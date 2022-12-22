
// FUNKCJA REALIZUJĄCA DEMO STRONĘ WCZYTYWANIA REALIZACJI ZAMÓWIENIA

export function RealizacjaZamowieniaDemo() {

    const section = document.createElement('section');
    section.classList.add('demo');
    section.innerHTML = `
        <h2>Przetwarzamy Twoje zamówienie...</h2>
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">To może chwilę potrwać</span>
        </div>
    `;

    return section;
}