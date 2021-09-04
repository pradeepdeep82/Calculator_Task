var container =document.createElement("div");
container.setAttribute("class", "container");
var row =document.createElement("div");
row.setAttribute("class", "row");
var col =document.createElement("div");
col.setAttribute("class", "col-12-sm");
var h1 =document.createElement("h1");
var b =document.createElement("b");
b.innerHTML="Calculator Task";
h1.append(b);
col.append(h1);
row.append(col);

var calculator=document.createElement("div");
calculator.setAttribute("class", "calculator");

var input1=document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("placeholder","0");
input1.setAttribute("id","output");
input1.setAttribute("onkeydown", "myFunction(event)");


var button1=document.createElement("button");
button1.setAttribute("onclick", "Clear()");
button1.innerHTML="C";

var button2=document.createElement("button");
button2.setAttribute("onclick", "del()");
button2.innerHTML="Del";

var button3=document.createElement("button");
button3.setAttribute("onclick", "display('%')");
button3.innerHTML="%";

var button4=document.createElement("button");
button4.setAttribute("onclick", "display('/')");
button4.innerHTML="/";

var button5=document.createElement("button");
button5.setAttribute("onclick", "display('7')");
button5.innerHTML="7";

var button6=document.createElement("button");
button6.setAttribute("onclick", "display('8')");
button6.innerHTML="8";

var button7=document.createElement("button");
button7.setAttribute("onclick", "display('9')");
button7.innerHTML="9";

var button8=document.createElement("button");
button8.setAttribute("onclick", "display('*')");
button8.innerHTML="*";

var button9=document.createElement("button");
button9.setAttribute("onclick", "display('4')");
button9.innerHTML="4";

var button10=document.createElement("button");
button10.setAttribute("onclick", "display('5')");
button10.innerHTML="5";

var button11=document.createElement("button");
button11.setAttribute("onclick", "display('6')");
button11.innerHTML="6";

var button12=document.createElement("button");
button12.setAttribute("onclick", "display('-')");
button12.innerHTML="-";

var button13=document.createElement("button");
button13.setAttribute("onclick", "display('1')");
button13.innerHTML="1";

var button14=document.createElement("button");
button14.setAttribute("onclick", "display('2')");
button14.innerHTML="2";

var button15=document.createElement("button");
button15.setAttribute("onclick", "display('3')");
button15.innerHTML="3";

var button16=document.createElement("button");
button16.setAttribute("onclick", "display('+')");
button16.innerHTML="+";

var button17=document.createElement("button");
button17.setAttribute("onclick", "display('.')");
button17.innerHTML=".";

var button18=document.createElement("button");
button18.setAttribute("onclick", "display('0')");
button18.innerHTML="0";

var button19=document.createElement("button");
button19.setAttribute("onclick", "calculate()");
button19.setAttribute("class", "equalto");
button19.innerHTML="=";

calculator.append(input1, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10,
                  button11, button12, button13, button14, button15, button16, button17, button18, button19);
container.append(row, calculator);
document.body.append(container);



var output=document.getElementById("output");


function myFunction(event){
    
      const enter=13;
      const keyDel=46;
      const backspace=8;
      if(event.keyCode == enter){
        calculate();
      }
      else if(event.keyCode == keyDel){
        Clear();
      }
      else if(event.keyCode==backspace){
        output.value= output.value.slice(0,output.value.length);
      }
    
    else {
      var alpha= /^[A-Za-z]+$/;
      var x=event.key;
      if(x.match(alpha)){
      alert("Only numbers are allowed.");
      location.reload();
     }
    }   
  }
 



function display(num){
  output.value= output.value+num;
}

function calculate(){
  try{
    output.value=eval(output.value);
  }
  catch(err){
    alert("Invalid");
    location.reload();
  }
}
function Clear(){
  output.value="";
}
function del(){
  output.value= output.value.slice(0,-1);
}


