    async function getPhotographers() {
        fetch ("../../data/photographers.json") // on sort de pages et de scripts pour aller dans data
            .then (function(res) {
            if (res.ok){
            return res.json();
          
            }
        })
            .then(function (value){
                displayData(value.photographers)
            }
        );
    }
    async function displayData(photographers) { // on appelle display data en lui passant tous les photographes
        const photographersSection = document.querySelector(".photographer_section"); // on sélection l'endroit où on veut mettre l'Html
        photographers.forEach((photographer) => { // on passe sur chacun des photographes et applique le code du dessous
            const userCardDOM = getUserCardDOM(photographer); // on appelle la factory en lui envoyant le photographe qu'on regarde
            photographersSection.appendChild(userCardDOM); 
        });
    };

    async function init() { // Récupère les datas des photographes
        await getPhotographers();

    };
    
    init();
    

    