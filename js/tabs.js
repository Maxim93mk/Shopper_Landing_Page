const products_container = document.querySelector('.products-container');

const productsInfoList = [{
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


getProduct(productsInfoList, products_container);


