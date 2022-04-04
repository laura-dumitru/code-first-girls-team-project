const quotes = [
  {
    quote: "Wherever you are, be there totally.",
    author: "Eckart Tolle",
  },
  {
    quote: "Live the actual moment. Only this actual moment is life.",
    author: "Thich Nhât Hanh",
  },
  {
    quote: "Nothing can harm you as much as your own thoughts unguarded.",
    author: "Buddha",
  },
  {
    quote: "Mindfulness isn’t difficult, we just need to remember to do it.",
    author: "Sharon Salzberg",
  },
  {
    quote:
      "If you want to conquer the anxiety of life, live in the moment, live in the breath.",
    author: "Amit Ray",
  },
  {
    quote: "Meditation is not evasion; it is a serene encounter with reality.",
    author: "Thich Nhât Hanh",
  },
  {
    quote:
      "Open the window of your mind. Allow the fresh air, new lights and new truths to enter.",
    author: "Amit Ray",
  },
  {
    quote:
      "The mind is just like a muscle – the more you exercise it, the stronger it gets and the more it can expand.",
    author: "Idowu Koyenikan",
  },
  {
    quote: "Life is a dance, mindfulness is witnessing that dance.",
    author: "Amit Ray",
  },
  {
    quote:
      "Training your mind to be in the present moment is the number one key to making healthier choices.",
    author: "Susan Albers",
  },
];

const quoteDisplay = document.getElementsByTagName("blockquote")[0];

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

let number = randomNumber(quotes.length);

quoteDisplay.innerHTML = `<i>“${quotes[number].quote}”</i><span> — </span><cite>${quotes[number].author}</cite>`;
