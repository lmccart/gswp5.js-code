var robots;
var bot1;
var bot2;
var bot3;

function preload() {
  bot1 = loadImage("robot1.png");
  bot2 = loadImage("robot2.png");
  bot3 = loadImage("robot3.png");
  robots = loadTable("botArmy.tsv", "header");
}

function setup() {
  createCanvas(720, 480);
  imageMode(CENTER);
  for (var i = 0; i < robots.getRowCount(); i++) {
    var bot = robots.getNum(i, "type");
    var x = robots.getNum(i, "x");
    var y = robots.getNum(i, "y");
    var sc = 0.15;
    if (bot == 1) {
      image(bot1, x, y, bot1.width*sc, bot1.height*sc);
    } else if (bot == 2) {
      image(bot2, x, y, bot2.width*sc, bot2.height*sc);
    } else {
      image(bot3, x, y, bot3.width*sc, bot3.height*sc);
    }
  }
}