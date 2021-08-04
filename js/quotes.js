const quotes = [
  {
    quote: "아 배고파",
    author: "이승환",
  },
  {
    quote: "아 졸려",
    author: "이승환",
  },
  {
    quote: "아 뭐하지",
    author: "이승환",
  },
  {
    quote: "아 짜증나",
    author: "이승환",
  },
  {
    quote: "아 배불러",
    author: "이승환",
  },
  {
    quote: "아 비오네",
    author: "이승환",
  },
  {
    quote: "아 추워",
    author: "이승환",
  },
  {
    quote: "아 더워",
    author: "이승환",
  },
  {
    quote: "아 안졸려",
    author: "이승환",
  },
  {
    quote: "아 배고파",
    author: "이승환",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
