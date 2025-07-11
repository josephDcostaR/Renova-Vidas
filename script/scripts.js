const form = document.getElementById('form-ajuda');
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-principal');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert('Obrigado! Em breve entraremos em contato!');
});

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});