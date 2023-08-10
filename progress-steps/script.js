const progress =  document.getElementById('progress')
const prev= document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++
    
    if(currentActive>circles){
        currentActive=circles.length
    }
    console.log("currentActive="+currentActive);
    update()
})


prev.addEventListener('click', ()=>{
    currentActive--
    if(currentActive<1){
        currentActive=1
    }
    
    console.log("currentActive="+currentActive);
    update()
})

function update(){
    circles.forEach((circle, idx)=>{
        if(idx <currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    
    const actives = document.querySelectorAll(".active")
    console.log("actives", actives)
    progress.style.width = (actives.length -1 ) / (circles.length - 1) * 100 + '%'
    
    // console.log("active.length = " + actives.length-1)
    // console.log("circkle.length = " + circles.length - 1);
    console.log("width = " + progress.style.width);
    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
    
    
}

update()