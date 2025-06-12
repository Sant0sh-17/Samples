let popupImg = document.querySelector(".popup-img")
let popupDiv =  document.querySelector(".popup")
let crossIcon =  document.querySelector(".icon")
let Images = document.querySelectorAll(".img-gallery img")
console.log(Images)
console.log(typeof Images)
console.log(Images)

for (img of Images){
    img.onclick = function(){
        popupDiv.style.visibility = "visible";
        popupImg.src = this.getAttribute("src")
    }
    crossIcon.onclick=function(){
        popupDiv.style.visibility = "hidden";

    }
}