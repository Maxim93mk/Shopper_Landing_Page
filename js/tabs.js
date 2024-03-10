const products_containerS = document.querySelector('.section-top-sellers').querySelector('.products-container');
const products_containerT = document.querySelector('.section-trending-earphones').querySelector('.products-container');

const top_sellers_btn = document.querySelector('.section-top-sellers').querySelector('.section-top-sellers__btns');
const trending_earphones_btn = document.querySelector('.section-trending-earphones').querySelector('.section-top-sellers__btns');

const productsInfoListPick = [{
    productName: "Наушники 1",
    productReviews: 155,
    productPrice: 145,
}, {
    productName: "Наушники 2",
    productReviews: 10,
    productPrice: 1450,
}, {
    productName: "Наушники 3",
    productReviews: 999,
    productPrice: 14,
}];

const productsInfoListWatches = [{
    productName: "Наушники 1w",
    productReviews: 5,
    productPrice: 14,
}, {
    productName: "Наушники 2w",
    productReviews: 1,
    productPrice: 1550,
}, {
    productName: "Наушники 3w",
    productReviews: 9999,
    productPrice: 3,
}];



top_sellers_btn.addEventListener('click', (event) => {
    const circBtns = top_sellers_btn.querySelectorAll('button');
    const target = event.target;
    circBtns.forEach(btn => {
        btn.classList.remove('active');

    });
    target.classList.add('active');
    getProduct(productsInfoListPick, products_containerS);
});

trending_earphones_btn.addEventListener('click', (event) => {
    const circBtns = trending_earphones_btn.querySelectorAll('button');
    const target = event.target;

    circBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    target.classList.add('active');
    getProduct(productsInfoListWatches, products_containerT);
});



function getProduct(productsInfoList, elem) {
    const arr = productsInfoList.forEach(productInfo => {
        const products_main =
            `<div class="products-main">
            <div class="products-main-block section-trending-earphones_product-1__color">
                <div class="products-main-block-foto">
                    <div class="products-main-block-foto-discount">Save 60 %</div>
                        <img src="./img/earphone_7.svg" alt="Логотип наушников">
                    </div>
                    <div class="products-main-block__descr">
                        <p class="discription_primary__p products-main-block__descr__p_color">${productInfo.productName}</p>
                        <div class="products-main-block__descr__raiting">
                            <div class="products-main-block__descr__raiting_star">
                                <img src="./img/raiting.svg" alt="Рейтинг">
                                <img src="./img/raiting.svg" alt="Рейтинг">
                                <img src="./img/raiting.svg" alt="Рейтинг">
                                <img src="./img/raiting.svg" alt="Рейтинг">
                                <img src="./img/raiting.svg" alt="Рейтинг">
                            </div>
                            <p class="raiting-descr">${productInfo.productReviews} Reviews</p>
                        </div>
                        <p class="price-product-descr">$${productInfo.productPrice}</p>
                    </div>
                </div>
                <button class="btns_rect products-main__btn">Add to cart</button>
        </div>`
        elem.insertAdjacentHTML("beforeEnd", products_main);
    })
}

