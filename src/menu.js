let Menu = (() => {

    let content;
    let menuContainer;
    let menu;

    let init = () => {

        content = document.getElementById('content');

        menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        menu = document.createElement('div');
        menu.classList.add('menu');

    }

    init();

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
        createCard("Big Cheese", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=85");
        createCard("Big Meat", "https://www.jessicagavin.com/wp-content/uploads/2020/05/grilled-burgers-34-1200.jpg");
        createCard("Big Fat", "https://www.bigbelly-cluj.ro/filehandler/ProductFirstFile/0x0/cheese-max-burger-en-390.jpg?v=637610767161548308");
        menu.appendChild(menuContainer);
        content.appendChild(menu);
    }

    let deleteContents = () => {
        content.removeChild(main);
    }

    return {renderPage, deleteContents};

})();

export default Menu;