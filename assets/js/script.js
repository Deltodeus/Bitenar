var form = document.getElementsByTagName('form')[0];

form.onsubmit = function(e){
    let formData = new FormData(form);
    
    let name = formData.get('name');
    let gender = formData.get('gender');
    let email = formData.get('email');
    let password = formData.get('password');
    let confpass = formData.get('confpass');
    let tnc = formData.get('tnc');
    let dob = formData.get('dob');

    if (name.length <= 0) {
        alert('Name must be filled');
        e.preventDefault();
    }
    else if (dob === "") {
        alert("You must choose Date of Birth");
        e.preventDefault();
    }
    else if (gender!=="male" && gender!=="female") {
        alert("Gender must be filled");
        e.preventDefault();
    }
    else if (password === "") {
        alert("Password must be filled");
        e.preventDefault();
    }
    else if (confpass === "") {
        alert("Confirmation Password must be filled");
        e.preventDefault();
    }
    else if (confpass !== password) {
        alert("Confirmation Password must same with Password");
        e.preventDefault();
    }
    else{
        alert('Register Success');
    }
}