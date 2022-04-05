let contactHeader = document.getElementById("contact-header");
let submitButton = document.querySelector(".submit");

function contact(event) {
  let name = document.getElementById("name").value;
  event.preventDefault();
  contactHeader.innerHTML = `Thank you <span>${name}</span> for your message! We will be in touch soon!`;
}

submitButton.addEventListener("click", contact);
