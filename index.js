let possibleChars = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9,0,'!','@','#','$','*','%','&'
    ]
let pwd1 = document.getElementById('pwd1')
let pwd2 = document.getElementById('pwd2')
let pwd3 = document.getElementById('pwd3')
let pwd4 = document.getElementById('pwd4')
function pwdGen() {
    pwd1.textContent = ''
    for( let i = 0; i < 8; i++) {
        pwd1.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }

    pwd2.textContent = ''
    for( let i = 0; i < 8; i++) {
        pwd2.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }

    pwd3.textContent = ''
    for( let i = 0; i < 8; i++) {
        pwd3.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }

    pwd4.textContent = ''
    for( let i = 0; i < 8; i++) {
        pwd4.textContent += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    }
}