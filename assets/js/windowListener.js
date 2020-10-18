// This file is script for listening windows 
// So the navbar will change by the size of the windows

if(window.innerWidth < 1000){
    document.getElementById('navbar-desktop').classList.add("hide-navbar")        
    document.getElementById('navbar-mobile').classList.remove("hide-navbar")
    if(!document.getElementById('login-desktop').classList.contains('hide-navbar')){
        document.getElementById('login-desktop').classList.add('hide-navbar')
    }
}
else{
    document.getElementById('navbar-desktop').classList.remove("hide-navbar")
    document.getElementById('navbar-mobile').classList.add("hide-navbar")
    let sidebarLeft = document.getElementById('sidebar-left')
    let sidebarRight = document.getElementById('sidebar-right')
    if(sidebarLeft.classList.contains('active-left') || sidebarRight.classList.contains('active-right')){
        sidebarLeft.classList.remove('active-left')
        sidebarRight.classList.remove('active-right')
        document.getElementById('overlay').classList.remove('active');
    }
}


window.addEventListener('resize',function (e) { 
    if(window.innerWidth < 1000){
        document.getElementById('navbar-desktop').classList.add("hide-navbar")        
        document.getElementById('navbar-mobile').classList.remove("hide-navbar")
        if(!document.getElementById('login-desktop').classList.contains('hide-navbar')){
            document.getElementById('login-desktop').classList.add('hide-navbar')
        }
    }
    else{
        document.getElementById('navbar-desktop').classList.remove("hide-navbar")
        document.getElementById('navbar-mobile').classList.add("hide-navbar")
        let sidebarLeft = document.getElementById('sidebar-left')
        let sidebarRight = document.getElementById('sidebar-right')
        if(sidebarLeft.classList.contains('active-left') || sidebarRight.classList.contains('active-right')){
            sidebarLeft.classList.remove('active-left')
            sidebarRight.classList.remove('active-right')
            document.getElementById('overlay').classList.remove('active');
        }
    }
 })