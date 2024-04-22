
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal(){
    const modal = document.getElementById("contact_modal");
    const contactBtn = document.querySelector(".contact_button");

    contactBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })
    const closeBtn = document.querySelector(".close-modale");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })
}
closeModal();

function ReturnConsole(){
    const firstName = document.getElementById("prenom").value;
    const lastName = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const yourMessage = document.getElementById("message").value;

    console.log("Prénom:", firstName);
    console.log("Nom:", lastName);
    console.log("Email:", email);
    console.log("Message:", yourMessage);
}