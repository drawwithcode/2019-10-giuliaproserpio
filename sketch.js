var pizza;
var texpizza;
var pizzas;

function preload() {
  pizza = loadModel("assets/MOD_PizzaSlice.obj", true);
  texpizza = loadImage("assets/PIZZA.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //how to change to webgl
  angleMode(DEGREES);
}


function draw() {
  background(color('#000000'));



  ambientLight(50, 50, 100);


  rotateY(frameCount * 0.9);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 0, 250, locX, locY, 50);


  noStroke();
  model(pizza);
  texture(texpizza);

}
