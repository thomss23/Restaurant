let Menu = (() => {

    let content;
    let menuContainer;
    let menu;

    let init = () => {

        content = document.getElementById('content');
        menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
    }

    let createCard = (title, link) =>  {

        let card = document.createElement('div');
        card.classList.add('card');

        let image = document.createElement('img');
        image.setAttribute("src", link);
        image.setAttribute("alt", "image");

        let container = document.createElement('div')
        let h4 = document.createElement('h4');
        
        h4.textContent = title;

        container.appendChild(h4);

        card.appendChild(image);
        card.appendChild(container);

        menuContainer.appendChild(card);
    }

    let renderPage = () => {

        init();

        menu = document.createElement('div');
        menu.classList.add('menu');

        createCard("Big Cheese", "../src/assets/hamburger1.svg");
        createCard("Big Meat", "../src/assets/hamburger2.svg");
        createCard("Big Sandwich", "../src/assets/sandwich.svg");

        menu.appendChild(menuContainer);
        content.appendChild(menu);
    }

    return {renderPage};

})();

export default Menu;