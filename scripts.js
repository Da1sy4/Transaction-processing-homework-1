/*
Program name- Cura Cardiology Clinic patient form.html 
Name- Daisy Que
date created-2/24/2026
version 1.0-2/24/26, 2.0-2/25/26,
Description- This document will be the javascript portion of hw1 
NOTE: I used the TP resources from MISSO but I used my own variables 
*/
/* for date*/
const d= new Date ();
let text=d.toLocaleDateString();
document.getElementById("today").innerHTML=text;

/*for slider*/
let slider=document.getElementById("range")
let output=document.getElementById("range-scale")
output.innerHTML=slider.value;
slider.oninput=function() {output.innerHTML=this.value;};


function validateDOB()
{
 dob=document.getElementById("DOB");
 let date=new Date(DOB.value);
 let maxDate=new Date().setFullYear(new Date()-120);

 if(date>newDate()) /*validating DOb*/
 {
   document.getElementById("DOB-error").innerHTML="Date can't be in the future"
   dob.value="";
   return false;
 } else if(date<new Date(maxDate))
    {document.getElementById("DOB-error").innerHTML="Date can't be more than 120 years ago"
     dob.value=""
     return false;
    } else{
        document.getElementById("DOB-error").innerHTML="";
     return true;
    }
}
 
function validateSSN()/*validating SSN*/
{    
const SSN=document.getElementById("SSN").value;
const SSNR=/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/; /* got this from TP resource*/
if(!SSNreg.test(SSN))
 {
    document.getElementById("SSN-error").innerHTML="Enter a valid SSN"
    return false;
 } else{
    document.getElementByID("SSN-error").innerHTML="";
    return true;
 }

}

function validateAddress1(){ /*doesnt work, dont know why come back*/
    var ad1=document.getElementByID("address1").value;
    console.log(ad1);
    console.log(ad1.length);
    if(ad1.length<2){
        document.getElementByID("address1-error").innerHTML="Enter your address on this line";
        return false;
 }else{
    document.getElementByID("address1-error").innerHTML="";
    return true;
 }
    
}

function validateZipcode(){ /*validate zip*/
const zipInput=document.getElementByID("zipcode")
let zip=zipInput.value.replace(/[^\d-]/g,"")
if(!zip){
    document.getElementByID("zipcode-error").innerHTML="can't leave zipcode blank";
    return false;
}
if(zip.length>5){
    zip=zip.slice(0,5);
}
zipInput.value=zip;
document.getElementByID("zipcode-error").innerHTML="";
return true;
}

function validateEmail(){
email=document.getElementById("email".value);
var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//regex pattern//
if(email==""){
    document.getElementById("email-error").innerHTML="email line can't be empty";
    return false;
}else if(!email.match(email)){
    document.getElementById("email-error").innerHTML="enter a valid email";
    return false;
}else{
    document.getElementById("email-error").innerHTML="";
    return true;
}

}

function validatePhnum(){
    const phoneInput=document.getElementById("phnum-error");
    const phone=phoneInput.value.replace(/\D/g,"");
    if(phone.length !==10){
        document.getElementById("phnum-error").innerHTML="Phone number can't be blank";
        return false;
    }
    const formattedPhone=phone.slice(0,3)+"-"+phone.slice(6);
    phoneInput.vale=formattedPhone;
    document.getElementById("phnum-error").innerHTML="";
    return true;
}
