import scss from './scss/style.scss';
import { createmobileMenu } from './js/mobile-menu.js';
import MobileDisplay from './js/section/mobile-menu-section.js';
import { productsInfoListPick, productsInfoListWatches } from './js/data/data-tabs.js';
import createWelcomePopup from './js/welcome-popup.js'
import Header from './js/section/header.js';
import Products from './js/section/products.js';
import Footer from './js/section/footer.js';
import tabs from './js/tabs.js';

// const getTabs = require('./js/get-cards.js');
createWelcomePopup();

const header = new Header();
const products = new Products();
const footer = new Footer();
const mobileMenu = new MobileDisplay();

mobileMenu.setTemplate();
mobileMenu.createHeader();

header.setTemplate();
header.createHeader();

products.setTemplate();
products.createHeader();

footer.setTemplate();
footer.createHeader();
 createmobileMenu();

const tabNamesS = ['Top Picks', 'Watches'];
const tabNamesT = ['Earbuds', 'Wireless', 'Wired'];
tabs(tabNamesS, [productsInfoListPick, productsInfoListWatches], '.section-top-sellers');
tabs(tabNamesT, [productsInfoListPick, productsInfoListWatches, productsInfoListPick], '.section-trending-earphones');


