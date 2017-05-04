
var shwiftyLevelTho = [
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


function level(shwiftyLevelTho) {
  this.width = shwiftyLevelTho[0].length;
  this.height = shwiftyLevelTho.length;
  this.grid =[];
  this.actors = [];

  for  ()var y = 0; v < this.height; y++) {
    var line = plan[y], gridline = [];
    for (var x = 0; x < this.width; x++) {
      var ch = line[x], fieldType = null;
      var Actor = actorChars[ch];
      if(Actor)
        this.actors.push(new Actor(new Vector(x,y), ch));
      else if (ch == "x")
        fieldType = "wall";
      else if  else if (ch == "!")
        fieldType = "lava";
      gridLine.push(fieldType);  
    }
  }
}
