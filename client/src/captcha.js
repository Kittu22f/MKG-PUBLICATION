
import React, { useState, useEffect } from 'react';
function Captcha(){
    const [user,setUser]= useState(
        {
            username: ""
        }
    );

function generateRandom  ()
{
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let strrlength=5;
let result = '';
for(let i = 0;i<strrlength;i++)
{
    let randNum= Math.floor(Math.random()*chars.length); 
    result += chars.substring(randNum,randNum+1);
}
return result;
}
const Captcha= generateRandom();
let handleChange =(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    user[name]=value;
    setUser(user);
}



const onSumbit = e=>{
    var element = document.getElementById("sucessbtn");
    var inputData = document.getElementById("inputType");
    element.innerHTML = " Checking...";
    inputData.disabled = true;
    element.disabled = true;


    var myfunctions = function(){
        
        if(Captcha==user.username)
       {
        element.style.background = ' #F0F8FF';
        element.innerHTML = " Captcha Verified";
         element.style.cursor = "not-allowed";
      
         element.disabled= true;
         
         inputData.style.display = 'none';
       }
       else {
       
        element.style.background = 'red';
            element.style.cursor = "not-allowed";
            element.innerHTML = " Not Matched";
            element.disabled= true;
           
        var myfunction = function(){
            element.style.background = 'yellow';
            element.style.cursor = "pointer";
            element.innerHTML = "verify Captch";
            element.disabled= false;
            inputData.disabled = false;
            inputData.value= '';
        };
    
    setTimeout(myfunction,5000);
       }
    }
    setTimeout(myfunctions,5000);
};


    return (
        <>
<h4 id="randomChar"> {Captcha}</h4>
<input type = "text"  id = "inputType" name = "username"  placeholder='enter Captch...' onChange={handleChange}  autoComplete='off'></input>
  <button type="button" id= "sucessbtn" onClick={onSumbit}>Varify Captch</button>
        </>
    )
}
export default Captcha;