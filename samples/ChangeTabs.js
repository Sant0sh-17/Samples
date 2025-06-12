let myImg = document.getElementById("image")
let whatBtn = document.getElementById("what-btn")
let whyBtn = document.getElementById("why-btn")
let howBtn = document.getElementById("how-btn")
let changeContent = document.getElementById("content-para")


whatBtn.onclick = function()
{
    myImg.src = "https://img.freepik.com/premium-photo/man-with-question-mark-isolated-white_85869-9389.jpg?w=740"
    changeContent.innerHTML = "<p>quid tempora exercitationem tempore. Deleniti officia commodi iure quisquam quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi nobis numquam! Fugit ab optio aliquam similiqu <br> <br> <br>  esapiente quibusdam voluptatem laudantium porro? Obcaecati, labore nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae ipsam officiis quibusdam sequi sint, facere quam eos! Eaque laborum numquam assumenda sunt error quasi quam nihil odit cupiditat.</p>"

    whatBtn.style.borderBottom = "2px solid brown"
    whyBtn.style.borderBottom = "2px solid transparent"
    howBtn.style.borderBottom = "2px solid transparent"

} 

whyBtn.onclick = function(){
    myImg.src = "https://img.freepik.com/free-photo/successful-businesswoman-working-laptop-computer-thinks-new-ideas-her-office-dressed-up-white-clothes_231208-4810.jpg?t=st=1710135796~exp=1710139396~hmac=ff405a4ca00dffb2b5c78c8b342bc8d2b8344ae5f3536fc8ac32051111573645&w=740"
    changeContent.innerHTML = "<p>quid tempora exercitationem tempore. Deleniti officia commodi iure quisquam quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi nobis numquam! Fugit ab optio aliquam similiqu <br> <br> <br>  esapiente quibusdam voluptatem laudantium porro? Obcaecati, labore nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae ipsam officiis quibusdam sequi sint, facere quam eos! Eaque laborum numquam assumenda sunt error quasi quam nihil odit cupiditat.</p>"

    whyBtn.style.borderBottom = "2px solid brown"
    whatBtn.style.borderBottom = "2px solid transparent"
    howBtn.style.borderBottom = "2px solid transparent"

} 
howBtn.onclick = function(){
    myImg.src = "https://img.freepik.com/free-photo/clueless-young-handsome-man-looking-camera-showing-empty-hands-yellow-background_141793-130934.jpg?t=st=1710135772~exp=1710139372~hmac=e4bf7fc9096d3614a263452e165a4e3ab0c677ecd2379209a05c3eb6b6191e92&w=740"
    changeContent.innerHTML = "<p>quid tempora exercitationem tempore. Deleniti officia commodi iure quisquam quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi nobis numquam! Fugit ab optio aliquam similiqu <br> <br> <br>  esapiente quibusdam voluptatem laudantium porro? Obcaecati, labore nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae ipsam officiis quibusdam sequi sint, facere quam eos! Eaque laborum numquam assumenda sunt error quasi quam nihil odit cupiditat.</p>"

    whyBtn.style.borderBottom = "2px solid transparent"
    whatBtn.style.borderBottom = "2px solid transparent"
    howBtn.style.borderBottom = "2px solid brown"

} 