let result = document.getElementById("inputxt");

let display=(number)=>{
    result.value+=number;
}

let Calculate=()=>{
    try{
result.value=eval(result.value)
    }catch(err){
alert("Enter the valid input");
    }
}

function Clear(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
 