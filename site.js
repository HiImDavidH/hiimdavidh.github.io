

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


function createClock() {
    const clocl = document.querySelector('.getclock')
    const h2 = clock.querySelector('p')
    if(isMorning)
     {return "Have a Good Morning";}
    else if(isAfternoon)
    {return "Have a Good Morning";}
    else if(isEvening)
    {return "Have a Good Morning";}
    
}



//document.getElementById("clock").innerHTML = createClock();


/*
function clock(){
if(isMorning){
    return "Have a Good Morning"
}

else if(isAfternoon){
    return "Have a Good Morning"
}
//else if(){
 //   h1.textContent = "Have a Good Morning"
//}
}

