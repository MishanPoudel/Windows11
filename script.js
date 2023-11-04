let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", ()=> {
    if (startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }else{
        startmenu.style.bottom = "50px"
    }
})