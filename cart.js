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
    }
];

let fullPrice = 0;
let wrapper = document.querySelector('.selected-items');

document.querySelector('.cart-clear').addEventListener('click', () => {
    mock = [];
    wrapper.innerHTML = '';
    fullPrice = 0;
    document.querySelector('.wrapper-placeholder').classList.remove('d-none');
    document.querySelector('.wrapper__finalCost').classList.add('d-none');
});

const renderCart = () => {
    wrapper.innerHTML = '';
    fullPrice = 0;

    if (mock.length) {
        mock.forEach((el) => {
            let price = el.price ? el.price : 0;
            fullPrice += price;
            document.querySelector('.wrapper-placeholder').classList.add('d-none');
            document.querySelector('.wrapper__finalCost').classList.remove('d-none');
            document.querySelector('.final-price').innerHTML = fullPrice + ' P';

            wrapper.insertAdjacentHTML(
                'beforeend',
                `
            <div class='item-cart px-20 py-20 border-bottom'>
                <div class='primary-info d-flex align-items-stretch justify-content-between'>
                    <div class='primary-info__title'>${el.title}</div>
                    <div class='primary-info__price'>${el.price} Р</div>
                </div>
                <div class='secondary-info d-flex align-items-stretch justify-content-between pt-5'>
                    <div class='secondary-info__size'>${el.size}</div>
                    <div class='secondary-info__quantity'>${el.quality}</div>
                </div>
                <div class='d-flex justify-content-end'><div class="cart-clear clear-item"></div></div>
            </div>
        `
            );

            const newElem = wrapper.children[wrapper.children.length - 1];

            newElem.querySelector('.clear-item').addEventListener('click', () => {
                mock = mock.filter((item) => el.title !== item.title);
                renderCart();
            });
        });
    } else {
        document.querySelector('.wrapper-placeholder').classList.remove('d-none');
        document.querySelector('.wrapper__finalCost').classList.add('d-none');
    }
};

renderCart();
