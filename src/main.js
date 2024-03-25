import scss from './scss/style.scss';
import { createmobileMenu } from './js/mobile-menu.js';
import tabs from './js/tabs.js';
import { productsInfoListPick, productsInfoListWatches } from './js/data/data-tabs.js';

// const getTabs = require('./js/get-cards.js');


createmobileMenu();

const tabNamesS = ['Top Picks', 'Watches'];
const tabNamesT = ['Earbuds', 'Wireless', 'Wired'];
const products_containerS = document.querySelector('.section-top-sellers').querySelector('.products-container');
const top_sellers_btn = document.querySelector('.section-top-sellers').querySelector('.section-top-sellers__btns');
tabs(tabNamesS, [productsInfoListPick, productsInfoListWatches], '.section-top-sellers');
tabs(tabNamesT, [productsInfoListPick, productsInfoListWatches, productsInfoListPick], '.section-trending-earphones');
