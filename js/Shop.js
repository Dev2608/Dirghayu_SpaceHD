console.log("hello");
let imghoody1 = document.getElementById("hoody1");
let imghoody2 = document.getElementById("hoody2");
let imgtshirt1 = document.getElementById("tshirt1");
let imgtshirt2 = document.getElementById("tshirt2");
let imghat1 = document.getElementById("hat1");
let imghat2 = document.getElementById("hat2");
let imgjacket = document.getElementById("jacket");
let imgapolloshop = document.getElementById("apolloshop");
let imgnet = document.getElementById("net_origin");
let imgarray = new Array(imgapolloshop,imgnet,imghoody1,imghoody2,imgjacket,imghat1,imghat2,imgtshirt1,
    imgtshirt2);
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
  let apollotop=document.getElementById("apollotop");
  let apolloside=document.getElementById("apolloside");
  let apollobottom=document.getElementById("apollobottom");
  let apollotopbtn=document.getElementById("apollotopbtn");
  let apollosidebtn=document.getElementById("apollosidebtn");
  let apollobottombtn=document.getElementById("apollobottombtn");
  apollobottom.style.display="none";
  apolloside.style.display="none";
  apollotopbtn.addEventListener("click",myfunction);
  function myfunction(){
    apollobottom.style.display="none";
    apolloside.style.display="none";
    apollotop.style.display="block";
  };
  apollosidebtn.addEventListener("click",myfunction1);
  function myfunction1(){
    apollobottom.style.display="none";
    apollotop.style.display="none";
    apolloside.style.display="block";
  };
  apollobottombtn.addEventListener("click",myfunction2);
  function myfunction2(){
    apollotop.style.display="none";
    apolloside.style.display="none";
    apollobottom.style.display="block";
  };
  let nettop=document.getElementById("nettop");
  let netside=document.getElementById("netside");
  let netbottom=document.getElementById("netbottom");
  let nettopbtn=document.getElementById("nettopbtn");
  let netsidebtn=document.getElementById("netsidebtn");
  let netbottombtn=document.getElementById("netbottombtn");
  netbottom.style.display="none";
  netside.style.display="none";
  nettopbtn.addEventListener("click",myfunction3);
  function myfunction3(){
    netbottom.style.display="none";
    netside.style.display="none";
    nettop.style.display="block";
  };
  netsidebtn.addEventListener("click",myfunction4);
  function myfunction4(){
    netbottom.style.display="none";
    nettop.style.display="none";
    netside.style.display="block";
  };
  netbottombtn.addEventListener("click",myfunction5);
  function myfunction5(){
    nettop.style.display="none";
    netside.style.display="none";
    netbottom.style.display="block";
  };
  let tshirtb1=document.getElementById("tshirtb1");
  let tshirtb2=document.getElementById("tshirtb2");
  let tshirt3=document.getElementById("tshirt3");
  let tshirt4=document.getElementById("tshirt4");
  let tshirt5=document.getElementById("tshirt5");
  let tshirt6=document.getElementById("tshirt6");
  let tshirt7=document.getElementById("tshirt7");
  let tshirt8=document.getElementById("tshirt8");
  let tshirt9=document.getElementById("tshirt9");
  let tshirt10=document.getElementById("tshirt10");
  let tshirttopbtn=document.getElementById("tshirttopbtn");
  let tshirtbottombtn=document.getElementById("tshirtbottombtn");
  let tshirtred=document.getElementById("tshirtred");
  let tshirtblue=document.getElementById("tshirtblue");
  let tshirtgolden=document.getElementById("tshirtgolden");
  let tshirtblack=document.getElementById("tshirtblack");
  let tshirtcoral=document.getElementById("tshirtcoral");
  function display(){
  tshirt3.style.display="none";
  tshirt4.style.display="none";
  tshirt5.style.display="none";
  tshirt6.style.display="none";
  tshirt7.style.display="none";
  tshirt8.style.display="none";
  tshirt9.style.display="none";
  tshirt10.style.display="none";
  tshirtb2.style.display="none";
  };
  display();
  tshirtblue.addEventListener("click",myfunc);
  function myfunc(){
    display();
    tshirtb1.style.display="none";
    tshirt3.style.display="block";
    tshirttopbtn.addEventListener("click",myfunction6);
    function myfunction6(){
      display();
      tshirt4.style.display="none";
      tshirt3.style.display="block";
    };
    tshirtbottombtn.addEventListener("click",myfunction7);
    function myfunction7(){
      display();
      tshirt3.style.display="none";
      tshirt4.style.display="block";
    };
  }
  tshirtred.addEventListener("click",myfunc1);
  function myfunc1(){
    display();
    tshirtb1.style.display="none";
    tshirt5.style.display="block";
    tshirttopbtn.addEventListener("click",myfunction8);
    function myfunction8(){
      display();
      tshirt6.style.display="none";
      tshirt5.style.display="block";
    };
    tshirtbottombtn.addEventListener("click",myfunction9);
    function myfunction9(){
      display();
      tshirt5.style.display="none";
      tshirt6.style.display="block";
    };
  }
  tshirtgolden.addEventListener("click",myfunc2);
  function myfunc2(){
    display();
    tshirtb1.style.display="none";
    tshirt7.style.display="block";
    tshirttopbtn.addEventListener("click",myfunction11);
    function myfunction11(){
      display();
      tshirt8.style.display="none";
      tshirt7.style.display="block";
    };
    tshirtbottombtn.addEventListener("click",myfunction10);
    function myfunction10(){
      display();
      tshirt7.style.display="none";
      tshirt8.style.display="block";
    };
  }
  tshirtcoral.addEventListener("click",myfunc3);
  function myfunc3(){
    display();
    tshirtb1.style.display="none";
    tshirt9.style.display="block";
    tshirttopbtn.addEventListener("click",myfunction12);
    function myfunction12(){
      display();
      tshirt10.style.display="none";
      tshirt9.style.display="block";
    };
    tshirtbottombtn.addEventListener("click",myfunction13);
    function myfunction13(){
      display();
      tshirt9.style.display="none";
      tshirt10.style.display="block";
    };
  }
  tshirtblack.addEventListener("click",myfunc4);
  function myfunc4(){
    display();
    tshirtb1.style.display="none";
    tshirtb1.style.display="block";
    tshirttopbtn.addEventListener("click",myfunction14);
    function myfunction14(){
      display();
      tshirtb2.style.display="none";
      tshirtb1.style.display="block";
    };
    tshirtbottombtn.addEventListener("click",myfunction15);
    function myfunction15(){
      display();
      tshirtb1.style.display="none";
      tshirtb2.style.display="block";
    };
  }
  let jacket1=document.getElementById("jacket1");
  let jacket2=document.getElementById("jacket2");
  let jacket3=document.getElementById("jacket3");
  let jacket1btn=document.getElementById("jacket1btn");
  let jacket2btn=document.getElementById("jacket2btn");
  let jacket3btn=document.getElementById("jacket3btn");
  jacket3.style.display="none";
  jacket2.style.display="none";
  jacket1btn.addEventListener("click",myfunction16);
  function myfunction16(){
    jacket3.style.display="none";
    jacket2.style.display="none";
    jacket1.style.display="block";
  };
  jacket2btn.addEventListener("click",myfunction17);
  function myfunction17(){
    jacket3.style.display="none";
    jacket1.style.display="none";
    jacket2.style.display="block";
  };
  jacket3btn.addEventListener("click",myfunction18);
  function myfunction18(){
    jacket1.style.display="none";
    jacket2.style.display="none";
    jacket3.style.display="block";
  };
  


