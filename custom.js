var button=document.getElementsByClassName("akordion");
var arrow=document.getElementsByClassName("fa-arrow-down");


for(var i=0;i<button.length;i++)
{
    button[i].onclick=function(){
        
        var panel=this.nextElementSibling;

        this.lastElementChild.classList.toggle("fa-arrow-up")
        if(panel.style.maxHeight){
            
            panel.style.maxHeight=null;
            
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px";  
        }
    }
}