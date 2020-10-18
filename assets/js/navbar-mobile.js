//handler for the navbar mobile

let barButton = document.getElementById('bar');
let hideLeftButton = document.getElementById('hide-left');
let loginButton = document.getElementById('login-btn');
let hideRightButton = document.getElementById('hide-right');

barButton.addEventListener('click',function () { 
  document.getElementById('sidebar-left').classList.add('active-left');
  document.getElementById('overlay').classList.add('active');
});

hideLeftButton.addEventListener('click',function () {  
  document.getElementById('sidebar-left').classList.remove('active-left');
  document.getElementById('overlay').classList.remove('active');
})

loginButton.addEventListener('click',function () {  
  document.getElementById('sidebar-right').classList.add('active-right');
  document.getElementById('overlay').classList.add('active');
})

hideRightButton.addEventListener('click',function () {  
  document.getElementById('sidebar-right').classList.remove('active-right');
  document.getElementById('overlay').classList.remove('active');
})