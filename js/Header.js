console.log("hello");
let x = document.getElementById("navbarimg");
console.log(x);
let y = document.getElementById("navmenu");
console.log(y);
let count = 2;
x.addEventListener("click", myFunction);
function myFunction() {
  if (count % 2 == 0) {
    y.style.display = "block";
    count++;
  }
  else {
    y.style.display = "none";
    count++;
  }
};