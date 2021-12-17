import HomePage from './homepage.js';
import Menu from './menu.js';
import ContactPage from './contact.js';

let Index = (() => {

    HomePage.renderPage();

    let header = document.querySelector('.header');

    let homeLink = header.firstChild;
    let menuLink = homeLink.nextSibling;
    let contactLink = header.lastChild;

    homeLink.addEventListener('click', () => {
        deleteContents()
        HomePage.renderPage();
    })

    menuLink.addEventListener('click', () => {
        deleteContents()
        Menu.renderPage();
    })

    contactLink.addEventListener('click', () => {
        deleteContents()
        ContactPage.renderPage();
    })

    function deleteContents() {
        let content = document.getElementById('content');

        content.removeChild(content.lastChild);
        
    }


})();

