const $ = (selector) => document.querySelector(selector)

$(".change-theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
    if (currentTheme) {
        $("body").removeAttribute("data-theme", "light-theme")
    } else {
        $("body").setAttribute("data-theme", "light-theme")
    }
    $("#lightbulb-off").classList.toggle("hidden")
    $("#lightbulb-on").classList.toggle("hidden")
})