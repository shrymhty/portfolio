import imgSrc from '../../assets/m3.png';

const asciiSketch = (p) => {
  const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
  let img;
  let cols = 100;
  let rows = 100;
  let charGrid = [];

  p.setup = () => {
    p.createCanvas(400, 500);
    p.frameRate(10); // Controls speed of animation

    p.loadImage(imgSrc, (loaded) => {
      img = loaded;
      prepareImage();
    });
  };

  const prepareImage = () => {
    const small = p.createImage(img.width, img.height);
    small.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
    small.resize(cols, rows);
    small.loadPixels();

    for (let j = 0; j < rows; j++) {
      charGrid[j] = [];
      for (let i = 0; i < cols; i++) {
        const idx = (i + j * cols) * 4;
        const r = small.pixels[idx];
        const g = small.pixels[idx + 1];
        const b = small.pixels[idx + 2];
        const avg = (r + g + b) / 3;

        charGrid[j][i] = {
          brightness: avg,
          char: getRandomChar(avg)
        };
      }
    }
  };

  const getRandomChar = (brightness) => {
    // Use brightness to bias characters (optional)
    const index = Math.floor(p.map(brightness, 0, 255, density.length - 1, 0));
    // Randomize within a range near that brightness
    const offset = p.floor(p.random(-2, 3));
    const finalIndex = p.constrain(index + offset, 0, density.length - 1);
    return density.charAt(finalIndex);
  };

  p.draw = () => {
    p.background(0);

    const w = p.width / cols;
    const h = p.height / rows;

    p.textSize(w * 0.95);
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont('monospace');

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const cell = charGrid[j][i];

        // Occasionally change character for matrix effect
        if (p.random() < 0.15) {
          cell.char = getRandomChar(cell.brightness);
        }

        const brightness = cell.brightness;
        p.fill(brightness > 180 ? 255 : brightness > 100 ? 180 : 80);
        p.text(cell.char, i * w + w / 2, j * h + h / 2);
      }
    }
  };
};

export default asciiSketch;
