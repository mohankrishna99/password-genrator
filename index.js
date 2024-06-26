let possibleChars = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    1,2,3,4,5,6,7,8,9,0,
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    '!','@','#','$','*','%','&'
    ]
let pwd1 = document.getElementById('pwd1')
let pwd2 = document.getElementById('pwd2')
let pwd3 = document.getElementById('pwd3')
let pwd4 = document.getElementById('pwd4')
let inp = document.getElementById('input')
let isDarkMode = true
const pwdGenBtn = document.getElementById("pwdgen-btn")
const darkModeBtn = document.getElementById("darkmode-btn")

pwdGenBtn.addEventListener("click", function () {
    let pwdLen = 8
    if(inp.value >= 1 && inp.value <= 15){
        pwdLen = inp.value
    } else if (inp.value === "") {
        pwdLen = 8
    } else {
        alert("Enter a valid number between 1 and 15")
        return
    }
    
    pwd1.textContent = pwdGenerator(pwdLen)
    pwd2.textContent = pwdGenerator(pwdLen)
    pwd3.textContent = pwdGenerator(pwdLen)
    pwd4.textContent = pwdGenerator(pwdLen)

    //for( let i = 0; i < pwdLen; i++) {
        //pwd1.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    //}
    
    // for( let i = 0; i < pwdLen; i++) {
    //     pwd2.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    // }
    
    // for( let i = 0; i < pwdLen; i++) {
    //     pwd3.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    // }
    
    // for( let i = 0; i < pwdLen; i++) {
    //     pwd4.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    // }
})

function pwdGenerator(len){
    let pwd = ""
    for(let i = 0; i < len; i++){
        pwd += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }
    return pwd
}

darkModeBtn.addEventListener("click", function () {
    if (isDarkMode === true) {
        document.querySelector("html").style.backgroundColor = "#ecfdf5"
        document.querySelector("body").style.backgroundColor = "#ecfdf5"
        document.querySelector("h1").style.color = "#1c1c1c"
        isDarkMode = false
    } else if (isDarkMode === false) {
        document.querySelector("html").style.backgroundColor = "#1F2937"
        document.querySelector("body").style.backgroundColor = "#1F2937"
        document.querySelector("h1").style.color = "white"
        isDarkMode = true
    }
})