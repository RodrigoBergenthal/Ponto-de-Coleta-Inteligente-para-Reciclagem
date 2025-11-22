// script.js

// Função para carrossel de imagens
let slideIndex = 0;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n-1);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (slides && dots) {
        if (slideIndex >= slides.length) {slideIndex = 0}
        if (slideIndex < 0) {slideIndex = slides.length - 1}

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (slides[slideIndex]) {
            slides[slideIndex].classList.add("active");
        }

        if (dots[slideIndex]) {
            dots[slideIndex].className += " active";
        }
    }
}

// Alternar automaticamente os slides a cada 5 segundos
if (document.querySelector('.carousel')) {
    setInterval(() => {
        showSlides(slideIndex += 1);
    }, 5000);
}

// Função para o botão "Saiba Mais"
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('Obrigado pelo interesse! Em breve, mais informações sobre como participar do programa de pontos.');
});

// Função para busca em itens válidos
function searchItems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const itemCards = document.querySelectorAll('.item-card');

    itemCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função para filtrar prêmios
function filterRewards(category) {
    const allCards = document.querySelectorAll('.reward-card');

    // Atualizar botões de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Filtrar cartões
    if (category === 'all') {
        allCards.forEach(card => {
            card.style.display = 'flex';
        });
    } else {
        allCards.forEach(card => {
            const pointsValue = card.querySelector('.points-value').textContent.toLowerCase();
            if (pointsValue.includes(category)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Função para busca de prêmios
function searchRewards() {
    const searchTerm = document.getElementById('rewardSearchInput').value.toLowerCase();
    const rewardCards = document.querySelectorAll('.reward-card');

    rewardCards.forEach(card => {
        const title = card.querySelector('.item-title').textContent.toLowerCase();
        const description = card.querySelector('.item-description').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Inicializar filtros e busca se a página for ganhe-premios.html
if (window.location.pathname.includes('ganhe-premios.html')) {
    // Adiciona evento para o botão de busca
    const searchBtn = document.querySelector('.search-container button');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchRewards);
    }

    // Adiciona evento para Enter na busca
    const searchInput = document.getElementById('rewardSearchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                searchRewards();
            }
        });
    }
}

// Inicializar busca em itens válidos se a página for itens-validos.html
if (window.location.pathname.includes('itens-validos.html')) {
    const searchBtn = document.querySelector('.search-container button');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchItems);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                searchItems();
            }
        });
    }
}

// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Aqui você poderia adicionar código para enviar o formulário
            alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
});

// Função para alternar slides no carrossel (chamada do HTML)
window.moveSlide = moveSlide;
window.currentSlide = currentSlide;