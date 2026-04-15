const menuBtn = document.getElementById('menuBtn')
const dropdown = document.getElementById('dropdown')

menuBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    dropdown.classList.toggle('open')
})

document.addEventListener('click', function () {
    dropdown.classList.remove('open')
})

const dayCards = document.querySelectorAll('.day-card')

dayCards.forEach(function(card) {
    card.addEventListener('click', function() {
        dayCards.forEach(function(c) {
            c.classList.remove('active')
        })
        card.classList.add('active')
    })
})
const API_KEY = "TA_CLE_API_ICI"; // Spoonacular

async function searchFood() {
    const query = document.getElementById("searchInput").value;

    if (!query) return;

    try {
        const response = await fetch(
            `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${API_KEY}`
        );

        const data = await response.json();

        displayResults(data.results);

    } catch (error) {
        console.error("Erreur API :", error);
    }
}

function displayResults(results) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    results.forEach(item => {
        container.innerHTML += `
            <div class="exo-card">
                <div class="exo-visual">🍎</div>
                <div class="exo-body">
                    <div class="exo-name">${item.name}</div>
                    <div class="exo-desc">Aliment trouvé via API nutrition</div>
                </div>
            </div>
        `;
    });
}