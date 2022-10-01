function bestNitroxCalculate() {

    let depth = document.querySelector("[name=plannedDepth]").value;
    let desiredPPO = document.querySelector("[name=desiredPPO]").value;

    

    let result = desiredPPO / ((depth / 10) + 1);
   
    document.querySelector(".nitroxResult").innerHTML = "Best Nitrox is: EAN " + Math.trunc((result * 100));
    
   
}

document.querySelector("[name=calculateBestNitrox]").addEventListener("click", bestNitroxCalculate);

