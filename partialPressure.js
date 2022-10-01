function partialPressureCalculate() {

    let ean = document.querySelector("[name=EAN]").value;
    let depth = document.querySelector("[name=depth2]").value;
  

    

    let result = (ean/100) * ((depth / 10) + 1); 
    
    
    document.querySelector(".partialPressureResult").innerHTML = `Partial Pressure O<sub>2</sub> is: ` + result.toFixed(1);
   
}

document.querySelector("[name=calculatePartialPressure]").addEventListener("click", partialPressureCalculate);