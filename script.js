 //Backspace function to remove last character from the display region
 function backspace(calcy) {                                              
    size = calcy.display.value.length; 
    calcy.display.value = calcy.display.value.substring(0, size-1); 
} 
// functiion to evaluate the airthmatical expression
function calculate(calcy) { 
              
    if(calcy.display.value.includes("!")) { // calculate Factorial of a Number
          
        size = calcy.display.value.length; 
        n = Number(calcy.display.value.substring(0, size-1)); 
        f = 1; 
          
        for(i = 2; i <= n; i++) 
            f = f*i; 
        calcy.display.value = f; 
    } 
    else if(calcy.display.value.includes("%")) { // calculate Percantage 
                  
        var size = calcy.display.value.length; 
        if(size===2)
        n = parseFloat(calcy.display.value[0]);
        else n = parseFloat(calcy.display.value.substring(0, size-2)); 
        calcy.display.value = n/100; 
    } 
    else   {
        
        calcy.display.value = eval(calcy.display.value); 
    }  
    
} 