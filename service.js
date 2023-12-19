const SERVER_LINK = 'https://62x1fswc-8080.euw.devtunnels.ms';
const URL = `${SERVER_LINK}/api/v1/products`;
const TOKEN = '';

export async function getCards() {
    const res = await fetch(URL, {
        method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,  
        //   }
    });
    const cards = await res.json();

    return cards;
} 

export async function getSortedCards(sortBy='views', orderBy='asc') {
    const res = await fetch(`${URL}?sort_by=${sortBy}&order_by=${orderBy}`, {
        method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,  
        //   }
    });

    const cards = await res.json();

    return cards;
} 

export async function getFavoriteCards(sortBy='views', orderBy='asc') {
    const res = await fetch(`${URL}?sort_by=${sortBy}&order_by=${orderBy}`, {
        method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,  
        //   }
    });

    const cards = await res.json();

    return cards;
} 

export async function addToFavorites(productId) {
    const url = `${SERVER_LINK}/api/v1/product/${productId}/favorite`
    const res = await fetch(url, {
        method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,  
        //   }
    });

    const cards = await res.json();

    return cards;
} 


