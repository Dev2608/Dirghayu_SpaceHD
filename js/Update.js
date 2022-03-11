console.log("hello");
let updatepara1=document.getElementById("updatepara1");
window.addEventListener("scroll",myfunction);
function myfunction(){
 if(document.body.scrollTop>=700||document.documentElement.scrollTop>=700){
     updatepara1.className="abc";
 }
};
let divextravideo=document.getElementById("extravideo");
divextravideo.style.display="none";
let watch=document.getElementById("updatewatchmore");
watch.addEventListener("click",myfunction1);
let update1img=document.getElementById("update1img");
function myfunction1(){
  if (count % 2 == 0) {
    divextravideo.style.display = "block";
    watch.scrollIntoView(top);
    count++;
  }
  else {
    divextravideo.style.display = "none";
    count++;
  }
};
let divextravideo1=document.getElementById("extravideo1");
divextravideo1.style.display="none";
let watch1=document.getElementById("updatewatchmore1");
let update2img=document.getElementById("update2img");
watch1.addEventListener("click",myfunction2);
function myfunction2(){
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