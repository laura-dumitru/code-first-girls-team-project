let contactHeader = document.getElementById("contact-header");
let submitButton = document.querySelector(".submit");

function contact(event) {
  let name = document.getElementById("name").value.toUpperCase();
  event.preventDefault();
  contactHeader.innerHTML = `Thank you ${name} for your message! We will be in touch soon!`;
}

submitButton.addEventListener("click", contact);

/*

// https://codepen.io/laura_dumitru/pen/MWrKoge

let choices = Array.from(document.getElementById("options").selectedOptions);
const videos = document.getElementsByClassName("videos");

choices.forEach(function(choice) {

  if (choice.value == "relax&stretch","neck&upper back") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/SedzswEwpPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ";
  } else if (choice.value == "relax&stretch","legs&lower back") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/2xF_teT2_V0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>";
  } } else if (choice.value == "relax&stretch","core&full body") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/b1H3xO3x_Js" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>";
  } else if (choice.value == "move&energize","neck&upperback") {
   videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/F47hdaNXwT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>";
  }
  else if (choice.value == "move&energize","legs&lower back") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/2xF_teT2_V0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>";
  }
  else if (choice.value == "move&energize","core&full body") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/BPobdbmzY9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
  }
  else if (choice.value == "focus&balance","nexk&upper back") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/JUP_YdYyfQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>";
  }
  else if (choice.value == "focus&balance","legs&lower back") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/2137wAXvufE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ";
  }
  else(choice.value == "focus&balance","legs&lower back") {
    videos.innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/2xF_teT2_V0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>";
  }
})






document.addEventListener(".submit", function () {
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "I am <strong>Dana</strong> I like purple";
  newParagraph.style.fontSize = "18px";
  newParagraph.style.fontFamily = "sans-serif";
  newParagraph.style.width = "100px";
  newParagraph.style.border = "2px solid orange";
  newParagraph.style.padding = "30px";

  document.body.append(newParagraph);

  const header = document.getElementById("headerID");
  header.style.color = "purple";

});

*/
