let contactHeader = document.getElementById("contact-header");
let submitButton = document.querySelector(".submit");

function contact() {
  let name = document.getElementById("name").value;

  contactHeader.innerHTML = `Thank you ${name} for your message! We will be in touch soon!`;
}

submitButton.addEventListener("click", contact);
