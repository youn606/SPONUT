const menuBtn = document.getElementById('menuBtn')
const dropdown = document.getElementById('dropdown')
menuBtn.addEventListener('click', function(e) { 
    e.stopPropagation()
    dropdown.classList.toggle('open')
})
document.addEventListener('click', function() {
    dropdown.classList.remove('open')
})