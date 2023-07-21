// do NOT remove the 'export' keyword
export class Collectible {
    // TODO: constructor, collect, getScore, and getCollectedMessage
    constructor(name,worth){
        this.name = name;
        this.worth = worth;
        this.count = 0;
        console.log(this.name , this.worth, this.count);
    }
    collect(){
         this.count++;
    }
    getScore(){
        return this.count * this.worth;
    }
    getCollectedMessage(){
        return `${this.count} ${this.name}s collected`
    }
}

// do NOT remove the 'export' keyword
export class Coin extends Collectible {
    // TODO: constructor and inheritance
    constructor(){
        super("Coin",10);
        console.log("coin called");
    }
}

// do NOT remove the 'export' keyword
export class Gem extends Collectible{
    // TODO: constructor and inheritance
    constructor(){
        super("Gem",50);
    }
}
