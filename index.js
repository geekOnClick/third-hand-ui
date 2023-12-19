import { getCards, getSortedCards, toggleFavorites } from './service.js';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const qualities = ['не фонтан', 'фонтан', 'потёртое', 'поношенное', 'немного пахнет', 'хорошее', 'приличное', 'с дырками'];

const cardsSection = document.querySelector('.section');
const cardTemplate = document.querySelector('#card').content;
const showMore = document.querySelector('.show-more');
const loader = document.querySelector('#loader');
const sortSelection = document.querySelector('.sort-select');

const search = document.querySelector('#search');

sortSelection.addEventListener('change', (data) => {
    const sortBy = data.target.value;
    
    getSortedCards(sortBy).then((res) => {
        renderItems(res.data);
    });

});

const renderItems = (items) => {
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

        if (el.favorite) {
            likeBtn.classList.add('active');
        } else {
            likeBtn.classList.remove('active');
        }

        likeBtn.addEventListener('click', () => {
            toggleFavorites(el.id);
            if (!likeBtn.classList.contains('active')) {
                likeBtn.classList.add('active');
            } else {
                likeBtn.classList.remove('active');
            }
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

getCards().then((res) => {
    loader?.remove();
    if (res.data) {
        renderItems(res.data);
        
        search.addEventListener('input', (event) => {
            const searchInput = event.target.value;

            if (searchInput) {
                const filteredCards = res.data.filter((card) => card.title.includes(searchInput));
                renderItems(filteredCards);
            } else {
                renderItems(res.data);
            }
        })
    }
});


