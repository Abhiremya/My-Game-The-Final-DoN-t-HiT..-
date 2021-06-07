class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.greeting = createElement('h3');
    bc1 = loadImage("images/bc.jpg"); 

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background (bk1)
   
    this.title.html("DoN't HiT!!");
        this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      background (bc1)
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      rank.updateCarsAtEnd()
    });

  }
}