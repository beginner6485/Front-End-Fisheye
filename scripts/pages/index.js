    async function getPhotographers() {
        fetch ("../../data/photographers.json") 
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
    async function displayData(photographers) { 
        const photographersSection = document.querySelector(".photographer_section"); 
        photographers.forEach((photographer) => { 
            const userCardDOM = getUserCardDOM(photographer); 
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() { // Récupère les datas des photographes
        await getPhotographers();

    };
    
    init();
    

    