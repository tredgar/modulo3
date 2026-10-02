const nombre=document.getElementById("comment_name");
const comentario=document.getElementById("comment_input");
const saveB = document.getElementById("save_comment");
const commentsList = document.getElementById("comments_list");

let comentarios=[];

saveB.addEventListener("click", () => {
    
    const comment=comentario.value;
    const nombreValue=nombre.value;
    comentario.value="";
    nombre.value="";

   comentarios.push(comment);
   const comentarios_json=JSON.stringify(comentarios);

   localStorage.setItem("comentarios", comentarios_json);
   render_comments(comentarios);

});

const render_comments=(comments)=>{
    commentsList.innerHTML="";
    for (let i=0; i<comments.length; i++){
        const commenElement=document.createElement("li");
        commenElement.textContent = comments[i];
        commentsList.appendChild(commenElement);
    }
  
}


const comentariosJSON=localStorage.getItem("comentarios");

if(comentariosJSON){
    comentarios=JSON.parse(comentariosJSON);
    render_comments(comentarios);
}else{
    //Sin comentarios
    render_comments(["Sin comentarios"]);
}