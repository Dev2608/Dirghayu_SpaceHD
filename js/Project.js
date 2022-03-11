let imgblackeye3 = document.getElementById("blackeye3");
let imgmartion1 = document.getElementById("martion1");
let imgmartion2 = document.getElementById("martion2");
let imgblackeye4 = document.getElementById("blackeye4");
let imgmartion3 = document.getElementById("martion3");
let imgblackeye5 = document.getElementById("blackeye5");
let imgmartion4 = document.getElementById("martion4");
let imgblackeye6 = document.getElementById("blackeye6");
let imgblackeye7 = document.getElementById("blackeye7");
let imgarray = new Array(imgmartion4, imgblackeye7, imgblackeye3, imgmartion3, imgblackeye5,
   imgmartion2, imgblackeye4, imgmartion1, imgblackeye6);
function meghayu(){
  imgarray[0].style.display = "none";
  imgarray[1].style.display = "none";
  imgarray[2].style.display = "none";
  imgarray[3].style.display = "none";
  imgarray[4].style.display = "none";
  imgarray[5].style.display = "none";
  imgarray[6].style.display = "none";
  imgarray[7].style.display = "none";
  imgarray[8].style.display = "none";
};
var m;
var n;
function dirg(m,n){
  setTimeout(fun,n);
  function fun(){
      meghayu();
      m.style.display="block";
  };
};
function meg(){
  for(let i=1;i<=9;i++){
      dirg(imgarray[i-1],2500*i);
  }
};
meg();
setInterval(meg1,20000);
imgarray[0].style.display = "block";
function meg1(){
  meg();
};
let countable=document.getElementById("countablediv");
let projavailabel=document.getElementById("availabelproj");
let projprocess=document.getElementById("processproj");
let projupcoming=document.getElementById("upcomingproj");
let countavailabel=document.getElementById("availabelcount");
let countprocess=document.getElementById("processcount");
let countupcoming=document.getElementById("upcomingcount");
var coordinate= countable.getBoundingClientRect();
console.log(coordinate.x);
console.log(coordinate.y);
window.addEventListener("scroll",myFunction);
function myFunction(){
  if(document.body.scrollTop>=530||document.documentElement.scrollTop>=530){
  projavailabel.style.display="block";
  projprocess.style.display="block";
  projupcoming.style.display="block";
  projavailabel.className="abc";
  projprocess.className="abc";
  projupcoming.className="abc";
  countavailabel.className="abc";
  countprocess.className="abc";
  countupcoming.className="abc";
  countavailabel.style.display="block";
  countprocess.style.display="block";
  countupcoming.style.display="block";
  }
};
  let intial=0;
counts=setInterval(countfun,1200);
function countfun(){
  countavailabel.innerHTML=++intial;
  if(intial===2){
    clearInterval(counts);
  }
};
let intial2=0;
counts2=setInterval(countfun2,1200);
function countfun2(){
  countprocess.innerHTML=++intial2;
  if(intial2===6){
    clearInterval(counts2);
  }
};
let intial3=0;
counts3=setInterval(countfun3,1200);
function countfun3(){
  countupcoming.innerHTML=++intial3;
  if(intial3===9){
    clearInterval(counts3);
    }
  };
let projimg1=document.getElementById("project1img");
window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=840||document.documentElement.scrollTop>=840){
    projimg1.className="anmprojimg1";
  }
 });
 let projimg2=document.getElementById("project2img");
 window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=1350||document.documentElement.scrollTop>=1350){
    projimg2.className="anmprojimg2";
  }
 });
 let projpara1=document.getElementById("project1para");
 window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=840||document.documentElement.scrollTop>=840){
    projpara1.className="anmprojpara1";
  }
 });
 let projpara2=document.getElementById("project2para");
 window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=1350||document.documentElement.scrollTop>=1350){
    projpara2.className="anmprojpara2";
  }
 });