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