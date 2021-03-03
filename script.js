// Declaração dos vetores constantes, sendo o primeiro o vetor que possui os limites superiores e inferiores em que serão aplicados as taxas, o segundo é o vetor que possui cada taxa como elemento.
// Deve ser entendido da seguinte forma, antes do taxasVet[i] será aplicado o valorVet[i] como taxa.
//Obs: o código está sujeito a melhorias.


const taxasVet = [0,      1000,       2000,       3000,       4000,       5000];
const valorVet = [ 0,     0.15,       0.20,       0.25,       0.30,       0.40,    0.50];



// Função callback para o evento click do botão
function calcularPreço(){

    let mmrDesejado = document.getElementById("inputMmrDesejado").value
    let mmrAtual = document.getElementById("inputMmrAtual").value
    let resultado = document.getElementById("resultado");


   if (mmrAtual !== '' && mmrDesejado !== '' && mmrAtual !== mmrDesejado){
    
    
    let mmrTotal = mmrDesejado - mmrAtual;
    resultado.innerHTML =  `MMR Total:<br/> ${mmrTotal} <br/> <br/> Valor: <br/>${parseFloat(sumOfVector().toFixed(2))} Reais   `;

  

   }else{
        resultado.textContent = 'Valores inválidos'
   }
   
   let valorTotal = sumOfVector();

   bracketCerta();
}
//fim

// criação de um vetor completamente filtrado do limite inferior e superior e contendo os limites de taxa
function createNewVectTaxas(){

    let mmrDesejado = document.getElementById("inputMmrDesejado").value;

    let mmrAtual = document.getElementById("inputMmrAtual").value;

    let taxasAtual = taxasVet.filter(function(taxa){
    
        if (mmrDesejado >= taxa )

        return true;

        else 
            return false;
       
    })

    if (taxasAtual[(taxasAtual.length)- 1] != mmrDesejado){
    
        taxasAtual.push(parseInt(mmrDesejado));
    }  
            // Criação de um novo Vetor contendo o mmrAtual em sua devida ordem no Vetor

    let taxasAtual2 = taxasAtual.map(function(taxa){

        
        
        for(i=0; i<taxasAtual.length;i++){

                if(taxa==taxasAtual[i]){             

                    if( taxasAtual[i+1]> mmrAtual && mmrAtual> taxasAtual[i])

                        return parseInt(mmrAtual);

                    else  
                    
                        return taxa;
                    
             }
                  
        }    
    
    })

            // Fim dessa criação

            // Criação de um novo Vetor partindo do anterior, zerando os elementos menores que o mmrAtual e os eliminando do vetor

     let taxasAtual3 = taxasAtual2.map(function(taxa){

        if(mmrAtual>taxa)
            return 0;
                else
                    return taxa;

    })

            // fim dessa criação

             
    return taxasAtual3;

}
// fim dessa criação

//criação de um vetor os valores em cada limite de taxa

function createNewVectValue(){
    let mmrAtual = document.getElementById("inputMmrAtual").value;
    let vectorTaxas = createNewVectTaxas()
    let newVetValue = [];

    for (let i=0; i<vectorTaxas.length;i++) {

        if(i!=(vectorTaxas.length - 1)){

           


            if (vectorTaxas[i] <= mmrAtual)
                parseInt(newVetValue[i] = 0);

                else{
            newVetValue[i] = (vectorTaxas[i] - vectorTaxas[i-1])* valorVet[i];
            
                }
            
        

        } else{

            newVetValue[i] = (vectorTaxas[i] - vectorTaxas[i-1])* valorVet[i]; 

            
            
        }
        
    
    }
    return newVetValue;


}
// fim dessa criação

// função que soma os elementos do vetor anterior
function sumOfVector(){

    let newVetValues = createNewVectValue();


    let totalValor = newVetValues.reduce(function(total,values){
        return total + values;

    },0)
    return totalValor;
}


//Função que mudará as imagens das brackets conforme o mmr inserido

