


var username;
if (localStorage.getItem('sessionUsername')!=null) {
    
    userName=JSON.parse(localStorage.getItem("sessionUsername"));
}

var welcome = '<h1 class="text-center text-white"> Welcome ${username}</h1>'

document.getElementById("DisplayWelcome").innerHTML=welcome;



function logout(){
    localStorage.removeItem("sessionUsername");
}