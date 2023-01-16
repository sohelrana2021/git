
let btn1 = document.querySelector(".btn1")
let dropdown = document.querySelector(".dropdown")
let down = document.querySelector(".fa-angle-down")

btn1.addEventListener("click", function(){
    if( dropdown.style.display == "block"){
        dropdown.style.display = "none"
        down.style.transform ="rotate(0deg)"
    }else{
        dropdown.style.display ="block"
        down.style.transform ="rotate(180deg)"
    }
})