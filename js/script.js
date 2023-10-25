const empForm = document.getElementById('empForm')

empForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // parseFloat(name.value),
    // parseFloat(id.value),
    // parseFloat(ext.value)
    // parseFloat(email.value)
    // parseFloat(department.value)
    // parseFloat(submit.value)
const name = document.getElementById("id").value
console.log(`8-Digit Employee ID: ${name}`)
const id = document.getElementById("name").value
console.log(`Full Name: ${id}`)
const ext = document.getElementById("ext").value
console.log(`4-Digit Extension: ${ext}`)
const email = document.getElementById("email").value
console.log(`E-mail ${email}`)
const department = document.getElementById("department").value
console.log(`Department: ${department}`)
const submit = document.getElementById("submit").value
})
// empForm.innerHTML = id.value + ext.value


