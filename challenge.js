

document.addEventListener("DOMContentLoaded", function(){
  let counter = document.querySelector("#counter")
  let addButton = document.getElementById("+")
  let minusButton = document.getElementById("-")
  let pauseButton = document.getElementById("pause")
  let commentForm = document.getElementById("comment-form")
  let likeButton = document.getElementById("<3")

  let paused = false;
  setInterval(addSecond, 1000);

function togglePause(event){
  if (paused) {
    event.target.innerText = "pause";
  } else {
    event.target.innerText = "resume";
  }
  paused = !paused;
}

  function addSecond() {
    if (!paused)
    counter.innerText++;
  }
  function subtractSecond() {
    if (counter.innerText != 0 && !paused) {
      counter.innerText--;
    }
  }

  function addLike(){
   let likesList =  document.querySelector(".likes")

    console.log("I'm being liked")
  }

  function addComment(event){
    event.preventDefault()
    let comments = document.querySelector("#list ul")
    let comment = document.createElement("li")
    comment.innerText = document.querySelector("#comment-form input").value
    //SLAP ON DOM
    comments.prepend(comment)
  }

  addButton.addEventListener("click", addSecond)
  minusButton.addEventListener("click", subtractSecond)
  pauseButton.addEventListener("click", togglePause)
  commentForm.addEventListener("submit", addComment)
  likeButton.addEventListener("click", addLike)


})
