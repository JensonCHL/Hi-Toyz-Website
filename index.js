
function validate() {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const male = document.getElementById("male")
    const female = document.getElementById("female")
    const agreement = document.getElementById("agreement")
    const age = document.getElementById("age").value

    // validate
    if (username.length < 5) {
        //alert("Username must be at least 5 character long")
        document.getElementById("error_msg").innerHTML = "Username Must be 5 Char long<br>"
    } else if (!email.endsWith("@gmail.com")) {
        alert("Must be with g mail")

    } else if (password.length < 8 || isAlphaNum(password) == false) {
        alert("Pass must be at least 8 char long and alpha numeric")
    } else if (age < 10) {
        alert("Cannot under 10 y.o")

    } else if (!male.checked && !female.checked) {
        alert("Please select your gender")
    } else if (!agreement.checked) {
        alert("Must agree to terms and conditions")
    } else window.location.href = "index.html"
}

function isAlphaNum(string) {
    var isAlpha = false
    var isNum = false
    for (let i = 0; i < string.length; i++) {
        if (isNaN(string[i])) {
            isAlpha = true
        } else {
            isNum = true
        }

    }
    if (isAlpha == false && isNum == false) return false
    else return true

}