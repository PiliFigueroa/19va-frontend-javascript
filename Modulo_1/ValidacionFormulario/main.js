const $ = (selector) => document.querySelector(selector)

/*
- Que el username no este vacio
- Que el email no este vacio
- Que la contraseña tenga al menos 8 caracteres
- Que las contraseñas coincidan
*/

const validateEmpty = (value) => {
    return value != ""
}

const validateLength = (value) => {
    return value.length >= 8
}

const validateConfirmInput = (input, confirmInput) => {
    return input === confirmInput
}

const handleFormErrors = () => {
    if (!validateEmpty($("#username").value)) {
        $(".username--error").classList.remove("visibility--hidden")
        $("#username").classList.add("error")
    } else {
        $(".username--error").classList.add("visibility--hidden")
        $("#username").classList.remove("error")
    }

    if (!validateEmpty($("#email").value)) {
        $(".email--error").classList.remove("visibility--hidden")
        $("#email").classList.add("error")
    } else {
        $(".email--error").classList.add("visibility--hidden")
        $("#email").classList.remove("error")
    }

    if (!validateLength($("#password").value)) {
        $(".password--error").classList.remove("visibility--hidden")
        $("#password").classList.add("error")
    } else {
        $(".password--error").classList.add("visibility--hidden")
        $("#password").classList.remove("error")
    }

    if (!validateConfirmInput($("#password").value, $("#confirm-password").value)) {
        $(".confirm-password--error").classList.remove("visibility--hidden")
        $("#confirm-password").classList.add("error")
    } else {
        $(".confirm-password--error").classList.add("visibility--hidden")
        $("#confirm-password").classList.remove("error")
    }
}

$(".form").addEventListener("submit", (e) => {
    e.preventDefault()
    handleFormErrors()
    if (validateEmpty($("#username").value) && validateEmpty($("#email").value) && validateLength($("#password").value) && validateConfirmInput($("#password").value, $("#confirm-password").value)) {
        alert("Gracias por registrarte")
        $(".form").reset()
    }
})