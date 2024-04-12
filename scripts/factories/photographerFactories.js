    function getUserCardDOM(data){ // on récupère le photographe (car data va être remplacé)
        const { name, id, city, country, tagline, price, portrait, } = data; 
        const picture = `assets/images/Photographers ID Photos/${portrait}`;
        const article = document.createElement( 'article' );

        article.innerHTML= 
             `<a href="photographer.html?id=${id}" aria-label="cliquez pour voir le profil du photographe">
                    <img src="${picture}" alt="photo de profil"/>
                        <h2>${name}</h2></a>
                        <h3>${city}, ${country}</h3>
                        <text>${tagline}</text>
                        <info>${price}€/jour</info>
                    `;

        return (article); // utilise une fonction qui génère quelque chose a utiliser, il faut return
    }

    // e.target true et lightbox image 