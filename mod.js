 function modCalculate() {

    let ean = document.querySelector("[name=nitrox]").value;
    ean = ean/100

    let result12 = ((10 * 1.2) / ean) - 10;
    let result14 = ((10 * 1.4) / ean) - 10;
    let result16 = ((10 * 1.6) / ean) - 10;
    //document.querySelector(".mod12").innerHTML = "MOD " + result12.toFixed(2) + `m 1.2 PPO<sub>2</sub>`;
    document.querySelector(".mod12").innerHTML = "MOD " + Math.trunc(result12) + `m 1.2 PPO<sub>2</sub>`;
    //document.querySelector(".mod14").innerHTML = "MOD " + result14.toFixed(1) + `m 1.4 PPO<sub>2</sub>`;
    document.querySelector(".mod14").innerHTML = "MOD " + Math.trunc(result14) + `m 1.4 PPO<sub>2</sub>`;
    //document.querySelector(".mod16").innerHTML = "MOD " + result16.toFixed(2) + `m 1.6 PPO<sub>2</sub>`;
    document.querySelector(".mod16").innerHTML = "MOD " + Math.trunc(result16) + `m 1.6 PPO<sub>2</sub>`;
}

document.querySelector("[name=calculateMod]").addEventListener("click", modCalculate);

