import { loadHomePage } from './homepage.js';
import { loadMenu } from './menu.js';
import { loadContactPage } from './contact.js';
import { loadReview } from './review.js';
import './styles.css';

// loadReview();
// loadContactPage();
// loadMenu();

const content = document.getElementById('content');
loadHomePage();

// Define colors for each tab without overriding --accent-pink
const tabColors = {
    home: '#ffff90',
    menu: '#fc6b4a',
    about: '#f5da28',
    reviews: '#f0a500',
    contact: '#9b5de5'
};

const navButtons = document.querySelectorAll('.nav-btn');
const logoBtn = document.querySelector('.logo-btn');

function setActiveTab(button, color) {
    navButtons.forEach((btn) => btn.classList.remove('active'));
    if (logoBtn && logoBtn !== button) {
        logoBtn.classList.remove('active');
    }
    button.classList.add('active');
    // Set a separate variable for the active tab color
    document.documentElement.style.setProperty('--active-tab-color', color);
}

function loadAbout() {
    content.textContent = "";
    const aboutSection = document.createElement('div');
    aboutSection.textContent = "About Page Content";
    content.appendChild(aboutSection);
}

function loadReviews() {
    content.textContent = "";
    const reviewsSection = document.createElement('div');
    reviewsSection.textContent = "Reviews Page Content";
    content.appendChild(reviewsSection);
}

if (logoBtn) {
    logoBtn.addEventListener('click', () => {
        content.textContent = "";
        loadHomePage();
        setActiveTab(logoBtn, tabColors.home);
    });
}

// Assuming order of navButtons is:
// 0: logo-btn (Home)
// 1: Menu
// 2: About
// 3: Reviews
// 4: Contact

navButtons[1].addEventListener('click', () => {
    content.textContent = "";
    loadMenu();
    setActiveTab(navButtons[1], tabColors.menu);
});

navButtons[2].addEventListener('click', () => {
    content.textContent = "";
    loadAbout();
    setActiveTab(navButtons[2], tabColors.about);
});

navButtons[3].addEventListener('click', () => {
    content.textContent = "";
    loadReview();
    setActiveTab(navButtons[3], tabColors.reviews);
});

navButtons[4].addEventListener('click', () => {
    content.textContent = "";
    loadContactPage();
    setActiveTab(navButtons[4], tabColors.contact);
});
