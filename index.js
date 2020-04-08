document.addEventListener("scroll", ()=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset > 150){
        document.querySelector("header").classList.add("scroll")
        document.querySelector("img").style.height="90%"
        console.log("jest")
    } else {
        document.querySelector("header").classList.remove("scroll")
    } 
})
