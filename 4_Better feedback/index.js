const btn = document.getElementById("send");
const panelC  =document.querySelector(".panel-container");
const ratingContainer = document.querySelectorAll(".rating");
let hello ="";

function feedback(){
    panelC.innerText="";
    const para = document.createElement("para");
    para.setAttribute("class","fa-heart")
    panelC.appendChild(para);
    para.innerHTML = "<strong> Thanks for the feedback <strong>"+
    "<br>"+ " you chose " + hello+ "<br><hr>" ;
    
}
btn.addEventListener("click",feedback);


let i=false;
ratingContainer.forEach(element => {
    
    element.addEventListener("click",()=>{
        if(i==true){
            
        }
       let t =element.classList.toggle('active');  
       var rating = document.querySelector(".rating.active small");
       hello = rating.textContent;
       i=true;

      

     

    })
    
   
   
     
    
});