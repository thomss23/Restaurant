let HomePage = (() => {

    let content;
    let header;
    let main;


    let init = () => {

        content = document.getElementById('content');
        header = document.createElement('div');
        main = document.createElement('div');

    }

    init();

    let renderHeader = () => {

        let firstLink = document.createElement('div');
        let secondLink = document.createElement('div');

        header.classList.add('header');
        firstLink.classList.add('link');
        firstLink.textContent = 'Home';
        secondLink.classList.add('link');
        secondLink.textContent = 'Menu';

        header.appendChild(firstLink);
        header.appendChild(secondLink);

        content.appendChild(header);
    }

    let renderBody = () => {

        let centerContainer = document.createElement('div');

        let firstDescription = document.createElement('div');
        let burgerImage = document.createElement('img');
        let secondDescription = document.createElement('div');

        firstDescription.textContent = "Best Late Night Burgers";
        secondDescription.textContent = "St Francisco, 200 S Street";

        burgerImage.setAttribute("src", "/src/assets/clipart4427988.png");
        burgerImage.setAttribute("alt", "burger logo");

        main.classList.add("main");
        centerContainer.classList.add("center-container");
        firstDescription.classList.add('description');
        secondDescription.classList.add('description');

        centerContainer.appendChild(firstDescription);
        centerContainer.appendChild(burgerImage);
        centerContainer.appendChild(secondDescription);

        main.appendChild(centerContainer);

        content.appendChild(main);
        
    }

    let renderPage = () => {
        renderHeader();
        renderBody();
    }

    let deleteContents = () => {
        content.removeChild(main);
    }

    return {renderPage, deleteContents};

})();



export default HomePage;