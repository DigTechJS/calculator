let string="";
let buttons=document.querySelectorAll(".button");
document.getElementById('message').innerHTML="";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML=='=') {
            try{

            
            string=eval(string);
            document.querySelector('input').value=string;
            }
            catch(err){
                document.getElementById('message').innerHTML="Wrong Input!!😔😔Try Again!!";
                string="";
            document.querySelector('input').value=string;

            }
        }
        else if(e.target.innerHTML=='C'){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;

        }
        else{

            // console.log(e.target);
            string=string+ e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})