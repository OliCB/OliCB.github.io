document.addEventListener('DOMContentLoaded', onInit);

async function onInit() {
    const scores = await fetch('data.json').then(data => data.json());
    const rowContainer = document.querySelector('.results__summary-rows');
    const colors = [
        'results--red', 
        'results--yellow', 
        'results--green', 
        'results--blue', 
    ];

    rowContainer.innerHTML = scores.map((s, i) =>  `
        <div class="results__summary-row ${colors[i % colors.length]}">
            <div class="results__summary-category">
                <img src="${s.icon}" alt="">
                ${s.category}
            </div>
            <div class="results__summary-score">
                <span class="results__summary-score--hl">${s.score}</span> / 100
            </div>
        </div>   
    `).join('');
}