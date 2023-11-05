let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", ()=> {
    if (startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }else{
        startmenu.style.bottom = "50px"
    }
})


function updateTime() {
    const currentDateTime = new Date();

    // Get the date in MM/DD/YYYY format
    const dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const date = currentDateTime.toLocaleDateString([], dateOptions);

    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const time = currentDateTime.toLocaleTimeString([], timeOptions);

    const timeContainer = document.querySelector('.time');
    const dateContainer = document.querySelector('.date');

    timeContainer.textContent = `${time}`;
    dateContainer.textContent = `${date}`;
}

updateTime(); // Call the function immediately to display the time and date
setInterval(updateTime, 1000); // Update time and date every second
