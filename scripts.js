let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    updateDots();
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function goToSlide(index) {
    showSlide(index);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
}

function showDetails(car) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    modalDescription.innerHTML = '';
    modalDescription.style.textAlign = 'left';
    const modalImage = document.createElement('img'); // Додаємо елемент зображення
    modalImage.style.width = '100%'; // Встановлюємо ширину зображення
    modalImage.style.borderRadius = '8px'; // Додаємо закруглення країв зображення
    modalImage.style.marginBottom = '15px'; // Відступ знизу

    if (car === 'bmw-x5') {
        modalTitle.textContent = "BMW X5";
        modalDescription.innerHTML = `
            <p>BMW X5 - це розкішний позашляховик 2022 року з потужним двигуном, сучасними технологіями та комфортним салоном. 
            Він оснащений системами безпеки, такими як автоматичне екстрене гальмування та адаптивний круїз-контроль. 
            <strong></br>Технічні характеристики:</strong></p>
            <ul>
                <li>Двигун: 3.0L I6 Turbo</li>
                <li>Потужність: 335 к.с.</li>
                <li>Крутний момент: 447 Нм</li>
                <li>Розгін 0-100 км/год: 5.3 сек</li>
                <li>Трансмісія: 8-ступенева автоматична</li>
                <li>Привід: Повний (AWD)</li>
                <li>Об'єм багажника: 650 літрів</li>
                <li>Середня витрата пального: 10.7 л/100 км</li>
            </ul>
        `;
        modalImage.src = "images/bmwx5.jpg"; 
    } else if (car === 'audi-a6') {
        modalTitle.textContent = "Audi A6";
        modalDescription.innerHTML = `
            <p>Audi A6 - це елегантний седан 2021 року, що пропонує комфорт, економічність та передові технології. 
            <strong></br>Технічні характеристики:</strong></p>
            <ul>
                <li>Двигун: 2.0L I4 Turbo</li>
                <li>Потужність: 248 к.с.</li>
                <li>Крутний момент: 370 Нм</li>
                <li>Розгін 0-100 км/год: 6.1 сек</li>
                <li>Трансмісія: 7-ступенева автоматична (S tronic)</li>
                <li>Привід: Передній / Повний (quattro)</li>
                <li>Об'єм багажника: 530 літрів</li>
                <li>Середня витрата пального: 8.4 л/100 км</li>
            </ul>
        `;
        modalImage.src = "images/a6.jpg"; 
    } else if (car === 'mercedes-gla') {
        modalTitle.textContent = "Mercedes GLA";
        modalDescription.innerHTML = `
            <p1>Mercedes GLA - це компактний кросовер 2023 року, ідеальний для міських подорожей і має розкішний інтер’єр. 
            <strong></br>Технічні характеристики:</strong></p1>
            <ul>
                <li>Двигун: 2.0L I4 Turbo</li>
                <li>Потужність: 221 к.с.</li>
                <li>Крутний момент: 350 Нм</li>
                <li>Розгін 0-100 км/год: 5.8 сек</li>
                <li>Трансмісія: 8-ступенева автоматична</li>
                <li>Привід: Повний (4MATIC)</li>
                <li>Об'єм багажника: 435 літрів</li>
                <li>Середня витрата пального: 7.5 л/100 км</li>
            </ul>
        `;
        modalImage.src = "images/gla.jpg"; 
    }

    const modalContent = document.querySelector('.modal-content');
    modalContent.appendChild(modalImage); 
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    modalContent.removeChild(modalContent.querySelector('img')); 
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

setInterval(showNextSlide, 5000);

const menuToggle = document.getElementById("menu-toggle");
const slideMenu = document.getElementById("slide-menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
    slideMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
    slideMenu.classList.remove("show");
});
