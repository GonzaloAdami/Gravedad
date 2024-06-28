var block1 = [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0];
var block2 = [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0];
var block3 = [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
var block4 = [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0];
var block5 = [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0];
var block6 = [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var block7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
var block8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
var block9 = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0];


const printBlocks = (blocks) => {
  const colorize = (item) => item === 1 ? `\x1b[32m${item}\x1b[0m` : `\x1b[31m${item}\x1b[0m`;
  
  console.log("      __________________      ");
  blocks.forEach(block => {
    console.log("| " + block.map(colorize).join(' ') + " |");
  });
  console.log("      __________________      ");
};

console.log("Estado inicial de los bloques:");
printBlocks([block1, block2, block3, block4, block5, block6, block7, block8, block9]);

var blocks = [block1, block2, block3, block4, block5, block6, block7, block8, block9];

const move = () => {
  let moved = false;
  
  // Iteramos desde el último bloque hacia el primero para simular la gravedad
  for (let i = blocks.length - 1; i > 0; i--) {
    let frame = blocks[i - 1];
    let nextFrame = blocks[i];

    // Mover elementos del frame actual al siguiente frame si está vacío
    frame.forEach((item, index) => {
      if (item === 1 && nextFrame[index] === 0) {
        nextFrame[index] = 1;
        frame[index] = 0;
        moved = true;
      }
    });
  }

  printBlocks([block1, block2, block3, block4, block5, block6, block7, block8, block9]);
  
  // Si no se ha realizado ningún movimiento, detener el intervalo
  if (!moved) {
    clearInterval(interval);
  }
};

// Llamar a la función move periódicamente
const interval = setInterval(move, 1000);
