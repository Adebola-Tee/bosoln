let passwordToggle = document.getElementById("password-toggle");
let passwordField = document.getElementById("signin-password");
function togglePasswordVisibility(){
   const changeType = passwordField.getAttribute("type") === "password"? "text" : "password";
   passwordField.setAttribute("type", changeType);
}