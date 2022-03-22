let contactHeader = document.getElementById("contact-header");
let submitButton = document.querySelector(".submit");

function contact(event) {
  let name = document.getElementById("name").value.toUpperCase();
  event.preventDefault();
  contactHeader.innerHTML = `Thank you ${name} for your message! We will be in touch soon!`;
}

submitButton.addEventListener("click", contact);
