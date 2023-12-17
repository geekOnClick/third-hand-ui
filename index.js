const mock = [
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
    },
    {
        image: './Images/card4.jpg',
        oldPrice: 385,
        price: 199,
        title: 'Футболка женская',
        size: 'M',
        quality: 'Хорошее'
    },
    {
        image: './Images/card5.jpg',
        oldPrice: 832,
        price: 533,
        title: 'Куртка мужская',
        size: 'X',
        quality: 'Хорошее'
    },
    {
        image: './Images/card6.jpg',
        oldPrice: 298,
        price: 211,
        title: 'Пижама женская',
        size: 'M',
        quality: 'Приличное'
    },
    {
        image: './Images/card7.jpg',
        oldPrice: 444,
        price: 333,
        title: 'Кашне мужское',
        size: 'XL',
        quality: 'Приличное'
    },
    {
        image: './Images/card8.jpg',
        oldPrice: 112,
        price: 99,
        title: 'Шапка женская',
        size: 'M',
        quality: 'Хорошее'
    },
    {
        image: './Images/card9.jpg',
        oldPrice: 213,
        price: 199,
        title: 'Сарафан женский',
        size: 'M',
        quality: 'Приличное'
    }
];

const cardsSection = document.querySelector('.section');
const cardTemplate = document.querySelector('#card').content;

const renderItems = () => {
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

renderItems();
