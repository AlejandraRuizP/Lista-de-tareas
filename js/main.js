let container=document.querySelector(".container");
let inputTarea=document.querySelector("#input");
let agregar=document.querySelector(".btn-agregar");
let instancias=[]; 

/* function guardar(){
    localStorage.setItem("curso","jacascrip");
}
function obtener(){
    console.log(localStorage.getItem("curso"));
    console.log(localStorage.getItem("prueba"));
    console.log(localStorage.getItem("ale"));
} */

 class Item{
    constructor(nuevaTarea){
        this.nuevaTarea=nuevaTarea;

        this.crearDiv=function(nuevaTarea){

            let div1=document.createElement("div");
            div1.setAttribute("class","item-input");

            let dato=localStorage.setItem("To-do-list",JSON.stringify(this.nuevaTarea));

            let disabled=document.createElement("input");
            disabled.setAttribute("class", "item-input");
            disabled.value=this.nuevaTarea;
            disabled.disabled=true;

            let btnEdit=document.createElement("button");
            btnEdit.innerHTML="<i class='fas fa-lock'></i>";

            let btnRemove=document.createElement("button");
            btnRemove.innerHTML= "<i class='fas fa-trash'></i>"; 

            div1.appendChild( disabled);
            div1.appendChild( btnEdit); 
            div1.appendChild( btnRemove);
            container.appendChild( div1);
            
            btnEdit.addEventListener("click",function(){
                if (disabled.disabled == true) {
                    btnEdit.innerHTML='<i class="fa-solid fa-lock-open"></i>';
                    disabled.disabled = false; 
                } else {
                    btnEdit.innerHTML='<i class="fa-solid fa-lock"></i>';
                    disabled.disabled = true; 
                };
            })
            btnRemove.addEventListener("click",function(){
                div1.remove();

            })
        }
    }
} 
function validar(){
    if(!inputTarea.value==""){
        let datosInput= new Item(inputTarea.value);
        instancias.push(datosInput);
        datosInput.crearDiv(datosInput);
       
        inputTarea.value="";
        inputTarea.focus();
    }else{
        alert("Ingrese una tarea");
    }
}
inputTarea.addEventListener("keyup", function(e){
    if(e.key=="Enter"){
       
       validar();
       //guardar();
       //obtener();
    }
})
agregar.addEventListener("click", validar);