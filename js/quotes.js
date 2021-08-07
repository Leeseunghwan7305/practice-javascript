const quotes = [
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
    author: "제임스틴",
  },
  {
    quote:
      "미래를 계획하는 일도 필요하지만 가장 중요한 것은 오늘을 후회없이 사는 겁니다",
    author: "박근호",
  },
  {
    quote:
      "인생에서 원하는 것을 얻기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다",
    author: "벤 스타인",
  },
  {
    quote:
      "해결될 일이라면 걱정할 필요가 없고,해결되지 않을 일이라면 걱정해도 아무 소용없다.",
    author: "달라이 라마",
  },
  {
    quote:
      "아주 많은 실수를 저지른 것이 아니라면 옳은 선택 몇 개 만으로도 인생은 성공할 수 있다.",
    author: "워렌 버핏",
  },
  {
    quote: "웃음 없는 하루는 낭비한 하루이다",
    author: "찰리 채플린",
  },
  {
    quote: "운은 계획에서 비롯된다.",
    author: "브랜치 리키",
  },
  {
    quote:
      "우리는 남이 가진 것을 부러워하지만 다른 사람은 내가 가진것을 부러워하고있다.",
    author: "푸블릴리우스",
  },
  {
    quote: "행동으로 논리를 대변하고,결과로서 과정을 입증한다.",
    author: "707",
  },
  {
    quote: "안 되면 되게 하라",
    author: "특전사",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
