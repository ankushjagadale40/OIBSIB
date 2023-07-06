alert("If you are Asian and use calculator you are dumb!!!                           Quote by :- Peter Griffin");
const btns = document.querySelectorAll("button");
let input = document.querySelector(".text");
let string = "";


for(let btn of btns){
    btn.addEventListener("click",(e)=>{
        if(e.target.textContent == "="){
            string = eval(string);
            input.value = string;
        }
       else if(e.target.textContent == "Asian Child"){
            string += 0;
            input.value = string;
        }
       else if(e.target.textContent == "AC"){
             string = "";
             input.value = string;
        }
       else if(e.target.textContent == "Clear"){
        string = string.slice(0,string.length-1);
        input.value = string;
        }
        else{
         string +=e.target.textContent;
         input.value = string;
        }

    })
}

