const botaoCalcular = document.getElementById("mostrarResultado");

const calcular = () => {
    const campoNome = document.getElementById("nome").value;
    const campoAltura = document.getElementById("altura").value;
    const campoPeso = document.getElementById("peso").value;
    const campoResultado = document.getElementById('resultadoDisplay');
   
    if(campoNome !== '' && campoAltura !== '' && campoPeso !== ''){
        const valorIMC = (campoPeso / (campoAltura*campoAltura)).toFixed(1) ;

        if(valorIMC < 18.5){

            campoResultado.textContent = `${campoNome} o seu IMC é ${valorIMC} e você está ABAIXO DO PESO NORMAL`;
        }
        else if(valorIMC >= 18.5 && valorIMC <= 24.9){
            
            campoResultado.textContent = `${campoNome} o seu IMC é ${valorIMC} e você está com o PESO NORMAL`;
        }
        else if(valorIMC > 24.9 && valorIMC <= 29.9){
            
            campoResultado.textContent = `${campoNome} o seu IMC é ${valorIMC} e você está com EXCESSO DE PESO`;
        }
        else if(valorIMC > 29.9 && valorIMC <= 34.9){
            
            campoResultado.textContent = `${campoNome} o seu IMC é ${valorIMC} e você está com OBESIDADE CLASSE 1`;
        }
        else if(valorIMC >34.9 && valorIMC <= 39.9){
            
            campoResultado.textContent = `${campoNome} o seu IMC é ${valorIMC} e você está com OBESIDADE CLASSE 2`;
        }
        else{
            
            campoResultado.textContent = `${campoNome} o seu IMC é ${valorIMC} e você está com OBESIDADE CLASSE 3`;
        }
        
    }
    else{
        campoResultado.textContent ='Por favor, preencha todos os campos!!!';
    }
  
}

botaoCalcular.addEventListener('click', calcular)

