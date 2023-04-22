// import Graph, { getMST } from './Graph.js';

const form = document.getElementById('form');

form.onsubmit = e => {
  e.preventDefault();

  const numOfVertices = document.getElementById('vertices').value;
  const isDirected = document.querySelector('input[name="directed"]').checked;

  const gp = new Graph(numOfVertices, isDirected);

  const edges = document.querySelectorAll('.edge');

  // for (const edge of edges) {
  //   const inputs = edge.querySelectorAll('input');
  //   const src = inputs[0].value;
  //   const dest = inputs[1].value;
  //   const wt = inputs[2].value;

  //   gp.addEdge(src, dest, Number(wt));
  // }

  // const gctx = document.getElementById('graph-canvas').getContext('2d');

  // const gp_nodes = drawGraph(gctx, gp.getNumOfVertices());

  // console.log('Kruskal', getMST(gp));
};

const gctx = document.getElementById('graph-canvas')



// // connecting edge
// gctx.beginPath();
// gctx.moveTo(gp_vertices_2[0].posX, gp_vertices_2[0].posY);
// gctx.lineTo(gp_vertices_2[1].posX, gp_vertices_2[1].posY);
// gctx.stroke();

// Eidht nodes

// // 5th node
// ctx.beginPath();
// ctx.arc((6 * width) / 8, (4 * height) / 8, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '4',
//   (6 * height) / 8 + textHorizontalPos,
//   (4 * height) / 8 + textVerticalPos
// );
// ctx.stroke();

// // 6th node
// ctx.beginPath();
// ctx.arc((5.5 * width) / 8, (2.5 * height) / 8, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '5',
//   (5.5 * height) / 8 + textHorizontalPos,
//   (2.5 * height) / 8 + textVerticalPos
// );
// ctx.stroke();

// // 7th node
// ctx.beginPath();
// ctx.arc((4 * width) / 8, (2 * height) / 8, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '6',
//   (4 * height) / 8 + textHorizontalPos,
//   (2 * height) / 8 + textVerticalPos
// );
// ctx.stroke();

// // 8th node
// ctx.beginPath();
// ctx.arc((2.5 * width) / 8, (2.5 * height) / 8, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '7',
//   (2.5 * height) / 8 + textHorizontalPos,
//   (2.5 * height) / 8 + textVerticalPos
// );
// ctx.stroke();

// Nine nodes

// // 1st node
// ctx.beginPath();
// ctx.arc((1.5 * width) / 9, (4.5 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '0',
//   (1.5 * width) / 9 + textHorizontalPos,
//   (4.5 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 2nd node
// ctx.beginPath();
// ctx.arc((2 * width) / 9, (6.5 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '1',
//   (2 * width) / 9 + textHorizontalPos,
//   (6.5 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 3rd node
// ctx.beginPath();
// ctx.arc((4 * width) / 9, (7.5 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '2',
//   (4 * width) / 9 + textHorizontalPos,
//   (7.5 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 4th node
// ctx.beginPath();
// ctx.arc((6 * width) / 9, (7 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '3',
//   (6 * width) / 9 + textHorizontalPos,
//   (7 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 5th node
// ctx.beginPath();
// ctx.arc((7.5 * width) / 9, (5.5 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '4',
//   (7.5 * width) / 9 + textHorizontalPos,
//   (5.5 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 6th node
// ctx.beginPath();
// ctx.arc((7.5 * width) / 9, (3.5 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '5',
//   (7.5 * width) / 9 + textHorizontalPos,
//   (3.5 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 7th node
// ctx.beginPath();
// ctx.arc((6 * width) / 9, (2 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '6',
//   (6 * width) / 9 + textHorizontalPos,
//   (2 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 8th node
// ctx.beginPath();
// ctx.arc((4 * width) / 9, (1.5 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '7',
//   (4 * width) / 9 + textHorizontalPos,
//   (1.5 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// // 1st node
// ctx.beginPath();
// ctx.arc((2 * width) / 9, (2.5 * height) / 9, _r, 0, 2 * Math.PI);
// ctx.fillText(
//   '8',
//   (2 * width) / 9 + textHorizontalPos,
//   (2.5 * height) / 9 + textVerticalPos
// );
// ctx.stroke();

// Ten nodes

// // 1st node
// ctx.beginPath();
// ctx.arc(1.5 * width / 10, 5 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('0', 1.5 * width / 10 + textHorizontalPos, 5 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 2nd node
// ctx.beginPath();
// ctx.arc(2 * width / 10, 7 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('1', 2 * width / 10 + textHorizontalPos, 7 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 3rd node
// ctx.beginPath();
// ctx.arc(4* width / 10, 8.5 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('2', 4 * width / 10 + textHorizontalPos, 8.5 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 4th node
// ctx.beginPath();
// ctx.arc(6* width / 10, 8.5 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('3', 6 * width / 10 + textHorizontalPos, 8.5 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 5th node
// ctx.beginPath();
// ctx.arc(8* width / 10, 7 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('4', 8 * width / 10 + textHorizontalPos, 7 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 6th node
// ctx.beginPath();
// ctx.arc(8.5 * width / 10, 5 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('5', 8.5 * width / 10 + textHorizontalPos, 5 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 7th node
// ctx.beginPath();
// ctx.arc(8* width / 10, 3 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('6', 8 * width / 10 + textHorizontalPos, 3 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 8th node
// ctx.beginPath();
// ctx.arc(6* width / 10, 1.5 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('7', 6 * width / 10 + textHorizontalPos, 1.5 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 9th node
// ctx.beginPath();
// ctx.arc(4* width / 10, 1.5 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('8', 4 * width / 10 + textHorizontalPos, 1.5 * height / 10 + textVerticalPos);
// ctx.stroke();

// // 10th node
// ctx.beginPath();
// ctx.arc(2 * width / 10, 3 * height / 10, _r, 0, 2 * Math.PI);
// ctx.fillText('9', 2 * width / 10 + textHorizontalPos, 3 * height / 10 + textVerticalPos);
// ctx.stroke();
