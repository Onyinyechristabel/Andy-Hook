const hamburger = document.querySelector(".hide");
const navigation = document.querySelector(".nav2");
const body = document.querySelector("body")

hamburger.addEventListener("click", function () {
    if (hamburger.innerText === "☰") {
        hamburger.innerText = "✕"
        navigation.classList.add("open")
        body.classList.add("noscroll")
    }
    else if (hamburger.innerText === "✕") {
        hamburger.innerText = "☰"
        navigation.classList.remove("open")
        body.classList.remove("noscroll")

    }


})