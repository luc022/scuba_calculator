
function sacCalculate() {
    let averageDepth = document.querySelector("[name=averageDepth").value;
    let bottomTime = document.querySelector("[name=bottomTime").value;
    let leftAir = document.querySelector("[name=leftAir").value;
    let tankVolume = document.querySelector("[name=tankVolume").value;
    let tankPressure = document.querySelector("[name=tankPressure").value;

    let sac = tankVolume * (tankPressure - leftAir) / (bottomTime * (averageDepth/10 + 1));
    console.log(averageDepth);
    console.log(bottomTime);
    console.log(leftAir);
    console.log(tankVolume);
    console.log(tankPressure);

    document.querySelector(".sacOutput").innerHTML = `Your SAC: ` + sac.toFixed(2) + ` l/min`;
     
}

document.querySelector("[name=calculateSac]").addEventListener("click", sacCalculate);

