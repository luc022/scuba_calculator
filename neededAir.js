function neededAirCalculate() {

    let sac = document.querySelector("[name=SAC]").value;
    let depth = document.querySelector("[name=depth]").value;
    let bottomTime = document.querySelector("[name=diveTime]").value;


    

    let result = sac * ((depth/10) + 1) * bottomTime;
    
    
    document.querySelector(".neededAirResult").innerHTML = "You need: " + result.toFixed(2) + " liters of air in your tank";
   
}

document.querySelector("[name=calculateNeededAir]").addEventListener("click", neededAirCalculate);