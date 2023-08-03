
var inEmail=document.getElementById("userEmail"); // Checks if user exists
var inPassword=document.getElementById("userPassword");

var upName = document.getElementById("username");
var upEmail = document.getElementById("useremail");
var upPassword = document.getElementById("userpassword");


var userContainer=[];


if(localStorage.getItem("users")!=null){

    userContainer=JSON.parse(localStorage.getItem("users"));
}


function createUser(){
for(var i=0;i<userContainer.length;i++)
{
    if(text==userContainer.email[i])
    {
        document.getElementById("error")="Email Already exists"
    }
    if(upName == "" || upEmail == "" || upPassword == "")
    {
        document.getElementById("error")="All inputs is required"
    }
    if (validateName() && validateEmail() && validatePassword())
    {
        var user={
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        userContainer.push(user);   
        localStorage.setItem("users",JSON.stringify(userContainer));  
        console.log(localStorage);
        clearForm();
    }
}
}



function validateName(){
    var text=upName.value;
    var usernameRegex = /^[a-zA-Z0-9_-]{3,16} [a-zA-Z0-9_-]{3,16}$/;

if (usernameRegex.test(text))
{
    cartona = "Valid username";
    document.getElementById("errorName").innerHTML = cartona;
    return true;
} 
else 
{
    cartona = "Invalid username";
    document.getElementById("errorName").innerHTML = cartona;
    return false;
}
}


function validateEmail(){
    var text=upEmail.value;
    var useremailRegex = /(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(useremailRegex.test(text))
    {
        cartona = "Valid email";
        document.getElementById("errorEmail").innerHTML = cartona;
        return true;
    }
    else
    { 
        cartona = "Invalid email";
        document.getElementById("errorEmail").innerHTML = cartona;
        return false;
    }
}

function validatePassword(){

    var text=upPassword.value;
    var userpassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(userpassRegex.test(text))
    {
        cartona = "Valid Password";
        document.getElementById("errorPassword").innerHTML = cartona;
        return true;
    }
    else
    { 
        cartona = "Invalid password";
        document.getElementById("errorPassword").innerHTML = cartona;
        return false;
    }
}


function clearForm()
{
    upName.value="";
    upEmail.value="";
    upPassword.value="";
}

