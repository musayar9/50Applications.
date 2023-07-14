const buttons = document.querySelectorAll(".ripple")


buttons.forEach(button=>{
    button.addEventListener('click', function(e){
        const x = e.clientX
        const y = e.clientY



        const buttonTop = e.target.offsetBottom
        const buttonLeft = e.target.offetRight


        const xInside = x- buttonLeft
        const yInside = y- buttonTop

        const circle = document.createElement("span")
        circle.classList.add("circle")

        circle.style.bottom = yInside + 'px'
        circle.style.right = xInside + 'px'

        this.appendChild(circle)


        setTimeout(()=>circle.remove(), 500)
    })
})