let button = document.getElementById("convert");

button.addEventListener('click',Convertir);
document.getElementById("moneda").addEventListener('click',()=>{document.getElementById("Arrow").classList.toggle("turn")})

function Update(value){
    let result = document.getElementById("result");
    result.innerHTML = value;
}
document.getElementById("Contacto").addEventListener("click",()=>
{
    alert(" Carlos Pesalaccia, Pesacarlos1995@gmail.com, 2616753764. \n\n Javier Velazquez")
    
})

function Convertir(){
    
    let moneda=document.getElementById("moneda").value
    let pesos=document.getElementById("pesos").value
    let result
    switch (moneda) {
        case "D":
            result="AR$"+parseFloat((pesos *(910))).toFixed(2); 
            
            break;
        case "E":
                
                result="AR$"+parseFloat((pesos*(956.38))).toFixed(2);
            break;
        default:
            result="AR$"+parseFloat(pesos*(100)).toFixed(2);
        break;
    }
    Update(result)
}