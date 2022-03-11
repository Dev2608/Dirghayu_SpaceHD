console.log("hello");
let company1=document.getElementById("company1");
let company2=document.getElementById("company2");
let company3=document.getElementById("company3");
let company4=document.getElementById("company4");
let company5=document.getElementById("company5");
let company6=document.getElementById("company6");
let company7=document.getElementById("company7");
let company8=document.getElementById("company8");
let company9=document.getElementById("company9");
let imgarray=new Array(company1,company9,company2,company3,company4,company5,
    company6,company8,company7);
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
  let spacehd=document.getElementById("spacehd");
  window.addEventListener("scroll",myfunction);
  function myfunction(){
   if( document.body.scrollTop>=418||document.documentElement.scrollTop>=418){
     spacehd.className="abc";
   }
  };
  let vision=document.getElementById("vision");
  window.addEventListener("scroll",myfunction1);
  function myfunction1(){
   if( document.body.scrollTop>=749||document.documentElement.scrollTop>=749){
     vision.className="abc";
   }
  };
  let visioncontent1=document.getElementById("visioncontent1");
  let visioncontent2=document.getElementById("visioncontent2");
  window.addEventListener("scroll",myfunction2);
  function myfunction2(){
   if( document.body.scrollTop>=920||document.documentElement.scrollTop>=920){
     visioncontent1.className="abc";
     visioncontent2.className="abc";
   }
  };
  let futurepara=document.getElementById("futurepara");
  window.addEventListener("scroll",myfunction3);
  function myfunction3(){
   if( document.body.scrollTop>=1315||document.documentElement.scrollTop>=1315){
     futurepara.className="abc";
   }
  };
  let futurepara1=document.getElementById("futurepara1");
  window.addEventListener("scroll",myfunction4);
  function myfunction4(){
    if( document.body.scrollTop>=1610||document.documentElement.scrollTop>=1610){
      futurepara1.className="abc";
    }
   };
   let goalpara=document.getElementById("goalpara");
  window.addEventListener("scroll",myfunction5);
  function myfunction5(){
   if( document.body.scrollTop>=2297||document.documentElement.scrollTop>=2297){
     goalpara.className="abc";
   }
  };
  let goalpara1=document.getElementById("goalpara1");
  window.addEventListener("scroll",myfunction6);
  function myfunction6(){
    if( document.body.scrollTop>=2469||document.documentElement.scrollTop>=2469){
      goalpara1.className="abc";
    }
   };
   let watchmore=document.getElementById("watchmore");
   let companyvideo=document.getElementById("companyvideo");
   let goalimg=document.getElementById("goalimg");
   companyvideo.style.display="none";
   let counting=2;
   watchmore.addEventListener("click",myfunction7);
   function myfunction7(){
     if(counting%2==0){
       companyvideo.style.display="block";
       watchmore.scrollIntoView(top);
       counting++;
     }
     else{
      companyvideo.style.display="none";
      counting++;
     }
   };
 