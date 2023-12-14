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
const cleanContainer = (selector) => $(selector).innerHTML = ""

const getData = (key) => JSON.parse(localStorage.getItem(key))
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data))

const defaultProfessions = [
{
    id: randomId(),
    professionName: "Developer"
},
{
    id: randomId(),
    professionName: "Designer"
},
{
    id: randomId(),
    professionName: "Project Manager"
},
{
    id: randomId(),
    professionName: "SCRUM Master"
}
]

const allUsers = getData("users") || []
const allProfessions = getData("professions") || defaultProfessions

/* RENDERS */
const renderUsers = (users) => {
    cleanContainer("#table")
    if (users.length) {
        hideElement([".no-results"])
        showElement([".table"])
        for (const user of users) {
            const professionSelected = getData("professions").find(profession => profession.id === user.profession)
            $("#table").innerHTML += `
                <tr>
                    <td>${user.fullname}</td>
                    <td>${user.email}</td>
                    <td>${professionSelected.professionName}</td>
                    <td>${user.age}</td>
                    <td>
                        <button class="btn btn-success" onclick="showFormEdit('${user.id}')"><i class="fa-solid fa-pencil"></i></button>
                        <button type="button" class="btn btn-danger" onclick="openModalDelete('${user.id}', '${user.fullname}')" data-bs-toggle="modal" data-bs-target="#delete-modal"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `
        }
    } else {
        showElement([".no-results"])
        hideElement([".table"])
    }
}

const renderProfessionsTable = (professions) => {
    cleanContainer("#table-professions")
    for (const profession of professions) {
        $("#table-professions").innerHTML += `
            <tr>
                <td>${profession.professionName}</td>
                <td>
                    <button class="btn btn-success"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="btn btn-danger" onclick="deleteAction('${profession.id}')"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `
    }
}

const renderProfessionOptions = (professions) => {
    for (const profession of professions) {
        $("#professions").innerHTML += `
            <option value="${profession.id}">${profession.professionName}</option>
        `
        $("#filter-professions").innerHTML += `
            <option value="${profession.id}">${profession.professionName}</option>
        `
    }
}

/* Data handlers */
const saveUserInfo = (userId) => {
    return {
        id: userId ? userId : randomId(),
        fullname: $("#fullname").value,
        profession: $("#professions").value,
        email: $("#email").value,
        age: $("#age").valueAsNumber
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

const openModalDelete = (userId, userFullName) => {
    $("#btn-delete").setAttribute("data-id", userId)
    $(".user-name").innerText = `${userFullName}`
    $("#btn-delete").addEventListener("click", () => {
        const userId = $("#btn-delete").getAttribute("data-id")
        deleteUser(userId)
        window.location.reload()
    })
}

const deleteUser = (userId) => {
    const currentData = getData("users").filter(user => user.id != userId)
    setData("users", currentData)
}

const addUser = () => {
    const currentData = getData("users")
    currentData.push(saveUserInfo())
    setData("users", currentData)
}

const editUser = () => {
    const userId = $("#btn-edit").getAttribute("data-id")
    const currentData = getData("users").map(user => {
        if (user.id === userId) {
            return saveUserInfo(userId)
        }
        return user
    })
    setData("users", currentData)
}

const deleteProfession = (professionId) => {
    const currentProfession = getData("professions").filter(profession => profession.id != professionId)
    setData("professions", currentProfession)
    return currentProfession
}

const deleteAction = (professionId) => { 
    renderProfessionsTable(deleteProfession(professionId))
    const currentData = getData("users").filter(user => user.profession != professionId)
    setData("users", currentData)
}

const calculateAgeAverage = () => {
    const currentData = getData("users")
    let acc = 0
    for (const user of currentData) {
        acc += user.age
    }
    return Math.round(acc / currentData.length)
}

/* Validations */

const validateForm = (field) => {
    const regEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    const fullname = $("#fullname").value.trim()
    const email = $("#email").value.trim()
    const age = $("#age").valueAsNumber
    const validationPassed = fullname !== "" && regEmail.test(email) && age > 0

    switch (field) {
        case "fullname":
            if (fullname === "") {
                showElement([".fullname-error"])
                $("#fullname").classList.add("border-danger")
            } else {
                hideElement([".fullname-error"])
                $("#fullname").classList.remove("border-danger")
            }
            break
        case "email":
            if (!regEmail.test(email)) {
                showElement([".email-error"])
                $("#email").classList.add("border-danger")
            } else {
                hideElement([".email-error"])
                $("#email").classList.remove("border-danger")
            }
            break
        case "age":
            if (!age) {
                showElement([".age-error"])
                $("#age").classList.add("border-danger")
            } else {
                hideElement([".age-error"])
                $("#age").classList.remove("border-danger")
            }
            break
        default:
            alert("Error")
    }
    if (validationPassed) {
        $("#btn-submit").removeAttribute("disabled")
    } else {
        $("#btn-submit").setAttribute("disabled", true)
    }
}

/* EVENTS */

const initializeApp = () => {
    setData("users", allUsers)
    setData("professions", allProfessions)
    renderUsers(allUsers)
    renderProfessionsTable(allProfessions)
    renderProfessionOptions(allProfessions)
    $("#age-average").innerText = calculateAgeAverage()
    $("#add-user-btn").addEventListener("click", () => {
        $(".form").reset()
        showElement([".form", "#btn-submit"])
        hideElement([".table", "#btn-edit", ".no-results", ".table-professions", ".form-profession", ".filters"])
    })

    $("#btn-submit").addEventListener("click", (e) => {
        e.preventDefault()
        addUser()
        $(".form").reset()
    })

    $("#btn-edit").addEventListener("click", (e) => {
        e.preventDefault()
        editUser()
        window.location.reload()
    })

    $("#add-profession-btn").addEventListener("click", () => {
        hideElement([".table", ".no-results", ".form", ".filters"])
        showElement([".form-profession", ".table-professions"])
    })

    $("#filter-professions").addEventListener("input", (e) => {
        const professionId = e.target.value
        const currentData = getData("users")
        const filteredUsers = currentData.filter(user => user.profession === professionId)
        renderUsers(filteredUsers)
    })

    $("#fullname").addEventListener("blur", () => validateForm("fullname"))
    $("#email").addEventListener("blur", () => validateForm("email"))
    $("#age").addEventListener("blur", () => validateForm("age"))
}

window.addEventListener("load", initializeApp)