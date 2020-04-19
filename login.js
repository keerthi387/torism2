
function validate(){
    let bg=document.getElementById("background");
    let para=document.getElementById("Para");
 

    let e=document.getElementById("mail").value;
    let p=document.getElementById("password").value;

    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    var i=regexp.test(e);
    var s=pass.test(p);


    if(e==""||p==""){
        alert("fields cannot be empty");
        return false;
    }
    else if(i==false){
        alert("enter valid adrress");
        return false;
    }
    else if(s==false){
       para.innerText="password strength is poor";
       para.style.textAlign="center";
       bg.style.backgroundColor="silver";
       bg.style.border=" 3px solid red";
        para.style.color="red";
        bg.style.height="100px";
        bg.style.width="500px";
        return false;
    
    
    }
    
    else if(s==true){
      
       // function changer(){
          
        if(p.length>12){
            //alert("strong");
            para.innerText="password strength is strong";
            para.style.textAlign="center";
            bg.style.backgroundColor="silver";
            bg.style.border=" 3px solid red";
             para.style.color="green";
             bg.style.height="100px";
             bg.style.width="500px";
             alert("strong");
        }
        else{
            alert("password strength is medium");
            para.innerText="password strength is medium";
            para.style.textAlign="center";
            bg.style.backgroundColor="silver";
            bg.style.border=" 3px solid red";
             para.style.color="orange";
             bg.style.height="100px";
             bg.style.width="500px";
             
    
        }}
else{
   
    return true;
}
    }