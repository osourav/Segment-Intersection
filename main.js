function setCanvasSize(parent, cvs, w, h, scale) {
   parent.style.width = `${w}px`;
   parent.style.height = `${h}px`;
   cvs.width = w * scale;
   cvs.height = h * scale;
}

const rows = 40;
const cols = 40;
const ww = window.innerWidth;
const hh = window.innerHeight;
const FPS = 2;
const scale = 10;


const x = 10000;

