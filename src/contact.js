let ContactPage = (() => {

    let content;
    let main;

    let renderBody = () => {

        content = document.getElementById('content');

        main = document.createElement('div');
        
        let centerContainer = document.createElement('div');
        let firstDescription = document.createElement('div');
        let secondDescription = document.createElement('div');  
        let title = document.createElement('h4');

        title.textContent = "Get in touch!"
        firstDescription.textContent = "Phone: +234 144 444";
        secondDescription.textContent = "Email: bestburgers@burgers.com";

        main.classList.add("contact");
        centerContainer.classList.add("contact-container");
        firstDescription.classList.add('phone-email');
        secondDescription.classList.add('phone-email');

        centerContainer.appendChild(title);
        centerContainer.appendChild(firstDescription);
        centerContainer.appendChild(secondDescription);


        main.appendChild(centerContainer);

        content.appendChild(main);
        
    }

    let renderPage = () => {
        renderBody();
    }

    return {renderPage};

})();

export default ContactPage;