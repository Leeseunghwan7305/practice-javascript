const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const chrismas = new Date("December 25,2021 00:00:00");
  const gap = chrismas - date;
  if (gap < 0) {
    alert("merry Chrisams!");
  } else {
    const days = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
    const hours = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
      2,
      "0"
    ); // 시
    const minutes = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    ); // 분
    const seconds = String(Math.floor((gap / 1000) % 60)).padStart(2, "0"); // 초
    clock.innerText = `${days}D ${hours}H ${minutes}M ${seconds}S`;
  }
}
getClock();
setInterval(getClock, 1000);
