console.log("hello");
let marsview1=document.getElementById("marsview1");
let marsview2=document.getElementById("marsview2");
let marsview3=document.getElementById("marsview3");
let marsview4=document.getElementById("marsview4");
window.addEventListener("scroll",myfunction);
function myfunction(){
    if(document.body.scrollTop>=290||document.documentElement.scrollTop>=290){
        marsview1.className="abc";
        marsview2.className="abc";
        marsview3.className="abc";
        marsview4.className="abc";
    }
};
let feature=document.getElementById("feature");
let quality=document.getElementById("quality");
let featureextra1=document.getElementById("extrafeature1");
let featureextra2=document.getElementById("extrafeature2");
window.addEventListener("scroll",myfunction1);
function myfunction1(){
    if(document.body.scrollTop>=730||document.documentElement.scrollTop>=730){
        quality.className="slide2";
        featureextra2.className="slide2";
        feature.className="slide1";
        featureextra1.className="slide1";
    }
};
let moreinfopara=document.getElementById("moreinfopara");
let readmorebtn=document.getElementById("readmore");
let video=document.getElementById("video");
let extraimg=document.getElementById("homeextra");
window.addEventListener("scroll",myfunction3);
function myfunction3(){
    if(document.body.scrollTop>=1280||document.documentElement.scrollTop>=1280){
        moreinfopara.className="slide3";
        readmorebtn.className="slide4";
    }
};
readmorebtn.addEventListener("click",myfunction4);
function myfunction4(){
 moreinfopara.style.display="none";
extraimg.style.display="none";
 readmorebtn.style.display="none";
 video.style.display="block";
};