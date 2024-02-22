const canvas = document.getElementById('canvas1');
//creo una istanza del rendering di canvas, ha built in 2d drawing methods
const ctx = canvas.getContext('2d');
//definisco width e hight della canvas, uso tutto lo schermo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//*canvas settings
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;

class Particle {
  constructor(effect) {
    this.colorArray = ['#bc34ed', '#c65aed', '#d27ff0', '#b415ed', '#4aa4f7']
    this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
    this.effect = effect;
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
    this.speedX; //positive means right
    this.speedY; // positive means down
    this.speedModifier = Math.floor(Math.random() * 5 + 1)
    this.history = [{ x: this.x, y: this.y }];
    this.maxLength = Math.floor(Math.random() * 300 + 10)
    this.angle = 0
    this.timer = this.maxLength * 2

    window.addEventListener("resize", (e) => this.reset())

  }
  draw(context) {
    //context.fillRect(this.x, this.y, 10, 10); //(x,y, width, height)
    context.beginPath()
    context.moveTo(this.history[0].x, this.history[0].y);//start point
    for (let i = 0; i < this.history.length; i++) {//collego tutti i punti del path
      context.lineTo(this.history[i].x, this.history[i].y);
    }
    context.strokeStyle = this.color //!metto il colore scelto alla linea
    context.stroke(); // e lo disegno
  }
  // update(){ //!old movement pre flowfield
  //   this.angle += 0.5
  //   // il Math.random mi da effetto di wiggle alle linee
  //   this.x += this.speedX + Math.sin(this.angle);
  //   this.y += this.speedY + Math.sin(this.angle);
  //   this.history.push({x: this.x, y: this.y});
  //   //se la linea e' troppo lunga inizio a shiftare via gli elementi, definendo quindi una linea lunga quanto ho messo in this.maxLength
  //   if(this.history.length > this.maxLength){
  //     this.history.shift()
  //   }
  // }

  update() {
    this.timer--;
    if (this.timer >= 1) {
      let x = Math.floor(this.x / this.effect.cellSize);
      let y = Math.floor(this.y / this.effect.cellSize);
      let index = y * this.effect.cols + x; //lo faccio dato che il flowField e' un array, moltiplico la row in cui sono per il numero di colonne per raggiungere la row giusta nella lista, poi aggiungo x per raggiungere la colonna giusta "nella lista"
      this.angle = this.effect.flowField[index];

      this.speedX = Math.cos(this.angle);
      this.speedY = Math.sin(this.angle);
      this.x += this.speedX;
      this.y += this.speedY;

      this.history.push({ x: this.x, y: this.y });
      //se la linea e' troppo lunga inizio a shiftare via gli elementi, definendo quindi una linea lunga quanto ho messo in this.maxLength
      if (this.history.length > this.maxLength) {
        this.history.shift()
      }
    } else if (this.history.length > 1) {
      this.history.shift();
    } else {
      this.reset();
    }

  }
  reset() {
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
    this.history = [{ x: this.x, y: this.y }];
    this.timer = this.maxLength * 2;
  }
}

//Manager di tutto
class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.particles = [];
    this.numberOfParticles = 600;

    //? FlowField setups
    this.cellSize = 10
    this.rows;
    this.cols;
    this.flowField = [];
    this.curve = 0.9
    this.zoom = 0.07

    //aggiungo una debugmode che si attiva premendo d
    this.debug = false;
    window.addEventListener('keydown', (e) => {
      if (e.key === 'd') this.debug = !this.debug //se true set it to false if false set it to true
    })


    this.init(); //pusha una nuova particella i quando genero una nuova particella

    window.addEventListener('resize', (e) => {
      this.resize(e.target.innerWidth, e.target.innerHeight);
      this.particles.forEach(particle => { particle.update() }) //?

    })
  }
  init() {
    //*create force field
    this.rows = Math.floor(this.height / this.cellSize);
    this.cols = Math.floor(this.width / this.cellSize);
    this.flowField = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let angle = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
        this.flowField.push(angle); //tengo conto che sto salvando i flowfield data come una lista e non una matrice
      }

    }

    //create particles
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(this)); //this references Effect class
    }
  }

  drawGrid(context) {
    context.save(); //built in canvas mothod che salva cosa succede su canvas e lo restora piu' tardi con context.restore()
    context.strokeStyle = "red"
    context.lineWidth = 0.3;
    for (let c = 0; c < this.cols; c++) {
      context.beginPath();
      context.moveTo(this.cellSize * c, 0);
      context.lineTo(this.cellSize * c, this.height);
      context.stroke();
    }
    for (let r = 0; r < this.rows; r++) {
      context.beginPath();
      context.moveTo(0, this.cellSize * r);
      context.lineTo(this.width, this.cellSize * r);
      context.stroke();
    }

    context.restore();
  }

  render(context) {
    if (this.debug == true) this.drawGrid(context)
    this.particles.forEach(particle => {
      particle.draw(context);
      particle.update(); //!updata solo una volta
    });
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;

  }
}

const effect = new Effect(canvas);


effect.render(ctx);

function animate() {
  //questo genera un loop, timestamps, si aggiusta al framerate del pc per creare l'animazione automaticamente

  ctx.clearRect(0, 0, canvas.width, canvas.height); //clearo la canvas ogni volta che genero un pixel nuovo
  effect.render(ctx);
  requestAnimationFrame(animate); //animate name of parent function
}
animate(); //! chiamo animate per fare iniziare la animazione

//*todo 
// variables: curve zoom cellsize numberofparticles 