const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".ratings-container button")



let feedback="";

buttons.forEach(element => {
    
    element.addEventListener("click",()=>{
        element.style.cssText =" background-color:#0a1c26; border-radius: 7px;;box-shadow: 1px 3px 10px #00A9FF;";
        const small = document.querySelector("small");
        feedback =small.textContent;
        console.log(feedback)
    });
    
});


// submit button 

function sendReview(){
    container.textContent=""; // clearing inside content;
    let p = document.createElement("p");
    p.style.fontSize = "20px";
    p.innerHTML ="<b>Thank you</b> <br><br><br> " +feedback+ " we will use your feedback to improve <br> our service";
    container.appendChild(p);

}    
const submit = document.querySelector("#btn");

submit.addEventListener("click",()=>{
    sendReview();
    submit.style.cssText="background-color:#0a1c26; border-radius: 7px;;box-shadow: 1px 3px 10px #00A9FF;";
});