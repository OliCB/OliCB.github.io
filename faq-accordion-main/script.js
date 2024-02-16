document.querySelectorAll('.row').forEach(r => {
    r.addEventListener('click', toggleRow);
});

function toggleRow() {
    const rowBody = this.querySelector('.card__row-text');
    const img = this.querySelector('img');
    const opened = rowBody.dataset.opened == "true";

    if (!opened) {
        rowBody.style.maxHeight = `${rowBody.scrollHeight}px`;
        rowBody.classList.add('card__row-text--active');
        img.src = 'assets/images/icon-minus.svg';
        rowBody.dataset.opened = "true";
    }
    else {
        rowBody.style.maxHeight = null;
        rowBody.classList.remove('card__row-text--active');
        img.src = 'assets/images/icon-plus.svg';
        rowBody.dataset.opened = "false";
    }
}