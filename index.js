function validate(){
  if(document.Formfill.Username.value == ""){
    document.getElementById("result").innerHTML= "Enter a username";
    return false;
  }
}