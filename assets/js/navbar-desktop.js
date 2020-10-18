// Handling if the login button being clicked
let loginBtn = document.getElementById('loginbtn-desktop')

loginBtn.addEventListener('click',function (e) {  
    document.getElementById('login-desktop').classList.toggle('hide-navbar')
})