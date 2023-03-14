
function calculatorInputFunction(value){

    let calculatorInput=document.getElementById('calculator-input')
  
   
      return calculatorInput.value+=  value;



   


  


    


    
}


// output
function outputFunction(){
    let calculatorInput=document.getElementById('calculator-input')
   
     let prevValue=calculatorInput.value;



   console.log(prevValue)

    calculatorInput.value=eval(prevValue)






  
}


// clean

function clean(){
    
    let calculatorInput=document.getElementById('calculator-input');

    calculatorInput.value='';


}


function x(){
    let calculatorInput=document.getElementById('calculator-input');
    
     let split= calculatorInput.value.split('');
     console.log(split)
       
     split.pop()

     let string= split.join('')
    console.log(string)

    calculatorInput.value=string
     
}




// section 
let section=document.getElementById('section').addEventListener('click',function(event){

           

      let targetValue = event.target.innerText;

       
      if(targetValue=='C'){
        clean();
        return;
      }

      if(targetValue==='='){
        outputFunction();
        return
      }

      if(targetValue==='X'){
        event.stopPropagation()
        x()
        return
      }
         
         calculatorInputFunction(targetValue);




})



