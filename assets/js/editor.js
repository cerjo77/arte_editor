const div = document.getElementById("arte");
const rect = div.getBoundingClientRect();
let divWidth = rect.width;
let divHeight = rect.height;

function heightResize(){
    div.style.height = `${divWidth - (divWidth*0.55)}px`;
    document.getElementById("logText").innerText = `${divWidth - (divWidth*0.55)}`;
}

function throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

//heightResize();

window.addEventListener("resize", throttle(heightResize,100));