var numRobotTypes = 3; 
var images = [];
var scaling = 0.15;
var botArmy;

function preload() {
  for (var i = 0; i < numRobotTypes; i++) {
    images[i] = loadImage("robot" + (i+1) + ".png");
  }
  botArmy = loadTable("botArmy.tsv", "header");
}

function setup() {
  createCanvas(720, 480);
  imageMode(CENTER);
  for (var i = 0; i < botArmy.getRowCount(); i++) {
    var robotType = botArmy.getNum(i, "type");
    var x = botArmy.getNum(i, "x");
    var y = botArmy.getNum(i, "y");
    
    var bot = images[robotType - 1];
    image(bot, x, y, bot.width*scaling, bot.height*scaling);
  }
}