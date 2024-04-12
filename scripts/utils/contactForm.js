function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const closeform = document.querySelector(".modal")

    modal.style.display = "none";
    closeform.style.display="none";
}

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