let button = document.getElementById("convert");

button.addEventListener('click',Convertir);
document.getElementById("moneda").addEventListener('click',()=>{document.getElementById("Arrow").classList.toggle("turn")})

function Update(value){
    let result = document.getElementById("result");
    result.innerHTML = value;
}


function Convertir(){
    
    let moneda=document.getElementById("moneda").value
    let pesos=document.getElementById("pesos").value
    let result
    switch (moneda) {
        case "D":
            result="AR$"+parseFloat((pesos *(99.70))).toFixed(2); 
            
            break;
        case "E":
                
                result="AR$"+parseFloat((pesos*(115.19))).toFixed(2);
            break;
        default:
            result="AR$"+parseFloat(pesos*(17.69)).toFixed(2);
        break;
    }
    Update(result)
}