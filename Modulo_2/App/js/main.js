/* UTILITIES */
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const randomId = () => self.crypto.randomUUID()
const showElement = (selectors) => {
    for (const selector of selectors) {
        $(selector).classList.remove("d-none")
    }
}
const hideElement = (selectors) => {
    for (const selector of selectors) {
        $(selector).classList.add("d-none")
    }
}

const getData = (key) => JSON.parse(localStorage.getItem(key))
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data))

const allUsers = getData("users") || []

/* RENDERS */
const renderUsers = (users) => {
    for (const user of users) {
        $("#table").innerHTML += `
            <tr>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>
                    <button class="btn btn-success" onclick="showFormEdit('${user.id}')"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-modal"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `
    }
}

const saveUserInfo = () => {
    return {
        id: randomId(),
        fullname: $("#fullname").value,
        email: $("#email").value,
        age: $("#age").value
    }
}

const showFormEdit = (userId) => {
    hideElement([".table", "#btn-submit"])
    showElement([".form", "#btn-edit"])
    $("#btn-edit").setAttribute("data-id", userId)
    const userSelected = getData("users").find(user => user.id === userId)
    $("#fullname").value = userSelected.fullname
    $("#email").value = userSelected.email
    $("#age").value = userSelected.age
}

/* EVENTS */

const initializeApp = () => {
    setData("users", allUsers)
    renderUsers(allUsers)
    $("#add-user-btn").addEventListener("click", () => {
        showElement([".form", "#btn-submit"])
        hideElement([".table", "#btn-edit"])
    })

    $("#btn-submit").addEventListener("click", (e) => {
        e.preventDefault()
        const currentData = getData("users")
        currentData.push(saveUserInfo())
        setData("users", currentData)
    })

    $("#btn-edit").addEventListener("click", (e) => {
        e.preventDefault()
        const userId = $("#btn-edit").getAttribute("data-id")
        const currentData = getData("users").map(user => {
            if (user.id === userId) {
                return saveUserInfo()
            }
            return user
        })
        setData("users", currentData)
        window.location.reload()
    })
}

window.addEventListener("load", initializeApp)