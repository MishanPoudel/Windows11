let start = document.getElementsByClassName("start")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

start.addEventListener("click", () => {
  if (startmenu.style.bottom == "60px") {
    startmenu.style.bottom = "-660px";
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
let flower = document.querySelector(".flower");
let flowers = document.querySelector(".flowers");
let black = document.querySelector(".black");
let error = new Audio("/sounds/error.mp3");

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
let x = document.querySelector(".close")

function closeBlack() {
  black.style.bottom = "-1000px";
}

no.addEventListener("click", closeBlack);
close.addEventListener("click", closeBlack);
yes.addEventListener("click", () => {
  closeBlack();
  malware.style.top = "50%";
});
close1.addEventListener("click", () => {
  malware.style.top = "150%";
});
submit.addEventListener("click", () => {
  malware.style.top = "150%";
});

flower.addEventListener("dblclick", ()=>{
  if( flowers.style.display == "none" ){
    flowers.style.display = "block";
  }else{
    flowers.style.display = "none";
  }
});

const wrapper = document.querySelector(".wrapper");
const topElement = wrapper.querySelector(".top");

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper);
  let left = parseInt(getStyle.left);
  let currentTop = parseInt(getStyle.top);
  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${currentTop + movementY}px`;
}

topElement.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", onDrag);

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onDrag);
  });
});

x.addEventListener("click",()=>{
  if(flowers.style.display = "block"){
    flowers.style.display = "none";
  }
});
