
document.getElementById("menu").addEventListener("click", menuOpen);

function menuOpen() {
  if (window.innerWidth < 767) {
    let x = document.getElementById("myLinks");
    let y = document.getElementById("social");
    x.addEventListener("click", () => {
      x.style.display =y.style.display = "none";
    })
    y.addEventListener("click", () => {
      x.style.display = y.style.display = "none";
    })

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    if (y.style.display == "flex") {
      y.style.display = "none";
    } else {
      y.style.display = "flex";
    }
  }

}








