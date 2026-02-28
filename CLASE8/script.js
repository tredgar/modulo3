console.log('Hola, mundo!');
const form = document.querySelector("form");
const  nameInput = document.getElementById('name');
const  commentInput = document.getElementById('comment');
const commentsList = document.getElementById("comments");

let comentarios = [];

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const name = nameInput.value;
  const comment = commentInput.value;

  if (name === "" || comment === "") return;

  comentarios.push({ name, comment });


  nameInput.value = "";
  commentInput.value = "";

  renderComments(comentarios);
});

const renderComments = (comments) => {
    commentsList.innerHTML = '';
    for (let i = 0; i < comments.length; i++) {
        const commentCard = document.createElement('div');
        commentCard.classList.add('comment-card');

        const commentName = document.createElement('h3');
        commentName.textContent = comments[i].name;
          
        const date = document.createElement("p");
         commentCard.classList.add("date");

        const commentText = document.createElement('p');
        commentText.textContent = comments[i].comment;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', () => {
            comentarios.splice(i, 1);
            renderComments(comentarios);
        });

        commentCard.appendChild(commentName);
        commentCard.appendChild(commentText);
        commentCard.appendChild(deleteButton);

        commentsList.appendChild(commentCard);
    }
};

renderComments(comentarios);
