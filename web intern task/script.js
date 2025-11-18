let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string = "";
           document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML =='C'){
            if(string.length>0){

                string=string.substring(0,string.length - 1);
                document.querySelector('input').value=string;

            }

        }

else{console.log(e.target)
string = string + e.target.innerHTML;
document.querySelector('input').value=string;
}
})
})

// keyboard funcionality

document.addEventListener("keydown",(e)=>{
    console.log("Key pressed:", e.key); 
    let keybtn =this.document.querySelector("input");
    if(!isNaN(e.key)){
        string += e.key;
        keybtn.value = string;
    }

    if(["+","-","*","/"].includes(e.key)){
        string += e.key;
        keybtn.value = string;
    }

    if(e.key==="Enter"){
        string = eval(string);
        keybtn.value = string;
    }

    if(e.key==="Backspace"){
        string= string.substring(0,string.length -1);
         keybtn.value = string;
    }
    if(e.key ==="Escape"){
        string ="";
        keybtn.value = string;
    }
})



