const $ = (selector) => document.querySelector(selector)

$("#btn-open-modal").addEventListener("click", () => {
    $("#modal-container").style.display = "block"
})

$("#btn-close-modal").addEventListener("click", () => {
    $("#modal-container").style.display = "none"
})

// keydown, keypress, keyup

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        $("#modal-container").style.display = "none"
    }
    // e.key === "Escape" ? $("#modal-container").style.display = "none" : null
})

window.addEventListener("click", (e) => {
    if (e.target === $("#modal-container")) {
        $("#modal-container").style.display = "none"
    }
})