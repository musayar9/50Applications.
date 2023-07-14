const smallCups = document.querySelectorAll(".cup-small");
const litters = document.getElementById("litters");
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

console.log("small cups: ", smallCups);
smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => { 
    console.log(idx);
    highlightCups(idx) })
})
function highlightCups(idx) {
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    else if (smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
        idx--
        console.log(smallCups[idx]);
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full")
        } else {
            cup.classList.remove("full")
        }
    })

    updateBigCup()
}

function updateBigCup() {

    const fullCups = document.querySelectorAll(".cup-small.full").length
    console.log("fullCups", fullCups);
    const totalCups = smallCups.length;
    console.log("totalcup: ", totalCups);
    if (fullCups === 0) {
        percentage.style.visibility = "hidden"
        percentage.style.height = 0
    } else {
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0

    } else {
        remained.style.visibility = "visible";
        litters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}