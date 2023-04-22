const header = document.querySelector('.header');

/* Header Graph Edge function */
const connect = () => {
  const headerWidth = header.offsetWidth;
  // width of the edge/connector
  let edgeWidth = headerWidth - 230;
  // angle of the edge in degree
  let edgeDeg = Math.ceil((650 - edgeWidth) / 20);
  if (edgeWidth <= 206) {
    edgeWidth = 180;
    edgeDeg = 75;
  }

  header.style.setProperty('--edgeWidth', `${edgeWidth}px`);
  header.style.setProperty('--rotateDeg', `${edgeDeg}deg`);
};

// runs the connect function on window/page load
window.addEventListener('load', connect);

// 3 nodes having 3 values
const TEXTS = ["Kruskal's", 'Algorithm', 'Simulator'];

// 1st node animation
const text1 = document.getElementById('text-1');
let text1DivTimer = setTimeout(() => {
  for (let letter of TEXTS[0]) {
    text1.innerHTML += `<span>${letter}</span>`;
  }

  let char = 0;
  const text1StrTimer = setInterval(() => {
    const span = text1.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === TEXTS[0].length) {
      clearInterval(text1StrTimer);
      text1DivTimer = null;
      return;
    }
  }, 50);

  clearTimeout(text1DivTimer);
}, 600);

// 2nd node animation
const text2 = document.getElementById('text-2');
let text2DivTimer = setTimeout(() => {
  for (let letter of TEXTS[1]) {
    text2.innerHTML += `<span>${letter}</span>`;
  }

  let char = 0;
  const text2StrTimer = setInterval(() => {
    const span = text2.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === TEXTS[1].length) {
      clearInterval(text2StrTimer);
      text2DivTimer = null;
      return;
    }
  }, 50);

  clearTimeout(text2DivTimer);
}, 2000);

// 3rd node animation
const text3 = document.getElementById('text-3');
let text3DivTimer = setTimeout(() => {
  for (let letter of TEXTS[2]) {
    text3.innerHTML += `<span>${letter}</span>`;
  }

  let char = 0;
  const text3StrTimer = setInterval(() => {
    const span = text3.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === TEXTS[2].length) {
      clearInterval(text3StrTimer);
      text3DivTimer = null;
      return;
    }
  }, 50);

  clearTimeout(text3DivTimer);
}, 3300);
