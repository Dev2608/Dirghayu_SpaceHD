console.log("hello");
 let x= document.getElementById("navbarimg");
 console.log(x);
 let y= document.getElementById("navmenu");
 console.log(y);
 let count=2;
 x.addEventListener("click",myFunction);
 function myFunction() {
     if(count%2==0){
  y.style.display="block";
  count++;
     }
     else{
             y.style.display="none";
             count++;
     }
  };
  let a=document.getElementById("blackeyeimg");
  a.addEventListener("mouseenter",myFunction2);
  function myFunction2() {
    a.style.display="none";
  };
  a.addEventListener("mouseleave",myfunction3);
  function myfunction3() {
    a.style.display="block";
  };
 let b= document.getElementById("readblackeye");
 b.addEventListener("mouseenter",myFunction2);
 b.addEventListener("mouseleave",myfunction2);

