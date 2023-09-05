let windowSize = window.innerWidth;
document.getElementById("menu").addEventListener("click", myFunction);

if (windowSize < 768){
  document.getElementById("contact").addEventListener("click", anotherFunction)
}

function anotherFunction(){
    let social = document.getElementById("social");
    if (social.style.display === "none") {
        social.style.display = "flex";
    function makeNone(){
        social.style.display = "none";
    }
    setTimeout(makeNone, 10000);

  } else {
    social.style.display = "none";
  }
  }


function myFunction(id) {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}