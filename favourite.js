import { getFavoriteCards } from './service.js';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const qualities = ['не фонтан', 'фонтан', 'потёртое', 'поношенное', 'немного пахнет', 'хорошее', 'приличное', 'с дырками'];

const cardsSection = document.querySelector('.section');
const cardTemplate = document.querySelector('#card').content;

const renderFavourites = (items) => {
    cardsSection.innerHTML = '';

    items.forEach((el) => {
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

        cardElement.querySelector('.cardImg').src = el.image_url;
        cardElement.querySelector('.price').textContent = el.price + ' ₽';
        cardElement.querySelector('.old').textContent = el.price + 2000;
        cardElement.querySelector('.title').textContent = el.title;
        cardElement.querySelector('.size').textContent = 'Размер: ' + sizes[Math.floor(Math.random() * sizes.length)];
        cardElement.querySelector('.quality').textContent = 'Состояние: ' + qualities[Math.floor(Math.random() * qualities.length)];

        const likeBtn = cardElement.querySelector('.heart');
        const cartBtn = cardElement.querySelector('.icon_cart');

        likeBtn.addEventListener('click', () => {
            mock = mock.filter((item) => item.title !== el.title);
            renderFavourites();
        });

        cartBtn.addEventListener('click', () => {
            if (!cartBtn.classList.contains('active')) {
                cartBtn.classList.add('active');
            } else {
                cartBtn.classList.remove('active');
            }
        });

        cardsSection.append(cardElement);
    });
};

getFavoriteCards().then((res) => {
    renderFavourites(res.data);
});
