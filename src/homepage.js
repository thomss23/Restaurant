let HomePage = (() => {

    let content;
    let header;
    let main;

    let renderHeader = () => {

        let firstLink = document.createElement('div');
        let secondLink = document.createElement('div');
        let thirdLink = document.createElement('div');

        header.classList.add('header');
        firstLink.classList.add('link');
        firstLink.textContent = 'Home';
        secondLink.classList.add('link');
        secondLink.textContent = 'Menu';

        thirdLink.classList.add('link');
        thirdLink.textContent = 'Contact';

        header.appendChild(firstLink);
        header.appendChild(secondLink);
        header.appendChild(thirdLink);

        content.appendChild(header);
    }

    let init = () => {
        content = document.getElementById('content');
        header = document.createElement('div');
        renderHeader();
    }

    init();

    let renderPage = () => {
        
        main = document.createElement('div');
        
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

    return {renderPage};

})();



export default HomePage;