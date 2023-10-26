const mainContainer = document.querySelector(".rating__card")
const thanksContainer = document.querySelector(".thank__you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate__again")
const rating = document.getElementById("rating")
const score = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display="none"
})

rateAgain.addEventListener("click", () =>{
    thanksContainer.classList.add("hidden")
    mainContainer.style.display="block"
    rating.innerHTML = ("0")
})

score.forEach((rate) => {
    rate.addEventListener("click" , () => {
        rating.innerHTML = rate.innerHTML
    })

})