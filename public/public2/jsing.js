
var shwiftyLevelTho = [
  " o                                ",
  " o                                ",
  " o                               v",
  " o                                ",
  " o                                ",
  "                oo                ",
  "xxxx          xxxxx        xxxxxxx",
  "   x       xxx    x      xx      x",
  "   xxx    x       x              x",
  "                       o       o x",
  "  xxxxxxxxxxxxx       xxx    xxxxx",
  "       @      x!!!!!!!!!!!!!!!!!xx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];
//shwiftyLevelTho == plan
function level(shwiftyLevelTho) {
  this.width = shwiftyLevelTho[0].length;
  this.height = shwiftyLevelTho.length;
  this.grid =[];
  this.actors = [];
//shwiftyLevelTho == plan
  for  ()var y = 0; v < this.height; y++) {
    var line = shwiftyLevelTho[y], gridline = [];
    for (var x = 0; x < this.width; x++) {
      var ch = line[x], fieldType = null;
      var Actor = actorChars[ch];
      if(Actor)
        this.actors.push(new Actor(new Vector(x,y), ch));
      else if (ch == "x")
        fieldType = "wall";
      else if (ch == "!")
        fieldType = "lava";
      gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }
  this.player = this.actors.filter(function(actor){
    return actor.type == "player";
  })[0];
  this.status = this.finishDelay = null;
}

Level.prototype.isFinished = function(){
  return this.status != null && this.finishDelay < 0;
};

function Vector(x,y) {
  this.x =  x; this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y +other.y);
};
Vector.prototype.times = function(factor){
  return new Vector(this.x * factor, this.y *factor);
};

var actorChars = {
  "@": Player,
  "o": Coin,
  "=": lava, "|": Lava, "v": Lava
};

function Player(pos) {
  this.pos = pos,plus(new Vector(0, -0.5));
  this.size = new Vector(0.8, 1.5);
  this.speed = new Vector(0,0)
}
Player.prototype.type = "player";

function Lava(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch == "=") {
    this.speed = new Vector(2, 0);
  } else if (ch == "|") {
    this.speed = new Vector(0,2);
  } else if (ch == "v") {
    this.speed = new Vector(0, 3);
    this.repeatPos = pos;
  }
}
lava.prototype.type = "Lava";

function Coin(pos){
  this.basePos = this.pos = pos.plus(new Vector(0,2, 0.1));
  this.size = new Vector(0.6, 0.6);
  this.wobble = Math.random() * Math.PI * 2;
}
Coin.prototype.type = "coin";

var simpleLevel = new Level(shwiftyLevelTho);
console.log(simpleLevel.width, "by" simpleLevel.height);
//oh shit did i do this right.

/*fuck it ayyyy tho we keep it movin
bluh
bruh
ayyyy*/

function elt(name, className){
  var elt = document.createElement(name);
  if(className) elt.className = className;
  return elt;
}

function DOMDisplay(parent, level){
  this.wrap = parent.appendChild(elt("div", "game"));
  this.level = level;

  this.wrap.appendChild(this.drawBackground());
  this.actorLayer = null;
  this.drawFrame();
}
