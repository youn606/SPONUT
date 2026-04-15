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
async function searchFood() {
    const query = document.getElementById("searchInput").value;

    if (!query) return;

    const res = await fetch("http://localhost:3000/api/food?q=" + query);
    const data = await res.json();

    displayResults(data.results || []);
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
                    <div class="exo-desc">
                        Donnée récupérée via API
                    </div>
                </div>
            </div>
        `;
    });
}