console.log("hello");
let blackeyeview1=document.getElementById("blackeyeview1");
let blackeyeview2=document.getElementById("blackeyeview2");
let blackeyeview3=document.getElementById("blackeyeview3");
let blackeyeview4=document.getElementById("blackeyeview4");
window.addEventListener("scroll",myfunction);
function myfunction(){
    if(document.body.scrollTop>=290||document.documentElement.scrollTop>=290){
        blackeyeview1.className="abc";
        blackeyeview2.className="abc";
        blackeyeview3.className="abc";
        blackeyeview4.className="abc";
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