function bracketCerta(){

        let bracketAtualSrc = document.getElementById("imgBracketAtual");
        let bracketDesejadaSrc = document.getElementById("imgBracketDesejada");
        let mmrDesejado = document.getElementById("inputMmrDesejado").value;
        let mmrAtual = document.getElementById("inputMmrAtual").value;


        if ( (mmrAtual > 4820) && (mmrAtual<=5020))
        bracketAtualSrc.src ="img/Divine2.png";
        if ( (mmrAtual > 4620) && (mmrAtual<=4820))
        bracketAtualSrc.src ="img/Divine1.png";

        if ( (mmrAtual > 4420) && (mmrAtual<=4620))
        bracketAtualSrc.src ="img/Ancient5.png";
        if ( (mmrAtual > 4266) && (mmrAtual<=4420))
        bracketAtualSrc.src ="img/Ancient4.png";
        if ( (mmrAtual > 4112) && (mmrAtual<=4266))
        bracketAtualSrc.src ="img/Ancient3.png";
        if ( (mmrAtual > 3958) && (mmrAtual<=4112))
        bracketAtualSrc.src ="img/Ancient2.png";
        if ( (mmrAtual > 3804) && (mmrAtual<=3958))
        bracketAtualSrc.src ="img/Ancient1.png";
        if ( (mmrAtual > 3650) && (mmrAtual<=3804))
        bracketAtualSrc.src ="img/Lenda5.png";

        if ( (mmrAtual > 3496) && (mmrAtual<=3650))
        bracketAtualSrc.src ="img/Lenda4.png";

        if ( (mmrAtual > 3342) && (mmrAtual<=3496))
        bracketAtualSrc.src ="img/Lenda3.png";

        if ( (mmrAtual > 3188) && (mmrAtual<=3342))
        bracketAtualSrc.src ="img/Lenda2.png";

        if ( (mmrAtual > 3034) && (mmrAtual<=3188))
        bracketAtualSrc.src ="img/Lenda1.png";

        if ( (mmrAtual > 2880) && (mmrAtual<=3034))
        bracketAtualSrc.src ="img/Arconte5.png";
        if ( (mmrAtual > 2726) && (mmrAtual<=2880))
        bracketAtualSrc.src ="img/Arconte4.png";
         if ( (mmrAtual > 2572) && (mmrAtual<=2726))
        bracketAtualSrc.src ="img/Arconte3.png";
        if ( (mmrAtual > 2418) && (mmrAtual<=2572))
        bracketAtualSrc.src ="img/Arconte2.png";
        if ( (mmrAtual > 2264) && (mmrAtual<=2418))
        bracketAtualSrc.src ="img/Arconte1.png";    
        if ( (mmrAtual > 2110) && (mmrAtual<=2264))
        bracketAtualSrc.src ="img/Cruzado5.png";
        if ( (mmrAtual > 1956) && (mmrAtual<=2110))
        bracketAtualSrc.src ="img/Cruzado4.png";
        if ( (mmrAtual > 1802) && (mmrAtual<=1956))
        bracketAtualSrc.src ="img/Cruzado3.png";
        if ( (mmrAtual > 1648) && (mmrAtual<=1802))
        bracketAtualSrc.src ="img/Cruzado2.png";
        if ( (mmrAtual > 1494) && (mmrAtual<=1648))
        bracketAtualSrc.src ="img/Cruzado1.png";
        if ( (mmrAtual > 1340) && (mmrAtual<=1494))
        bracketAtualSrc.src ="img/Guardiao5.png";
        if ( (mmrAtual > 1186) && (mmrAtual<=1340))
        bracketAtualSrc.src ="img/Guardiao4.png";
        if ( (mmrAtual > 1032) && (mmrAtual<=1186))
        bracketAtualSrc.src ="img/Guardiao3.png";
        if ( (mmrAtual > 878) && (mmrAtual<=1032))
        bracketAtualSrc.src ="img/Guardiao2.png";
        if ( (mmrAtual > 724) && (mmrAtual<=878))
        bracketAtualSrc.src ="img/Guardiao1.png";
        if ( (mmrAtual > 570) && (mmrAtual<=724))
        bracketAtualSrc.src ="img/Arauto5.png";
        if ( (mmrAtual > 416) && (mmrAtual<=570))
        bracketAtualSrc.src ="img/Arauto4.png";
        if ( (mmrAtual > 262) && (mmrAtual<=416))
        bracketAtualSrc.src ="img/Arauto3.png";
        if ( (mmrAtual > 108) && (mmrAtual<=262))
        bracketAtualSrc.src ="img/Arauto2.png";
        if ( (mmrAtual > 0) && (mmrAtual<=108))
        bracketAtualSrc.src ="img/Arauto1.png";





        if ( (mmrDesejado > 4820) && (mmrDesejado<=5020))
        bracketDesejadaSrc.src ="img/Divine2.png";
        if ( (mmrDesejado > 4620) && (mmrDesejado<=4820))
        bracketDesejadaSrc.src ="img/Divine1.png";

        if ( (mmrDesejado > 4420) && (mmrDesejado<=4620))
        bracketDesejadaSrc.src ="img/Ancient5.png";
        if ( (mmrDesejado > 4266) && (mmrDesejado<=4420))
        bracketDesejadaSrc.src ="img/Ancient4.png";
        if ( (mmrDesejado > 4112) && (mmrDesejado<=4266))
        bracketDesejadaSrc.src ="img/Ancient3.png";
        if ( (mmrDesejado > 3958) && (mmrDesejado<=4112))
        bracketDesejadaSrc.src ="img/Ancient2.png";
        if ( (mmrDesejado > 3804) && (mmrDesejado<=3958))
        bracketDesejadaSrc.src ="img/Ancient1.png";
        if ( (mmrDesejado > 3650) && (mmrDesejado<=3804))
        bracketDesejadaSrc.src ="img/Lenda5.png";

        if ( (mmrDesejado > 3496) && (mmrDesejado<=3650))
        bracketDesejadaSrc.src ="img/Lenda4.png";

        if ( (mmrDesejado > 3342) && (mmrDesejado<=3496))
        bracketDesejadaSrc.src ="img/Lenda3.png";

        if ( (mmrDesejado > 3188) && (mmrDesejado<=3342))
        bracketDesejadaSrc.src ="img/Lenda2.png";

        if ( (mmrDesejado > 3034) && (mmrDesejado<=3188))
        bracketDesejadaSrc.src ="img/Lenda1.png";

        if ( (mmrDesejado > 2880) && (mmrDesejado<=3034))
        bracketDesejadaSrc.src ="img/Arconte5.png";
        if ( (mmrDesejado > 2726) && (mmrDesejado<=2880))
        bracketDesejadaSrc.src ="img/Arconte4.png";
         if ( (mmrDesejado > 2572) && (mmrDesejado<=2726))
        bracketDesejadaSrc.src ="img/Arconte3.png";
        if ( (mmrDesejado > 2418) && (mmrDesejado<=2572))
        bracketDesejadaSrc.src ="img/Arconte2.png";
        if ( (mmrDesejado > 2264) && (mmrDesejado<=2418))
        bracketDesejadaSrc.src ="img/Arconte1.png";    
        if ( (mmrDesejado > 2110) && (mmrDesejado<=2264))
        bracketDesejadaSrc.src ="img/Cruzado5.png";
        if ( (mmrDesejado > 1956) && (mmrDesejado<=2110))
        bracketDesejadaSrc.src ="img/Cruzado4.png";
        if ( (mmrDesejado > 1802) && (mmrDesejado<=1956))
        bracketDesejadaSrc.src ="img/Cruzado3.png";
        if ( (mmrDesejado > 1648) && (mmrDesejado<=1802))
        bracketDesejadaSrc.src ="img/Cruzado2.png";
        if ( (mmrDesejado > 1494) && (mmrDesejado<=1648))
        bracketDesejadaSrc.src ="img/Cruzado1.png";
        if ( (mmrDesejado > 1340) && (mmrDesejado<=1494))
        bracketDesejadaSrc.src ="img/Guardiao5.png";
        if ( (mmrDesejado > 1186) && (mmrDesejado<=1340))
        bracketDesejadaSrc.src ="img/Guardiao4.png";
        if ( (mmrDesejado > 1032) && (mmrDesejado<=1186))
        bracketDesejadaSrc.src ="img/Guardiao3.png";
        if ( (mmrDesejado > 878) && (mmrDesejado<=1032))
        bracketDesejadaSrc.src ="img/Guardiao2.png";
        if ( (mmrDesejado > 724) && (mmrDesejado<=878))
        bracketDesejadaSrc.src ="img/Guardiao1.png";
        if ( (mmrDesejado > 570) && (mmrDesejado<=724))
        bracketDesejadaSrc.src ="img/Arauto5.png";
        if ( (mmrDesejado > 416) && (mmrDesejado<=570))
        bracketDesejadaSrc.src ="img/Arauto4.png";
        if ( (mmrDesejado > 262) && (mmrDesejado<=416))
        bracketDesejadaSrc.src ="img/Arauto3.png";
        if ( (mmrDesejado > 108) && (mmrDesejado<=262))
        bracketDesejadaSrc.src ="img/Arauto2.png";
        if ( (mmrDesejado > 0) && (mmrDesejado<=108))
        bracketDesejadaSrc.src ="img/Arauto1.png";
     




    }


























        

buttonCalcular.addEventListener('click', calcularPreço);