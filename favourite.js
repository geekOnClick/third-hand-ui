let mock = [
    {
        image: './Images/pic.png',
        oldPrice: 363,
        price: 264,
        title: 'Пальто демисезонное',
        size: 'M',
        quality: 'Приличное'
    },
    {
        image: './Images/card2.jpg',
        oldPrice: 471,
        price: 332,
        title: 'Шорты мужские',
        size: 'XL',
        quality: 'Хорошее'
    },
    {
        image: './Images/card3.jpg',
        oldPrice: 652,
        price: 235,
        title: 'Куртка женская',
        size: 'X',
        quality: 'Приличное'
    }
];

const cardsSection = document.querySelector('.section');
const cardTemplate = document.querySelector('#card').content;

const renderFavourites = () => {
    cardsSection.innerHTML = '';

    mock.forEach((el) => {
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

        cardElement.querySelector('.cardImg').src = el.image;
        cardElement.querySelector('.price').textContent = el.price + ' ₽';
        cardElement.querySelector('.old').textContent = el.oldPrice;
        cardElement.querySelector('.title').textContent = el.title;
        cardElement.querySelector('.size').textContent = 'Размер: ' + el.size;
        cardElement.querySelector('.quality').textContent = 'Состояние: ' + el.quality;

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

renderFavourites();
