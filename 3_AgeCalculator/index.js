const input = document.querySelector("#Date");
const btn1  = document.querySelector(".calculate");
const para =  document.querySelector(".results");
let age =0;


function Date_And_Month(){
    let A = input.value;

   
    let year = A.slice(0, 4);
   

    let month = A.slice(5, 7);
    let day = A.slice(8, 10);

   
    const currentDate = new Date();
    let current_DateAndTime = currentDate.toLocaleDateString();
    let latestDay= current_DateAndTime.slice(0,2);
    let latestMonth = current_DateAndTime.slice(3,5);
    let latestYear = current_DateAndTime.slice(6,10);
    console.log(day,month,year);
    console.log(latestDay,latestMonth,latestYear)

    let yearDiff = latestYear-year;
    let monthDiff = latestMonth-month;
    let dayDiff = latestDay-day;


    // Age logic if month
    if(yearDiff>=0 && monthDiff>0){
        age=yearDiff;   
    
    }
    else if(monthDiff==0){
        if(dayDiff>=0){
            age=yearDiff;
        }
        else{
            age=yearDiff-1;
        }
    }
    else{
        age=yearDiff-1;
    }
    
    para.textContent=`Your age is ${age}`;
    
    
   
}
btn1.addEventListener("click",Date_And_Month);
