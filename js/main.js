const flipCard = document.getElementById("flipCard");
const flipCardBox = document.querySelector(".flip-card")

flipCardBox.addEventListener("click", () =>{
  flipCard.classList.add("flipAll");
  setTimeout(function(){
    flipCard.classList.remove("flipAll");
}, 2000);
})