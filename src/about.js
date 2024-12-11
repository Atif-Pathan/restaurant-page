import middleDonut from "./images/about-us-donut.png"

export function loadAbout() {
    // Select the #content container
    const content = document.getElementById('content');

    // Clear existing content
    content.textContent = '';

    // Create the about-wrapper div
    const aboutWrapper = document.createElement('div');
    aboutWrapper.classList.add('about-wrapper');

    // Create and append the center image container
    const centerImageContainer = document.createElement('div');
    centerImageContainer.classList.add('center-image-container');

    const centerImage = document.createElement('img');
    centerImage.src = middleDonut;
    centerImage.alt = 'Donut';
    centerImage.classList.add('center-donut');

    centerImageContainer.appendChild(centerImage);
    aboutWrapper.appendChild(centerImageContainer);

    // Create and append the left text
    const leftText = document.createElement('div');
    leftText.classList.add('left-text');
    leftText.innerHTML = `
        Welcome to <strong>Dreamy Donuts</strong>, where every creation is a sweet escape. 
        Each donut is crafted with care, blending delicate flavors and soft textures into moments worth savoring. 
        With the finest ingredients and a touch of magic, we transform simple pleasures into cherished memories, one bite at a time.
    `;
    aboutWrapper.appendChild(leftText);

    // Create and append the right text
    const rightText = document.createElement('div');
    rightText.classList.add('right-text');
    rightText.innerHTML = `
        Step into a world where the comforting aroma of freshly baked donuts fills the air. 
        At Dreamy Donuts, every flavor is a dream, celebrating creativity, passion, and joy. 
        Share stories, enjoy a coffee, and indulge in treats that bring warmth and happiness to your day. 
        This is your moment to unwind and <strong>DREAM</strong> with every bite.
    `;
    aboutWrapper.appendChild(rightText);

    // Append the about-wrapper to #content
    content.appendChild(aboutWrapper);
}
