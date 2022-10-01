function tankAirVolumeCalculate() {

    let tankCapacity = document.querySelector("[name=tankCapacity]").value;
    let pressure = document.querySelector("[name=pressure]").value;
    

    let result = tankCapacity * pressure;
    
    
    document.querySelector(".tankAirVolumeResult").innerHTML = "Your tank contains:  " + result + " liters";
   
}

document.querySelector("[name=calculateTankAirVolume]").addEventListener("click", tankAirVolumeCalculate);