initialize()
var operand=0;
var scopeVar="";
var display="";
var operation="";
var result="0";
var append=true;
function initialize(){
        document.getElementById("btn1").addEventListener('click',function(event){
            scopeVar=scopeVar+"1";
        })
        document.getElementById("btn2").addEventListener('click',function(event){
            scopeVar=scopeVar+"2";
        })
        document.getElementById("btn3").addEventListener('click',function(event){
            scopeVar=scopeVar+"3";
        })
        document.getElementById("btn4").addEventListener('click',function(event){
            scopeVar=scopeVar+"4";
        })
        document.getElementById("btn5").addEventListener('click',function(event){
            scopeVar=scopeVar+"5";
        })
        document.getElementById("btn6").addEventListener('click',function(event){
            scopeVar=scopeVar+"6";
        })
        document.getElementById("btn7").addEventListener('click',function(event){
            scopeVar=scopeVar+"7";
        })
        document.getElementById("btn8").addEventListener('click',function(event){
            scopeVar=scopeVar+"8";
        })
        document.getElementById("btn9").addEventListener('click',function(event){
            scopeVar=scopeVar+"9";
        })
        document.getElementById("btn0").addEventListener('click',function(event){
            scopeVar=scopeVar+"0";
        })
        document.getElementById("btnDot").addEventListener('click',function(event){
            scopeVar=scopeVar+".";
        })
        document.getElementById("btnCE").addEventListener('click',function(event){
            scopeVar="";
            display="";
            clear();
        })
        document.getElementById("btnErase").addEventListener('click',function(event){
            scopeVar=scopeVar.substr(0,scopeVar.length-1);
            populateHeader();
        })
        document.getElementById("btnDivide").addEventListener('click',function(event){
            operation="divide";
            saveOperand(operation);
            
        })
        document.getElementById("btnMulti").addEventListener('click',function(event){
            operation="multi";
            saveOperand(operation);
            
        })
        document.getElementById("btnSubstract").addEventListener('click',function(event){
            operation="subst";
            saveOperand(operation);
            
        })
        document.getElementById("btnAdd").addEventListener('click',function(event){
            operation="add";
            saveOperand(operation);
            
        })
        document.getElementById("btnEquals").addEventListener('click',function(event){
            performOperation();
        })
        document.querySelectorAll('.numBtn').forEach(function(elem){
            elem.addEventListener("click",function(){
                populateHeader();
            })
        })

}

function saveOperand(){
    operand=parseFloat(scopeVar);
    scopeVar="";
    switch(operation){
        case "add":
        display=operand + " + ";
        break;

        case "subst":
        display=operand + " - ";
        break;

        case "multi":
        display=operand + " * ";
        break;

        case "divide":
        display=operand + " / ";
        break;
    }
    populateHeader();
}
function performOperation(){
    var result;
    switch(operation){
        case "add":
        result=operand+parseFloat(scopeVar);
        break;

        case "subst":
        result=operand-parseFloat(scopeVar);
        break;

        case "multi":
        result=operand*parseFloat(scopeVar);
        break;

        case "divide":
        result=operand/parseFloat(scopeVar);
        break;
    }
    
    append=false;
    document.getElementById("calResult").innerText=display+ scopeVar + "=" +result.toString();
    scopeVar=result;
    document.getElementById("calHeader").innerText="";
}
function populateHeader(){
    document.getElementById("calHeader").innerText=display+ scopeVar;
}
function clear(){
    document.getElementById("calHeader").innerText="";
    document.getElementById("calResult").innerText="";
}

