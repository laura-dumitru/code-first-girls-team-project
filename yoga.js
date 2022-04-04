let stretchRelaxNeck = document.getElementById("stretch-relax-neck");
let option1 = ["stretch & relax", "neck & upper body"];

let stretchRelaxLegs = document.getElementById("stretch-relax-legs");
let option2 = ["stretch & relax", "legs & lower body"];

let stretchRelaxCore = document.getElementById("stretch-relax-core");
let option3 = ["stretch & relax", "full body & core"];

let energizeNeck = document.getElementById("energize-neck");
let option4 = ["move & energize", "neck & upper body"];

let energizeLegs = document.getElementById("energize-legs");
let option5 = ["move & energize", "legs & lower body"];

let energizeCore = document.getElementById("energize-core");
let option6 = ["move & energize", "full body & core"];

let balanceNeck = document.getElementById("balance-neck");
let option7 = ["focus & balance", "neck & upper body"];

let balanceLegs = document.getElementById("balance-legs");
let option8 = ["focus & balance", "legs & lower body"];

let balanceCore = document.getElementById("balance-core");
let option9 = ["focus & balance", "full body & core"];

function compareToChecked(options) {
  let checked = document.querySelectorAll("*:checked");
  checked = Array.from(checked).map(function (element) {
    return element.name;
  });
  /*
  // Equivalent CSS:
  input[type="checkbox"]:checked {}
  // or
  *:checked {}
  */

  return (
    checked.length == 2 &&
    checked.every(function (option) {
      return options.includes(option);
    })
  );
}

function filterVideo() {
  let videos = Array.from(document.querySelectorAll(".video-suggested"));

  function hide(video) {
    video.style.setProperty("display", "none");
  }
  videos.forEach(hide);
  /*
  This `hide` function loops over all elements with .video-suggested class and hides them using `display: none`

  // CSS equivalent:
  .video-suggested {
    display: none;
  }
  */

  /*
  Now that everything is hidden, check each array combination against currently selected *:checked boxes, and show the matching video by using `display: inherit` (which just undose the `display: none`).
  */
  if (compareToChecked(option1)) {
    stretchRelaxNeck.style.setProperty("display", "inherit");
  } else if (compareToChecked(option2)) {
    stretchRelaxLegs.style.setProperty("display", "inherit");
  } else if (compareToChecked(option3)) {
    stretchRelaxCore.style.setProperty("display", "inherit");
  } else if (compareToChecked(option4)) {
    energizeNeck.style.setProperty("display", "inherit");
  } else if (compareToChecked(option5)) {
    energizeLegs.style.setProperty("display", "inherit");
  } else if (compareToChecked(option6)) {
    energizeCore.style.setProperty("display", "inherit");
  } else if (compareToChecked(option7)) {
    balanceNeck.style.setProperty("display", "inherit");
  } else if (compareToChecked(option8)) {
    balanceLegs.style.setProperty("display", "inherit");
  } else if (compareToChecked(option9)) {
    balanceCore.style.setProperty("display", "inherit");
  }
}

filterVideo();
