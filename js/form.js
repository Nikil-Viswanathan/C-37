class Form{
    constructor(){
this.input = createInput("Name");
this.button = createButton("Play");
this.button2 = createButton("Reset");
this.greeting = createElement('h2');
this.title = createElement('h1');
    }
    hide(){
        this.greeting.hide();
        this.title.hide();
        this.button.hide();
        this.button2.hide();
        this.input.hide();

    }
    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50 ,20);
        this.input.position(displayWidth/2 - 40 , displayHeight/2);
        this.button.position(displayWidth/2 - 40 , displayHeight/2 + 40);
        this.button2.position(displayWidth - 100 , 30);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+ 1 
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(displayWidth/2 , displayHeight/2);
        })
        this.button2.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
}