console.log("hello");
 let x= document.getElementById("navbarimg");
 console.log(x);
 let y= document.getElementById("navmenu");
 console.log(y);
 let z=document.getElementById("mapdiv");
 z.addEventListener("click",dir);
 function dir(){
   y.style.display="none";
 }
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
 let intro=document.getElementById("intro");
 window.addEventListener("scroll",myfunction4);
 function myfunction4(){
   if(document.body.scrollTop>=285||document.documentElement.scrollTop>=285){
     intro.className="abc";
   }
 };
 let divextravideo1=document.getElementById("extravideo1");
 divextravideo1.style.display="none";
 let watch1=document.getElementById("netspacewatchmore1");
 watch1.addEventListener("click",myfunction5);
 function myfunction5(){
   if (count % 2 == 0) {
     divextravideo1.style.display = "block";
     watch1.scrollIntoView(top);
     count++;
   }
   else {
     divextravideo1.style.display = "none";
     count++;
   }
 };

 let divextravideo2=document.getElementById("extravideo2");
 divextravideo2.style.display="none";
 let watch2=document.getElementById("martionwatchmore1");
 watch2.addEventListener("click",myfunction6);
 function myfunction6(){
   if (count % 2 == 0) {
     divextravideo2.style.display = "block";
     watch2.scrollIntoView(top);
     count++;
   }
   else {
     divextravideo2.style.display = "none";
     count++;
   }
 };