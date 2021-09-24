var btn=document.querySelectorAll('button');
var screen=document.querySelector("#screen");
var result='';

for(item of btn)
{
    item.addEventListener("click",(e)=>{
        btntext=e.target.innerText;
        console.log(btntext);
        if(btntext=='x'){
            btntext='*';
            result+=btntext;
            screen.value=result;
            console.log(result);
        }
        else if(btntext=='C'){
            result='';
            screen.value=result;
        }
        else if(btntext=='='){
            let value=eval(result);
            screen.value=value;
            // console.log(value,screen.textContent);
            // // screen.innerHTML=screen.value;
            // screen.textContent=value;

        }
        else{
            result+=btntext;
            screen.value=result;
            console.log(result);
        }
    })
}