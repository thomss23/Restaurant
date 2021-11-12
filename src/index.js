import HomePage from './homepage.js';
import Menu from './menu.js';

let Index = (() => {

    HomePage.renderPage();

    let header = document.querySelector('.header');

    let homeLink = header.firstChild;
    let contactLink = header.lastChild;

    homeLink.addEventListener('click', () => {
        Menu.deleteContents();
        HomePage.renderPage();
    })

    contactLink.addEventListener('click', () => {
        HomePage.deleteContents();
        Menu.renderPage();
    })

})();

