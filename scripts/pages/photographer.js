//Mettre le code JavaScript lié à la page photographer.html
fetch("../../data/photographers.json")
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
        const searchId = window.location.search;
        const urlParams = new URLSearchParams(searchId);
        const id = urlParams.get('id')

        const found = value.photographers.find(element => element.id == id);

        const photographProfil = userInfo(found) // 

        const mediaFilter = value.media.filter(element => element.photographerId == id); 

        const mediaSection = document.querySelector(".media_section");
        mediaFilter.forEach(element => {
            const mediaProfil = infosMedia(element)
            mediaSection.appendChild(mediaProfil);
        });

        //function + appel + dehors
        const modalTrigger = document.querySelectorAll(".trigger");
        const lightbox = document.querySelector(".lightbox__container");

        function modalFunction(e){
            lightbox.innerHTML = ""; // efface le précédent média cliqué
            openModal(e)

            let clone = e.target.cloneNode(true);
            lightbox.appendChild(clone);
            clone.classList.add("cloneSize");
            clone.setAttribute("controls", "controls")
            
            // bouton Next

            let indexMedias = Array.prototype.indexOf.call(modalTrigger, e.target); //indexOf = la position de ... // 

            function nextFunction(){
                indexMedias += 1;
                lightbox.innerHTML = "";

                if (indexMedias > modalTrigger.length - 1) {
                    indexMedias = 0;
                }
                const newCloneMedias = modalTrigger[indexMedias].cloneNode(true);
                lightbox.appendChild(newCloneMedias);
                newCloneMedias.classList.add("cloneSize");
                newCloneMedias.setAttribute("controls", "controls")
            }

            const nextBox = document.querySelector(".lightbox__next");
            nextBox.addEventListener("click", nextFunction)
            nextBox.addEventListener("keyup", (e) => {
                if (e.key==="Enter"){
                    nextFunction()
                }
             })


            // Bouton Previous
            function previousFunction(){
                indexMedias -= 1;
                lightbox.innerHTML = "";

                if (indexMedias < 0) {
                    indexMedias = modalTrigger.length - 1;
                }
                const newCloneMedias = modalTrigger[indexMedias].cloneNode(true);
                lightbox.appendChild(newCloneMedias);
                newCloneMedias.classList.add("cloneSize");
                newCloneMedias.setAttribute("controls", "controls")
            
            }

            const previousBox = document.querySelector(".lightbox__previous");
            previousBox.addEventListener("click", previousFunction)
            previousBox.addEventListener("keyup", (e)=>{
                if (e.key==="Enter"){
                    previousFunction()
                }
            })

        }
        modalTrigger.forEach(trigger => trigger.addEventListener("click", modalFunction));
        modalTrigger.forEach(trigger => trigger.addEventListener("keyup", (e) =>{
           
            if(e.key==="Enter"){
                modalFunction(e)
            }
        } ));


        counter(found.price);
        heartCounter();
        changeApparence(mediaFilter);
    });

 
// Ouverture / fermeture de la lightbox

function openModal() {
    const modalBox = document.querySelector(".modalLightbox");
    modalBox.style.display = "block";
};

function closeLightBox() {
    const modalBox = document.querySelector(".modalLightbox");
    modalBox.style.display = "none";
};

// Fermeture depuis la croix

const cross = document.querySelector(".lightbox__close");
cross.addEventListener("click", closeLightBox);
cross.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        closeLightBox()
    }
})


// Compteur de Coeur

function heartCounter(){
    const hearts = document.querySelectorAll(".fa-heart");
    const likes = document.querySelector(".likes")
    let i = likes;

    hearts.forEach((item) => {
        item.addEventListener('click', (e) => {
            const compteurElement = e.target.previousElementSibling;
            let compteur = compteurElement.innerText; 
            let convertNumber = Number(compteur); 
            convertNumber += 1;
            compteurElement.innerText = convertNumber;

            const counterLikes = document.querySelector(".likescounter");
            let globalCompteur = counterLikes.innerText;
            let globalConvertNumber = Number(globalCompteur);
            globalConvertNumber += 1;
            counterLikes.innerText = globalConvertNumber;
             })
        });
    }; // option shift f => indentation

// Tri et apparence

    function changeApparence(mediaFilter) { 
        const select = document.querySelector("#selection");
        select.addEventListener('change', (e) => {
        const sortBy = e.target.value;


        if (select.value === "likes") {
            mediaFilter.sort((a, b) => {
                return b.likes - a.likes;
            }); 

        } else if (select.value === "title") {
            mediaFilter.sort((a, b) => {
                return a.title.localeCompare(b.title);
            }); 

        } else if (select.value === "date") {
            mediaFilter.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
        }
        const mediaSection = document.querySelector(".media_section");
        mediaSection.innerHTML = "";
        mediaFilter.forEach(element => {
            const mediaProfil = infosMedia(element)
            mediaSection.appendChild(mediaProfil);
        });
        heartCounter();//
        lightboxLarge();//
    }
    )
};


