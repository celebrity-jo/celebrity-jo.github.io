function plusnum(element) {
  var txt = document.getElementById("demo").textContent;
  var num = Number(element.textContent);
  num++;
  document.getElementById("demo").innerHTML = num;
}
