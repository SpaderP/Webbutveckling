function lalala(){
  var res= "";
  res = res + isNaN(1) + "<br>";
  res = res + isNaN('123') + "<br>";
  res = res + isNaN(false) + "<br>";
  res = res + isNaN(true) + "<br>";
document.getElementById("demo").innerHTML = res;
}
