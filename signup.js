
function validate(){

  
  // let bg=document.getElementById("background");
  // let para=document.getElementById("Para");

    let e=document.getElementById("mail").value;
    var p=document.getElementById("password").value;
    var f=document.getElementById("name").value;
    let l=document.getElementById("lname").value;
    let n=document.getElementById("con").value;
    let bg=document.getElementById("background");
    let para=document.getElementById("para");
  
  
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let phno=/^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
    var pn=phno.test(n);
 var i=regexp.test(e);
var s=pass.test(p);
    
   if(e==""||p==""||f==""||l==""||n==""){
        alert("fields cannot be empty");
        return false;
    }
  else if(f.length<=4||f.length>14){
    alert("check the name");
    return false;

}
else if(i==false){
    alert("enter valid adrress");
    return false;
}
else if(s==false){
  alert("password strength is poor")
    return false;


}

else if(s==true){
  
   // function changer(){
      
    if(p.length>12){
        alert("strong");
       // para.innerText="password strength is strong";
        // para.style.textAlign="center";
        // bg.style.backgroundColor="silver";
        // bg.style.border=" 3px solid red";
        //  para.style.color="green";
        //  bg.style.height="100px";
        //  bg.style.width="500px";
         
    }
    else{
        alert("password strength is medium");
        // para.innerText="password strength is medium";
        // para.style.textAlign="center";
        // bg.style.backgroundColor="silver";
        // bg.style.border=" 3px solid red";
        //  para.style.color="orange";
        //  bg.style.height="100px";
        //  bg.style.width="500px";
        //  alert("strong");

    }
}
else if(pn==false){
    alert("check the contact number");
    
    return false;

}
else {
   return true;
}}