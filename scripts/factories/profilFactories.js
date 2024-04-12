
function userInfo(infoP) {
    const { name, id, city, country, tagline, price, portrait } = infoP;
    const picture = `assets/images/Photographers ID Photos/${portrait}`;
    const infoPhoto = document.querySelector(".banner");
    infoPhoto.innerHTML =
        `         
                        <div class="infoText">
                            <h2>${name}</h2></a>
                            <h3 class="town">${city}, ${country}</h3>
                            <text>${tagline}</text>  
                        </div>
                        <button class="contact_button" onclick="displayModal()" aria-label="Ouverture Formulaire contacter le photographe">Contactez-moi</button>
                        <img src ="${picture}"class="style_id" alt="photo utilisateur";/> 
                        `; 
    return (infoPhoto);
}

function infosMedia(infos) {
    const { id, photographerId, title, image, likes, date, price, video } = infos;
    const article = document.createElement('article');

    if (image) {
        const medias = `assets/images/${photographerId}/${image}`;
        article.innerHTML =
            `
            <img src ="${medias}" class="img_style trigger" tabindex="0 alt="${title}"/>
            <div class="Title"><h4>${title}</h4>
            <div class="likes">${likes}</div><i class="fa-solid fa-heart" aria-label="bouton likes"></i>
            </div>
            
            `;
    }
    else {
        const mediasVideos = `assets/images/${photographerId}/${video}`
        article.innerHTML =
            `  
            <video class="video_style trigger" aria-label="${title}">
            <source src="${mediasVideos}"></source>
            </video>
            <div class="Title"><h4>${title}</h4>
            <div class="likes">${likes}</div><i class="fa-solid fa-heart" aria-label="bouton likes"></i>
            </div>
            `;
    }
    return (article);

}

function counter(price) {
    const counter = document.querySelector(".counter");
    const likes = document.querySelectorAll(".likes");
    let i = 0; 
    likes.forEach(element => {
        let number = element.innerText; 
        let convertNumber = Number(number);
        i += convertNumber;
    });

    counter.innerHTML =
        `
        <div class="likescounter">${i}</div>
        <i class="fa-solid fa-heart heartCounter"  aria-label="nombre de coeur total"></i>
        <div class="prix">${price} € / jour </div>

        `;
}

