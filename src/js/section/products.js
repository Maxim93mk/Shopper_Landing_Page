import elemHTML from "../elemHTML.js";

class Products extends elemHTML {

    elem = document.createElement('main');

    constructor() {
        super();
    }
    setTemplate() {

        this.elem.insertAdjacentHTML("afterbegin", `<!-- -------- section-latest-products --------- -->
        <section>
            <div class="container section-latest-products">
                <!-- section-latest-products-left -->
                <div class="section-latest-products-left">
                    <h1 class="title_primary__h1">Discover Our Latest Products</h1>
                    <p class="discription_primary__p discription__p_attr">Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form
                        of a product
                    </p>
                    <button class="btns_rect btn_buy_indent">Buy Now</button>
                    <div class="products-rewiev">
                        <div class="products-rewiev__img">
                            <img src="../src/img/face_1.svg" class="user_1" alt="Пользователь 1">
                            <img src="../src/img/face_2.svg" class="user_2" alt="Пользователь 2">
                            <img src="../src/img/face_3.svg" class="user_3" alt="Пользователь 3">
                            <img src="../src/img/face_4.svg" class="user_4" alt="Пользователь 4">
                        </div>
                        <p class="products-rewiev__p products-rewiev__p_attr">15k Well Reviews</p>
                    </div>
                </div>
                <!-- section-latest-products-right -->
                <div class="section-latest-products-right">
                    <div class="playVideo">
                        <div class="playVideo__svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="79" viewBox="0 0 81 79"
                                fill="none">
                                <mask id="path-1-inside-1_16_430" fill="white">
                                    <path
                                        d="M59.611 78.7192C65.2658 75.4195 70.0709 70.8434 73.6427 65.3564C77.2145 59.8694 79.4541 53.6233 80.1826 47.1168C80.9111 40.6103 80.1084 34.0235 77.8386 27.8824C75.5687 21.7413 71.8946 16.2159 67.1096 11.7473C62.3245 7.27868 56.561 3.99061 50.2792 2.14558C43.9974 0.300556 37.3712 -0.0503284 30.9297 1.12094C24.4882 2.29221 18.4097 4.95319 13.1794 8.89146C7.94918 12.8297 3.71209 17.9362 0.806371 23.8032L1.79119 24.291C4.62088 18.5775 8.74711 13.6046 13.8405 9.76939C18.9339 5.93417 24.8533 3.34282 31.1263 2.2022C37.3993 1.06158 43.8521 1.40328 49.9695 3.20003C56.087 4.99678 61.6996 8.19881 66.3595 12.5505C71.0193 16.9022 74.5973 22.283 76.8077 28.2634C79.0182 34.2439 79.7999 40.6582 79.0904 46.9945C78.381 53.3307 76.2 59.4134 72.7217 64.7568C69.2434 70.1003 64.564 74.5566 59.0571 77.77L59.611 78.7192Z" />
                                </mask>
                                <path
                                    d="M59.611 78.7192C65.2658 75.4195 70.0709 70.8434 73.6427 65.3564C77.2145 59.8694 79.4541 53.6233 80.1826 47.1168C80.9111 40.6103 80.1084 34.0235 77.8386 27.8824C75.5687 21.7413 71.8946 16.2159 67.1096 11.7473C62.3245 7.27868 56.561 3.99061 50.2792 2.14558C43.9974 0.300556 37.3712 -0.0503284 30.9297 1.12094C24.4882 2.29221 18.4097 4.95319 13.1794 8.89146C7.94918 12.8297 3.71209 17.9362 0.806371 23.8032L1.79119 24.291C4.62088 18.5775 8.74711 13.6046 13.8405 9.76939C18.9339 5.93417 24.8533 3.34282 31.1263 2.2022C37.3993 1.06158 43.8521 1.40328 49.9695 3.20003C56.087 4.99678 61.6996 8.19881 66.3595 12.5505C71.0193 16.9022 74.5973 22.283 76.8077 28.2634C79.0182 34.2439 79.7999 40.6582 79.0904 46.9945C78.381 53.3307 76.2 59.4134 72.7217 64.7568C69.2434 70.1003 64.564 74.5566 59.0571 77.77L59.611 78.7192Z"
                                    stroke="url(#paint0_linear_16_430)" stroke-width="4"
                                    mask="url(#path-1-inside-1_16_430)" />
                                <defs>
                                    <linearGradient id="paint0_linear_16_430" x1="20.9434" y1="-1.55664" x2="28.4434"
                                        y2="89.4434" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#10B981" />
                                        <stop offset="1" stop-color="#10B981" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p class="discription_primary__p discription_primary__p_color">Play Video</p>
                    </div>
                    <div class="main-beats">
                        <div class="star_up">
                            <img src="../src/img/star.svg" alt="Логотип звезды"></img>
                        </div>
                        <div class="read-beats">
                            <img src="../src/img/earphone_main.svg" alt="Логотип наушников">
                        </div>
                        <div class="star_down">
                            <img src="../src/img/star.svg" alt="Логотип звезды"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- -------- section-featured-products --------- -->
        <section>
            <div class="container section-featured-products" id="featured">
                <!-- -------- section-featured-products-left --------- -->
                <div class="section-featured-products-left">
                    <h2 class="title_primary__h2">Apple wireless Airpod</h2>
                    <div class="section-featured-products__img">
                        <img src="../src/img/earphone_1.svg" alt="Наушники 1">
                        <img src="../src/img/earphone_2.svg" class="featured-products__img_center" alt="Наушники 2">
                        <img src="../src/img/earphone_3.svg" alt="Наушники 3">
                    </div>
                    <p class="price__p price__p_indent">Price:<span class="price__span">&nbsp $45.99</span></p>
                </div>

                <!-- section-featured-products-right -->
                <div class="section-featured-products-right">
                    <h3 class="title_primary__h3 title_primary__h3_indent">Our Featured Products</h3>
                    <p class="discription_primary__p discription__p_indent">Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a product</p>
                    <div class="section-featured-products__control">
                        <button class="btns_rect">Add to cart</button>
                        <a href="#" class="link_primary">View more</a>
                    </div>
                </div>

            </div>
        </section>
        <!-- Top Sellers -->
        <section>
            <div class="container section-top-sellers" id="products">
                <h3 class="title_primary__h3  section-top-sellers__h3">Top Sellers</h3>
                <div class="section-top-sellers__btns">
                    <button class="circ_btn active">Top Picks</button>
                    <button class="circ_btn">Watches</button>
                </div>

                <div class="products">
                    <div class="products-container">
                        <div class="products-main">
                            <div class="products-main-block">
                                <div class="products-main-block-foto">
                                    <div class="products-main-block-foto-discount">Save 60 %</div>
                                    <img src="../src/img/earphone_4.svg" alt="Логотип наушников">
                                </div>
                                <div class="products-main-block__descr">
                                    <p class="discription_primary__p products-main-block__descr__p_color">Boat Rockerz
                                        333
                                    </p>
                                    <div class="products-main-block__descr__raiting">
                                        <div class="products-main-block__descr__raiting_star">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        </div>
                                        <p class="raiting-descr">75 Reviews</p>
                                    </div>
                                    <p class="price-product-descr">$20</p>
                                </div>
                            </div>
                            <button class="btns_rect products-main__btn">Add to cart</button>
                        </div>
                        <div class="products-main">
                            <div class="products-main-block section-top-sellers_product-2__color">
                                <div class="products-main-block-foto">
                                    <img src="../src/img/earphone_5.svg" alt="Логотип наушников">
                                </div>
                                <div class="products-main-block__descr">
                                    <p class="discription_primary__p products-main-block__descr__p_color">Boat kerz 234
                                    </p>
                                    <div class="products-main-block__descr__raiting">
                                        <div class="products-main-block__descr__raiting_star">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        </div>
                                        <p class="raiting-descr">75 Reviews</p>
                                    </div>
                                    <p class="price-product-descr">$40</p>
                                </div>
                            </div>
                            <button class="btns_rect products-main__btn">Add to cart</button>
                        </div>
                        <div class="products-main">
                            <div class="products-main-block section-top-sellers_product-3__color">
                                <div class="products-main-block-foto">
                                    <div
                                        class="products-main-block-foto-discount section-top-sellers_product-3__discount_color">
                                        Save 40
                                        %</div>
                                    <img src="../src/img/earphone_6.svg" alt="Логотип наушников">
                                </div>
                                <div class="products-main-block__descr">
                                    <p class="discription_primary__p products-main-block__descr__p_color">Boat Rockerz
                                        323
                                    </p>
                                    <div class="products-main-block__descr__raiting">
                                        <div class="products-main-block__descr__raiting_star">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                            <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        </div>
                                        <p class="raiting-descr">75 Reviews</p>
                                    </div>
                                    <p class="price-product-descr">$30</p>
                                </div>
                            </div>
                            <button class="btns_rect products-main__btn">Add to cart</button>
                        </div>
                    </div>
                    <button class="arrow_btn"><img src="../src/img/Arrows_right.svg"
                            alt="Кнопка стрелки вправо"></button>
                </div>
            </div>
        </section>
        <!--Trending Earphones -->
        <div class="container section-top-sellers section-trending-earphones">
            <h3 class="title_primary__h3  section-top-sellers__h3">Trending Earphones</h3>
            <div class="section-top-sellers__btns">
                <button class="circ_btn active">Earbuds</button>
                <button class="circ_btn">Wireless</button>
                <button class="circ_btn">Wired</button>
            </div>
            <div class="products">
                <div class="products-container">
                    <div class="products-main">
                        <div class="products-main-block section-trending-earphones_product-1__color">
                            <div class="products-main-block-foto">
                                <div class="products-main-block-foto-discount">Save 60 %</div>
                                <img src="../src/img/earphone_7.svg" alt="Логотип наушников">
                            </div>
                            <div class="products-main-block__descr">
                                <p class="discription_primary__p products-main-block__descr__p_color">Boat Rockerz
                                    333
                                </p>
                                <div class="products-main-block__descr__raiting">
                                    <div class="products-main-block__descr__raiting_star">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                    </div>
                                    <p class="raiting-descr">75 Reviews</p>
                                </div>
                                <p class="price-product-descr">$20</p>
                            </div>
                        </div>
                        <button class="btns_rect products-main__btn">Add to cart</button>
                    </div>
                    <div class="products-main">
                        <div class="products-main-block section-trending-earphones_product-2__color">
                            <div class="products-main-block-foto">
                                <img src="../src/img/earphone_8.svg" alt="Логотип наушников">
                            </div>
                            <div class="products-main-block__descr">
                                <p class="discription_primary__p products-main-block__descr__p_color">Boat kerz 234
                                </p>
                                <div class="products-main-block__descr__raiting">
                                    <div class="products-main-block__descr__raiting_star">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                    </div>
                                    <p class="raiting-descr">75 Reviews</p>
                                </div>
                                <p class="price-product-descr">$40</p>
                            </div>
                        </div>
                        <button class="btns_rect products-main__btn">Add to cart</button>
                    </div>
                    <div class="products-main">
                        <div class="products-main-block section-trending-earphones_product-3__color">
                            <div class="products-main-block-foto">
                                <div
                                    class="products-main-block-foto-discount section-trending-earphones_product-3__discount_color">
                                    Save 40
                                    %</div>
                                <img src="../src/img/earphone_9.svg" alt="Логотип наушников">
                            </div>
                            <div class="products-main-block__descr">
                                <p class="discription_primary__p products-main-block__descr__p_color">Boat Rockerz
                                    323
                                </p>
                                <div class="products-main-block__descr__raiting">
                                    <div class="products-main-block__descr__raiting_star">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                        <img src="../src/img/raiting.svg" alt="Рейтинг">
                                    </div>
                                    <p class="raiting-descr">75 Reviews</p>
                                </div>
                                <p class="price-product-descr">$30</p>
                            </div>
                        </div>
                        <button class="btns_rect products-main__btn">Add to cart</button>
                    </div>
                </div>
                <button class="arrow_btn"><img src="../src/img/Arrows_right.svg" alt="Кнопка стрелки вправо"></button>
            </div>
        </div>
        <!-- New Launches -->
        <section>
            <div class="container" id="blog">
                <h3 class="title_primary__h3 title-new-launches__attr_h3">New Launches</h3>
                <div class="section-new-launches">
                    <!-- -------- section-new-launches-left --------- -->
                    <div class="section-new-launches-left">
                        <button class="arrow_btn_circ"><img src="../src/img/btn_ left_arrow.svg" alt="Стрелка"></button>
                        <div class="section-new-launches-left__earhpones">
                            <img class="section-new-launches-left__earhpones_img" src="../src/img/earphone_10.svg"
                                alt="Наушники">
                            <img class="section-new-launches-left__earhpones_img section-new-launches-left__earhpones_img_top"
                                src="../src/img/earphone_11.svg" alt="Наушники">
                        </div>
                    </div>
                    <!-- -------- section-new-launches-right --------- -->
                    <div class="section-new-launches-right">
                        <div class="section-new-launches-right-list">
                            <h3 class="title_primary__h3 section-new-launches-right-list__attr_h3">Airdrop 500 Anc</h3>
                            <p class="discription_primary__p section-new-launches-right-list-descr__attr_p">Lorem ipsum
                                is a
                                placeholder text
                                commonly
                                used to demonstrate the visual form of a product ... Read More</p>
                            <p class="price__p  section-new-launches-right-list-price__attr_p">Price:<span
                                    class="price__span">&nbsp $45.99</span></p>
                            <div class="section-new-launches-right-list__circ">
                                <button class="circ_btn_switch_color circ_btn_switch_color_1"></button>
                                <button class="circ_btn_switch_color circ_btn_switch_color_2"></button>
                                <button class="circ_btn_switch_color circ_btn_switch_color_3"></button>
                            </div>
                            <div class="section-new-launches-right-list__control">
                                <button class="btns_rect section-new-launches-right-list__control_attr">Add to
                                    cart</button>
                                <a href="#" class="link_primary">Explore More</a>
                            </div>
                        </div>
                        <button class="arrow_btn_circ"><img src="../src/img/btn_ right_arrow.svg"
                                alt="Стрелка"></button>
                    </div>
                </div>
            </div>
        </section>`);
    }
    createHeader() {
        this.render();
    }
}


export default Products;