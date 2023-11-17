// new Date()

const currentDate = new Date()
const birthday = new Date("1996-11-08")
// console.log(birthday)

// getDay => 0 Sunday - 6 Saturday
// console.log(birthday.getDay())

// getDate => 1 - 31
// console.log(birthday.getDate())

// getMonth => 0 January - 11 December
// console.log(birthday.getMonth())

// getFullYear
// console.log(birthday.getFullYear())

const $ = (selector) => document.querySelector(selector)

const legalAge = new Date("2006")

$("#input-date").addEventListener("input", (e) => {
    const userDate = e.target.valueAsDate
    if (legalAge.getFullYear() > userDate.getFullYear()) {
        console.log("Sos Mayor")
    } else {
        console.log("Sos Menor")
    }
})