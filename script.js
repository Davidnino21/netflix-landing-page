const signInBtn = document.querySelector(".sign-in")
const emailForm = document.querySelector("form")









signInBtn.addEventListener("click", function () {
    console.log(signInBtn)
})


emailForm.addEventListener("submit", function (e) {
    e.preventDefault()
        console.log(e)
})