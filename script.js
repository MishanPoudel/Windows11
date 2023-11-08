let start = document.getElementsByClassName("start")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

start.addEventListener("click", () => {
  if (startmenu.style.bottom == "60px") {
    startmenu.style.bottom = "-655px";
  } else {
    startmenu.style.bottom = "60px";
  }
});

function updateTime() {
  const currentDateTime = new Date();

  const dateOptions = { month: "2-digit", day: "2-digit", year: "numeric" };
  const date = currentDateTime.toLocaleDateString([], dateOptions);

  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const time = currentDateTime.toLocaleTimeString([], timeOptions);

  const timeContainer = document.querySelector(".time");
  const dateContainer = document.querySelector(".date");

  timeContainer.textContent = `${time}`;
  dateContainer.textContent = `${date}`;
}

updateTime();
setInterval(updateTime, 1000);



let free = document.querySelector(".free");
let black = document.querySelector(".black");
let error = new Audio('/sounds/error.mp3');

free.addEventListener("dblclick", () => {
    black.style.bottom = "0px";
    error.play();
});

let no = document.querySelector(".black .b2");
let yes = document.querySelector(".black .b1");
let close = document.querySelector(".black .close");
let close1 = document.querySelector(".malware .close");
let malware = document.querySelector(".malware");
let submit = document.querySelector(".malware button");

function closeBlack(){
  black.style.bottom = "-1000px";
}

no.addEventListener("click", closeBlack);
close.addEventListener("click", closeBlack);
yes.addEventListener("click", () => {
  closeBlack();
  malware.style.top = "50%";
});
close1.addEventListener("click", ()=> {
  malware.style.top = "150%";
});
submit.addEventListener("click", ()=> {
  malware.style.top = "150%";
});