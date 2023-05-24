function changeBorderColor() {
   document.getElementById("name-text").style.borderColor = "purple";
 }
 function toDefaultColor() {
   document.getElementById("name-text").style.borderColor = "";
 }
 function changeBorderColor2() {
   document.getElementById("signin-password").style.borderColor = "purple";
 }
 function toDefaultColor2() {
   document.getElementById("signin-password").style.borderColor = "";
 }
let passwordToggle = document.getElementById("password-toggle");
let passwordField = document.getElementById("signin-password");
function togglePasswordVisibility(){
   const changeType = passwordField.getAttribute("type") === "password"? "text" : "password";
   passwordField.setAttribute("type", changeType);
}