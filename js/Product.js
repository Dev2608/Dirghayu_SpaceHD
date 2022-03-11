let imgnet = document.getElementById("net_origin");
let imgapollo = document.getElementById("apollo_plate");
let imgapollo1 = document.getElementById("apollo_plate1");
let imgnet1 = document.getElementById("net_origin1");
let imgapollo2 = document.getElementById("apollo_plate2");
let imgnet2 = document.getElementById("net_origin2");
let imgapollo3 = document.getElementById("apollo_plate3");
let imgnet3 = document.getElementById("net_origin3");
let imgnet4 = document.getElementById("net_origin4");
let imgarray = new Array(imgapollo1, imgnet2, imgapollo2, imgnet3, imgapollo,
   imgnet4, imgapollo3, imgnet, imgnet1);
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
let proavailabel=document.getElementById("availabelpro");
let proprocess=document.getElementById("processpro");
let proupcoming=document.getElementById("upcomingpro");
let countavailabel=document.getElementById("availabelcount");
let countprocess=document.getElementById("processcount");
let countupcoming=document.getElementById("upcomingcount");
var coordinate= countable.getBoundingClientRect();
console.log(coordinate.x);
console.log(coordinate.y);
window.addEventListener("scroll",myFunction);
function myFunction(){
  if(document.body.scrollTop>=530||document.documentElement.scrollTop>=530){
  proavailabel.style.display="block";
  proprocess.style.display="block";
  proupcoming.style.display="block";
  proavailabel.className="abc";
  proprocess.className="abc";
  proupcoming.className="abc";
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
  if(intial2===5){
    clearInterval(counts2);
  }
};
let intial3=0;
counts3=setInterval(countfun3,1200);
function countfun3(){
  countupcoming.innerHTML=++intial3;
  if(intial3===7){
    clearInterval(counts3);
    }
  };
let proimg1=document.getElementById("product1img");
window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=840||document.documentElement.scrollTop>=840){
    proimg1.className="anmproimg1";
  }
 });
 let proimg2=document.getElementById("product2img");
 window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=1350||document.documentElement.scrollTop>=1350){
    proimg2.className="anmproimg2";
  }
 });
 let propara1=document.getElementById("product1para");
 window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=840||document.documentElement.scrollTop>=840){
    propara1.className="anmpropara1";
  }
 });
 let propara2=document.getElementById("product2para");
 window.addEventListener("scroll",function(){
  if(document.body.scrollTop>=1350||document.documentElement.scrollTop>=1350){
    propara2.className="anmpropara2";
  }
 });
 



















