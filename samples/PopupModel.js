
let popupDiv = document.querySelector(".popup")

let formDiv =  document.querySelector(".form-div")
function openPopUp(){
    popupDiv.classList.add("active")
    formDiv.style.display="none"

}
function closePopUp(){
    popupDiv.classList.remove("active")

}