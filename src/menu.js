import vanillaDonut from "./donut-vanilla.png";

// menu.js
export function loadMenu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const btnLeft = document.createElement('button');
    btnLeft.id = 'move-left';
    btnLeft.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

    const btnRight = document.createElement('button');
    btnRight.id = 'move-right';
    btnRight.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');

    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel-wrapper');

    // Basic card data (all identical for now)
    const cards = [
        {
            imgSrc: '../donut-vanilla.png',
            imgAlt: 'Vanilla Cloud Donut',
            title: 'Vanilla Cloud',
            price: '$2.50',
            desc: 'A timeless classic with a soft vanilla glaze and delicate white sprinkles. Perfect for those who appreciate simplicity and elegance.'
        },
        {
            imgSrc: '../donut-berry.png',
            imgAlt: 'Berry Dream Donut',
            title: 'Berry Dream',
            price: '$3.00',
            desc: 'A vibrant donut coated in a smooth mixed berry glaze with the sweet and tangy flavors of strawberry, raspberry, and blueberry.'
        },
        {
            imgSrc: '../donut-choco.png',
            imgAlt: 'Choco Bliss Donut',
            title: 'Choco Bliss',
            price: '$3.50',
            desc: 'Indulge in rich, dark chocolate perfection with a glossy glaze and a delicate drizzle of creamy white chocolate.'
        },
        {
            imgSrc: '../donut-matcha.png',
            imgAlt: 'Matcha Mirage Donut',
            title: 'Matcha Mirage',
            price: '$3.75',
            desc: 'A refreshing donut with an earthy matcha glaze, balanced with a hint of vanilla for a unique and satisfying flavor.'
        },
        {
            imgSrc: '../donut-lemon.png',
            imgAlt: 'Lemon Lush Donut',
            title: 'Lemon Lush',
            price: '$3.00',
            desc: 'A zesty delight featuring a bright lemon glaze infused with a touch of honey for the perfect balance of tart and sweet.'
        },
        {
            imgSrc: '../donut-blue.png',
            imgAlt: 'Blue Sky Donut',
            title: 'Blue Sky',
            price: '$3.25',
            desc: 'A dreamy blueberry glaze paired with a subtle lavender twist, offering a taste as calming as its soft pastel blue hue.'
        },
        {
            imgSrc: '../donut-caramel.png',
            imgAlt: 'Caramel Dreamline Donut',
            title: 'Caramel Dreamline',
            price: '$4.00',
            desc: 'A decadent donut drenched in salted caramel glaze with a swirl of toffee drizzle. Luxurious and irresistible.'
        },
        {
            imgSrc: '../donut-tropical.png',
            imgAlt: 'Tropical Twilight Donut',
            title: 'Tropical Twilight',
            price: '$3.75',
            desc: 'Escape to paradise with a pineapple and coconut glaze, topped with a hint of passion fruit for an exotic, tropical treat.'
        }
    ];
    

    // To achieve infinite looping, we duplicate the array a few times
    const loopCount = 2;
    const fullSet = [];
    for (let i = 0; i < loopCount; i++) {
        fullSet.push(...cards);
    }

    // Create card elements
    fullSet.forEach(card => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');
    
        const pricePlusContainer = document.createElement('div');
        pricePlusContainer.classList.add('price-plus-container');
    
        const price = document.createElement('span');
        price.classList.add('price-donut');
        price.textContent = card.price;
    
        const plusIcon = document.createElement('i');
        plusIcon.classList.add('fa-solid', 'fa-square-plus');
    
        pricePlusContainer.appendChild(plusIcon);
        pricePlusContainer.appendChild(price);
    
        const img = document.createElement('img');
        img.src = vanillaDonut;
        img.alt = card.imgAlt;
        // img.id = 'donut-vanilla';
    
        const line1 = document.createElement('div');
        line1.classList.add('card-line-1');
        const h1 = document.createElement('h1');
        h1.textContent = card.title;
        line1.appendChild(h1);
    
        const line2 = document.createElement('div');
        line2.classList.add('card-line-2');
        const p = document.createElement('p');
        p.classList.add('donut-desc');
        p.textContent = card.desc;
        line2.appendChild(p);
    
        itemCard.appendChild(pricePlusContainer);
        itemCard.appendChild(img);
        itemCard.appendChild(line1);
        itemCard.appendChild(line2);
    
        wrapper.appendChild(itemCard);
    });    

    carouselContainer.appendChild(wrapper);
    menu.appendChild(btnLeft);
    menu.appendChild(carouselContainer);
    menu.appendChild(btnRight);
    content.appendChild(menu);

    // Carousel logic
    const totalCards = fullSet.length;
    const visibleCards = 4; 
    const middleIndex = Math.floor(totalCards / 2) - Math.floor(visibleCards / 2);
    let currentIndex = middleIndex;

    // Position the carousel so the middle card is in view
    const cardWidth = 384; // width from CSS (24rem assuming 16px base)
    let offset = (cardWidth + 43) * currentIndex; 
    // 48px gap assumed from CSS (3rem), adjust if changed

    function updateCarousel() {
        wrapper.style.transition = 'transform 0.5s ease';
        wrapper.style.transform = `translateX(calc(50% - ${offset}px))`;
    }

    function moveLeft() {
        currentIndex--;
        if (currentIndex < visibleCards) {
            currentIndex = totalCards - visibleCards - 1;
            wrapper.style.transition = 'none';
            offset = (cardWidth + 43) * currentIndex;
            wrapper.style.transform = `translateX(calc(50% - ${offset}px))`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    currentIndex--;
                    offset = (cardWidth + 43) * currentIndex;
                    updateCarousel();
                });
            });
        } else {
            offset = (cardWidth + 43) * currentIndex;
            updateCarousel();
        }
    }

    function moveRight() {
        currentIndex++;
        if (currentIndex > totalCards - visibleCards - 1) {
            currentIndex = visibleCards;
            wrapper.style.transition = 'none';
            offset = (cardWidth + 43) * currentIndex;
            wrapper.style.transform = `translateX(calc(50% - ${offset}px))`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    currentIndex++;
                    offset = (cardWidth + 43) * currentIndex;
                    updateCarousel();
                });
            });
        } else {
            offset = (cardWidth + 43) * currentIndex;
            updateCarousel();
        }
    }

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);

    // Initial positioning
    offset = (cardWidth + 39.5) * currentIndex;
    wrapper.style.transform = `translateX(calc(50% - ${offset}px))`;
}
