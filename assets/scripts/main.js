import { PRODUCTS } from './constants.js';

const cartIconSVG = `
  <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="46" height="38" rx="7" stroke="#DBFFEC" stroke-width="2"/>
    <path d="M19.2 12.6667H28.8C33.3334 12.6667 33.7867 14.7867 34.0934 17.3734L35.2933 27.3734C35.68 30.6534 34.6667 33.3334 30 33.3334H18.0133C13.3333 33.3334 12.32 30.6534 12.72 27.3734L13.92 17.3734C14.2133 14.7867 14.6667 12.6667 19.2 12.6667Z" stroke="#DBFFEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.6667 14.6667V10.0001C18.6667 8.00008 20 6.66675 22 6.66675H26C28 6.66675 29.3333 8.00008 29.3333 10.0001V14.6667" stroke="#DBFFEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35.2133 26.7065H18.6667" stroke="#DBFFEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const container = document.getElementById('topSellingItems');

PRODUCTS.forEach((product) => {
  const card = document.createElement('div');
  card.className = 'card card--rounded-md card--md card--flex-column card--gap-sm';
  card.dataset.id = product.id;

  card.innerHTML = `
    <div class="card__image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <h3 class="card__title">${product.title}</h3>
    <div class="card__info">${product.info}</div>
    <div class="card__action">
      <div class="card__price">$ ${product.price}</div>
      <button class="card__atc" aria-label="Add ${product.title} to cart">
        ${cartIconSVG}
      </button>
    </div>
  `;

  container.appendChild(card);
});

