console.log("Hola, mundo!");
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");
const commentsList = document.getElementById("comments");

let comentarios = [];
const dateHoure = new Date();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const comment = commentInput.value;

  if (name === "" || comment === "") return;

  comentarios.push({ name, comment });
    const comentarios_json = JSON.stringify(comentarios);
    localStorage.setItem("comentarios", comentarios_json);
  nameInput.value = "";
  commentInput.value = "";

  renderComments(comentarios);
});

const renderComments = (comments) => {
  commentsList.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");

        const commentName = document.createElement("h3");
        commentName.textContent = comments[i].name;

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = "Publicado el " + dateHoure.toLocaleString("es-ES");
        const commentText = document.createElement("p");
        commentText.textContent = comments[i].comment;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-delete");
        deleteButton.textContent = "Borrar";
        deleteButton.addEventListener("click", () => {
        comentarios.splice(i, 1);
        renderComments(comentarios);
    });

    commentCard.appendChild(commentName);
    commentCard.appendChild(date);
    commentCard.appendChild(commentText);
    commentCard.appendChild(deleteButton);

    commentsList.appendChild(commentCard);
  }
};

const comentarios_json = localStorage.getItem("comentarios");
if (comentarios_json) {
  comentarios = JSON.parse(comentarios_json);
}
renderComments(comentarios);
