let bulbImg = document.querySelector(".bulb-img")
let catImg = document.querySelector(".cat-img")
let switchStatus = document.getElementById("switch-status")
let onButton = document.getElementById("btn-on")
let offButton = document.getElementById("btn-off")

console.log(bulbImg)
console.log(catImg)
function switchedOff()
{
   bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
   catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
   switchStatus.textContent = "Switched Off"
   onButton.style.backgroundColor = "green"
   onButton.style.color = "white"
   offButton.style.color = "gray"
   offButton.style.backgroundColor = "rgb(207, 199, 199)"
}
function switchedOn()
{
    bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchStatus.textContent = "Switched On"
    onButton.style.backgroundColor = "rgb(207, 199, 199)"
    onButton.style.color = "gray"
    offButton.style.color = "white"
    offButton.style.backgroundColor = "red"
 }