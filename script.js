document.getElementById("menu").addEventListener("click", menuOpen);

document.getElementById("myLinks").addEventListener("click", ()=>{
document.getElementById("myLinks").style.display = "none";
document.getElementById("social").style.display = "none";
})
document.getElementById("social").addEventListener("click", ()=>{
document.getElementById("myLinks").style.display = "none";
document.getElementById("social").style.display = "none";
})

function menuOpen() {
  let x = document.getElementById("myLinks");
  let y = document.getElementById("social");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  if (y.style.display == "flex"){
      y.style.display = "none";
  }else{
    y.style.display = "flex";
  }
}







