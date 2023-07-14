// let x= [1,2,3,6,7,8,9]
// let y = x.slice();
// y.push(5)

// console.log("y", y);
// console.log(x.length, y.length);


const body= document.body;
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let activeSlide = 0


rightBtn.addEventListener('click', ()=>{
    activeSlide++

    if(activeSlide > slides.length -1 ){
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})



leftBtn.addEventListener('click',()=>{
    activeSlide--

    if(activeSlide<0){
        activeSlide = slides.length-1
    }
    setBgToBody()
    setActiveSlide()
})
function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach((slide)=>slide.classList.remove("active"))

    slides[activeSlide].classList.add("active")
    console.log(slides[activeSlide]);
}