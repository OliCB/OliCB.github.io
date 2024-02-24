const [firstStep, lastStep] = document.querySelectorAll('.step');
const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit'); 
const scoreBox = document.querySelector('.score-box > span');
let selectedRating = null;

lastStep.classList.add('hidden');

ratings.forEach((r, i) => r.addEventListener('click', () => {
    selectedRating = i + 1;
    ratings.forEach((t, o) => {
        if (o == i) t.classList.add('selected');
        else t.classList.remove('selected');
    });
    scoreBox.innerHTML = selectedRating;
}));

submit.addEventListener('click', () => {
    if (selectedRating === null) return;
    firstStep.classList.add('hidden');
    lastStep.classList.remove('hidden');
});