const hamburger = document.querySelector(".hide");
const navigation = document.querySelector(".nav2")

hamburger.addEventListener("click", function () {
    if (hamburger.innerText === "☰") {
        hamburger.innerText = "✕"
        navigation.classList.add("open")
    }
    else if (hamburger.innerText === "✕") {
        hamburger.innerText = "☰"
        navigation.classList.remove("open")

    }


})