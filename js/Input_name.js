function Input_name_alt() {
  var txt;
  var name = prompt("Input your name", "");
  txt = "My name is " + name;
  document.getElementById("demo").innerHTML=txt;
}
