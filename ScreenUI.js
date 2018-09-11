var animation = {};
function ScreenUI(state) {
  this.state = state;
  this.state.start();

  this.calculations = function () {
    this.pointer = new TextUI(String.fromCharCode(9732), 0, 0);
    pointer = this.pointer;
    this.state.calculations();
  };
  //10132
  //9732
  //10169

  this.mousemove = function (pos) {
    this.pointer.init_x = pos.x;
    this.pointer.init_y = pos.y;
  };

  this.click = function (pos) {
    player = undefined;
    game = new Menu();
  };

  this.draw = function () {
    drawBackground();

    this.state.draw();

    drawPointer();
  };
  this.calculations();
}

var ScreenType = {
  lost: {
    start: function(){},
    calculations: function(){
      this.text = "You Lost. Click to play again.";
      this.main = new TextUI(this.text, CONFIG.screen.w / 3, CONFIG.screen.h / 3);
    },
    draw: function(){
      drawHelpText(this.main);
    }
  },
  win: {
    start: function(){
      animation = new Animation();
    },
    calculations: function(){
      this.text = "Congratulations! Mr Bowman can call his mum now";
      this.main = new TextUI(this.text, CONFIG.screen.w / 3, CONFIG.screen.h / 16);
      animation.calculations();
    },
    draw: function(){
      drawHelpText(this.main);
      animation.draw();
    }
  }
};