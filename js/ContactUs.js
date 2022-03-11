console.log("hello");
let jobpara=document.getElementById("jobpara");
window.addEventListener("scroll",myfunction);
function myfunction(){
    if(document.body.scrollTop>=430||document.documentElement.scrollTop>=430){
        jobpara.className="abc";
    }
};
count=2;
let fieldset1=document.getElementById("fieldset1");
let jobsearchcontent=document.getElementById("jobsearchcontent");
jobsearchcontent.style.display="none";
fieldset1.style.height="30px";
let btn1=document.getElementById("btn1");
btn1.addEventListener("click",myfunction1);
function myfunction1(){
    if (count % 2 == 0) {
        jobsearchcontent.style.display="block";
        fieldset1.style.height="440px";
        fieldset2.style.display="none";
        fieldset3.style.display="none";
        count++;
      }
      else {
        jobsearchcontent.style.display="none";
        fieldset1.style.height="30px";
        fieldset2.style.display="block";
        fieldset3.style.display="block";
        count++;
      }
};
let fieldset2=document.getElementById("fieldset2");
let jobsearchcontent2=document.getElementById("jobsearchcontent2");
jobsearchcontent2.style.display="none";
fieldset2.style.height="30px";
let btn2=document.getElementById("btn2");
btn2.addEventListener("click",myfunction2);
function myfunction2(){
    if (count % 2 == 0) {
        jobsearchcontent2.style.display="block";
        fieldset2.style.height="487px";
        fieldset3.style.display="none";
        fieldset1.style.display="none";
        count++;
      }
      else {
        jobsearchcontent2.style.display="none";
        fieldset2.style.height="30px";
        fieldset3.style.display="block";
        fieldset1.style.display="block";
        count++;
      }
};
let fieldset3=document.getElementById("fieldset3");
let jobsearchcontent3=document.getElementById("jobsearchcontent3");
jobsearchcontent3.style.display="none";
fieldset3.style.height="30px";
let btn3=document.getElementById("btn3");
btn3.addEventListener("click",myfunction3);
function myfunction3(){
    if (count % 2 == 0) {
        jobsearchcontent3.style.display="block";
        fieldset3.style.height="480px";
        fieldset2.style.display="none";
        fieldset1.style.display="none";
        count++;
      }
      else {
        jobsearchcontent3.style.display="none";
        fieldset3.style.height="30px";
        fieldset2.style.display="block";
        fieldset1.style.display="block";
        count++;
      }
};
let internpara=document.getElementById("internpara");
window.addEventListener("scroll",myinternfunction);
function myinternfunction(){
    if(document.body.scrollTop>=1395||document.documentElement.scrollTop>=1395){
        internpara.className="abc";
    }
};
let internfieldset1=document.getElementById("internfieldset1");
let internsearchcontent=document.getElementById("internsearchcontent");
internsearchcontent.style.display="none";
internfieldset1.style.height="30px";
let internbtn1=document.getElementById("internbtn1");
internbtn1.addEventListener("click",myinternfunction1);
function myinternfunction1(){
    if (count % 2 == 0) {
        internsearchcontent.style.display="block";
        internfieldset1.style.height="400px";
        internfieldset2.style.display="none";
        internfieldset3.style.display="none";
        count++;
      }
      else {
        internsearchcontent.style.display="none";
        internfieldset1.style.height="30px";
        internfieldset2.style.display="block";
        internfieldset3.style.display="block";
        count++;
      }
};
let internfieldset2=document.getElementById("internfieldset2");
let internsearchcontent2=document.getElementById("internsearchcontent2");
internsearchcontent2.style.display="none";
internfieldset2.style.height="30px";
let internbtn2=document.getElementById("internbtn2");
internbtn2.addEventListener("click",myinternfunction2);
function myinternfunction2(){
    if (count % 2 == 0) {
        internsearchcontent2.style.display="block";
        internfieldset2.style.height="400px";
        internfieldset3.style.display="none";
        internfieldset1.style.display="none";
        count++;
      }
      else {
        internsearchcontent2.style.display="none";
        internfieldset2.style.height="30px";
        internfieldset3.style.display="block";
        internfieldset1.style.display="block";
        count++;
      }
};
let internfieldset3=document.getElementById("internfieldset3");
let internsearchcontent3=document.getElementById("internsearchcontent3");
internsearchcontent3.style.display="none";
internfieldset3.style.height="30px";
let internbtn3=document.getElementById("internbtn3");
internbtn3.addEventListener("click",myinternfunction3);
function myinternfunction3(){
    if (count % 2 == 0) {
        internsearchcontent3.style.display="block";
        internfieldset3.style.height="400px";
        internfieldset2.style.display="none";
        internfieldset1.style.display="none";
        count++;
      }
      else {
        internsearchcontent3.style.display="none";
        internfieldset3.style.height="30px";
        internfieldset2.style.display="block";
        internfieldset1.style.display="block";
        count++;
      }
};
let youtube=document.getElementById("youtube");
let facebook=document.getElementById("facebook");
let twitter=document.getElementById("twitter");
let instagram=document.getElementById("instagram");
let gmail=document.getElementById("gmail");
window.addEventListener("scroll",myfunction4);
function myfunction4(){
    if(document.body.scrollTop>=2160||document.documentElement.scrollTop>=2160){
        youtube.className="def";
       facebook.className="def";
      twitter.className="def";
        instagram.className="def";
       gmail.className="def";
    }
};

