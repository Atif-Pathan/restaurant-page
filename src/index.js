import { loadHomePage } from './homepage.js';
import { loadMenu } from './menu.js';
import './styles.css';

// const content = document.getElementById('content');

// // Initial load
// loadHomePage();

// // Select all nav buttons
// const navButtons = document.querySelectorAll('.nav-btn');

// // Utility function to handle active class
// function setActiveTab(button) {
//     navButtons.forEach((btn) => btn.classList.remove('active')); // Remove active class from all buttons
//     button.classList.add('active'); // Add active class to the clicked button
// }

// // Placeholder functions for tabs not yet implemented
// function loadAbout() {
//     content.textContent = "";
//     const aboutSection = document.createElement('div');
//     aboutSection.textContent = "About Page Content";
//     content.appendChild(aboutSection);
// }

// function loadReviews() {
//     content.textContent = "";
//     const reviewsSection = document.createElement('div');
//     reviewsSection.textContent = "Reviews Page Content";
//     content.appendChild(reviewsSection);
// }

// function loadContact() {
//     content.textContent = "";
//     const contactSection = document.createElement('div');
//     contactSection.textContent = "Contact Page Content";
//     content.appendChild(contactSection);
// }

// // Event listeners
// document.querySelector('.logo-btn').addEventListener('click', () => {
//     content.textContent = "";
//     loadHomePage();
//     setActiveTab(document.querySelector('.logo-btn'));
// });

// navButtons[1].addEventListener('click', () => {
//     content.textContent = "";
//     loadMenu();
//     setActiveTab(navButtons[1]);
// });

// navButtons[2].addEventListener('click', () => {
//     content.textContent = "";
//     loadAbout();
//     setActiveTab(navButtons[2]);
// });

// navButtons[3].addEventListener('click', () => {
//     content.textContent = "";
//     loadReviews();
//     setActiveTab(navButtons[3]);
// });

// navButtons[4].addEventListener('click', () => {
//     content.textContent = "";
//     loadContact();
//     setActiveTab(navButtons[4]);
// });
