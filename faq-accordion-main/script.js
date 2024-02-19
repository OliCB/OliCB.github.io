document.querySelectorAll('.row').forEach(r => {
    r.addEventListener('click', toggleRow);
    r.setAttribute('tabindex', 0);
    r.addEventListener('keydown', e => {
        if (e.keyCode === 13) 
            toggleRow(e);
    });
});

function toggleRow(e) {
    const rowBody = e.target.querySelector('.card__row-text-container');
    const img = e.target.querySelector('img');
    const opened = rowBody.dataset.opened == "true";

    if (!opened) {
        rowBody.style.maxHeight = `${rowBody.scrollHeight}px`;
        img.src = 'assets/images/icon-minus.svg';
        rowBody.dataset.opened = "true";
    }
    else {
        rowBody.style.maxHeight = null;

        img.src = 'assets/images/icon-plus.svg';
        rowBody.dataset.opened = "false";
    }
}