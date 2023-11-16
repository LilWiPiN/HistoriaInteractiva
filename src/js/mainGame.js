const showPopupBtn = document.getElementById('show-popup');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

let totalElements;

showPopupBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    showPopupBtn.style.display = 'none';

    localStorage.setItem("Princ_game_elements", (parseInt(localStorage.getItem("Princ_game_elements"),10)+1));
    totalElements = localStorage.getItem("Princ_game_elements");
    textToDisplay = `Llevas ${totalElements} objetos encontrados!!`
    document.getElementById("contElements").innerHTML = textToDisplay;
});

function closeVent() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

function nextWindow() {
    location.href = "Oficina_3.html"
}

function nextWindow2() {
    location.href = "TheEnd.html"
}

document.getElementById("close-btn").addEventListener("click", closeVent);