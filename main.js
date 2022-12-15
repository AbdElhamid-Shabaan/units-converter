const startNum = document.getElementById("start-num")
const convertBtn = document.getElementById("convert-btn")
let   resultP1 = document.getElementById("result-p1")
let   resultP2 = document.getElementById("result-p2")
let   resultP3= document.getElementById("result-p3")

convertBtn.addEventListener("click", function() {
    let converta1 = startNum.value  * 3.281
    let conA = converta1.toFixed(3)
    let converta2 = startNum.value / 3.281 
    let conB = converta2.toFixed(3)
    resultP1.innerText= `${startNum.value} meters = ${conA} feet | ${startNum.value} feets = ${conB} meters`

    let converta3 = startNum.value  * 0.264
    let conC = converta3.toFixed(3)
    let converta4 = startNum.value / 0.264
    let conD = converta4.toFixed(3)
    resultP2.innerText= `${startNum.value} liters = ${conC} gallon | ${startNum.value} gallon = ${conD} litres`

    let converta5 = startNum.value  * 2.204
    let conE = converta5.toFixed(3)
    let converta6 = startNum.value / 2.204
    let conF = converta6.toFixed(3)
    resultP3.innerText= `${startNum.value} kilos = ${conE} pound | ${startNum.value} pound = ${conF} kilos`
      // console.log(mido)
})