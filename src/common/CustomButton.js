


export function button(text, onClick, className) {

    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.innerHTML = text;
    button.addEventListener('click', onClick);

    return button;
};