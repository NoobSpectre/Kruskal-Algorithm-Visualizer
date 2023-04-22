const drawVertex = (ctx, posX, posY, text) => {
  const textHorizontalShift = -5;
  const textVerticalShift = 6;
  ctx.fillStyle = 'aqua';
  ctx.font = '20px sans-serif';
  const _r = 15;

  ctx.beginPath();
  ctx.arc(posX, posY, _r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeText(text, posX + textHorizontalShift, posY + textVerticalShift);
  ctx.stroke();
};

export const drawGraph = (ctx, vertices) => {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);
  const posArray = [];
  let posX = 0,
    posY = 0;

  switch (vertices) {
    case '1':
      // single node
      (posX = width / 2), (posY = height / 2);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });
      break;
    case '2':
      // Two nodes
      // 1st node
      (posX = width / 4), (posY = height / 2);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });

      // 2nd node
      (posX = (3 * width) / 4), (posY = height / 2);
      drawVertex(ctx, posX, posY, '2');
      posArray.push({ posX, posY });
      break;
    case '3':
      // Three nodes
      // 1st node
      (posX = width / 3), (posY = (2 * height) / 3);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });

      // 2nd node
      (posX = (2 * width) / 3), (posY = (2 * height) / 3);
      drawVertex(ctx, posX, posY, '2');
      posArray.push({ posX, posY });

      // 3rd node
      (posX = width / 2), (posY = height / 3);
      drawVertex(ctx, posX, posY, '3');
      posArray.push({ posX, posY });
      break;
    case '4':
      // Four nodes
      // 1st node
      (posX = width / 4), (posY = height / 2);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });

      // 2nd node
      (posX = width / 2), (posY = (3 * height) / 4);
      drawVertex(ctx, posX, posY, '2');
      posArray.push({ posX, posY });

      // 3rd node
      (posX = (3 * width) / 4), (posY = height / 2);
      drawVertex(ctx, posX, posY, '3');
      posArray.push({ posX, posY });

      // 4th node
      (posX = width / 2), (posY = height / 4);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });
      break;
    case '5':
      // Five nodes
      // 1st node
      (posX = width / 5), (posY = height / 2);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });

      //2nd node
      (posX = width / 2), (posY = (4 * height) / 5);
      drawVertex(ctx, posX, posY, '2');
      posArray.push({ posX, posY });

      //3rd node
      (posX = (4 * width) / 5), (posY = (3.5 * height) / 5);
      drawVertex(ctx, posX, posY, '3');
      posArray.push({ posX, posY });

      // 4th node
      posY = (1.5 * height) / 5;
      drawVertex(ctx, posX, posY, '4');
      posArray.push({ posX, posY });

      //5th node
      (posX = width / 2), (posY = height / 5);
      drawVertex(ctx, posX, posY, '5');
      posArray.push({ posX, posY });
      break;
    case '6':
      // Six nodes
      // 1st node
      (posX = width / 6), (posY = height / 2);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });

      // 2nd node
      (posX = width / 3), (posY = (5 * height) / 6);
      drawVertex(ctx, posX, posY, '2');
      posArray.push({ posX, posY });

      // 3rd node
      (posX = (2 * width) / 3), (posY = (5 * height) / 6);
      drawVertex(ctx, posX, posY, '3');
      posArray.push({ posX, posY });

      // 4th node
      (posX = (5 * width) / 6), (posY = height / 2);
      drawVertex(ctx, posX, posY, '4');
      posArray.push({ posX, posY });

      // 5th node
      (posX = (2 * width) / 3), (posY = height / 6);
      drawVertex(ctx, posX, posY, '5');
      posArray.push({ posX, posY });

      // 6th node
      (posX = width / 3), (posY = height / 6);
      drawVertex(ctx, posX, posY, '6');
      posArray.push({ posX, posY });
      break;
    case '7':
      // Seven nodes
      // 1st node
      (posX = (1.5 * width) / 7), (posY = (3.5 * height) / 7);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });

      //2nd node
      (posX = (2.5 * width) / 7), (posY = (5 * height) / 7);
      drawVertex(ctx, posX, posY, '2');
      posArray.push({ posX, posY });

      //3rd node
      (posX = (4 * width) / 7), (posY = (5.5 * height) / 7);
      drawVertex(ctx, posX, posY, '3');
      posArray.push({ posX, posY });

      //4th node
      (posX = (5.5 * width) / 7), (posY = (4.5 * height) / 7);
      drawVertex(ctx, posX, posY, '4');
      posArray.push({ posX, posY });

      //5th node
      (posX = (5.5 * width) / 7), (posY = (2.5 * height) / 7);
      drawVertex(ctx, posX, posY, '5');
      posArray.push({ posX, posY });

      // 6th node
      (posX = (4 * width) / 7), (posY = (1.5 * height) / 7);
      drawVertex(ctx, posX, posY, '6');
      posArray.push({ posX, posY });

      // 7th node
      (posX = (2.5 * width) / 7), (posY = (2 * height) / 7);
      drawVertex(ctx, posX, posY, '7');
      posArray.push({ posX, posY });
      break;
    case '8':
      // Eight nodes
      // 1st node
      (posX = width / 4), (posY = height / 2);
      drawVertex(ctx, posX, posY, '1');
      posArray.push({ posX, posY });

      // 2nd node
      (posX = (2.5 * width) / 8), (posY = (5.5 * height) / 8);
      drawVertex(ctx, posX, posY, '2');
      posArray.push({ posX, posY });

      // 3rd node
      (posX = width / 2), (posY = (3 * height) / 4);
      drawVertex(ctx, posX, posY, '3');
      posArray.push({ posX, posY });

      // 4th node
      (posX = (5.5 * width) / 8), (posY = posX);
      drawVertex(ctx, posX, posY, '4');
      posArray.push({ posX, posY });

      // 5th node
      (posX = (3 * width) / 4), (posY = height / 2);
      drawVertex(ctx, posX, posY, '5');
      posArray.push({ posX, posY });

      // 6th node
      (posX = (5.5 * height) / 8), (posY = (2.5 * width) / 8);
      drawVertex(ctx, posX, posY, '6');
      posArray.push({ posX, posY });

      // 7th node
      (posX = width / 2), (posY = height / 4);
      drawVertex(ctx, posX, posY, '7');
      posArray.push({ posX, posY });

      // 8th node
      (posX = (2.5 * width) / 8), (posY = posX);
      drawVertex(ctx, posX, posY, '8');
      posArray.push({ posX, posY });
      break;
  }

  return posArray;
};
