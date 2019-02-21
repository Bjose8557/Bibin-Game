const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    START:  Symbol("start"),
    EYES: Symbol("eyes"),
    GLASS:Symbol("glass"),
    KNIFE:Symbol("knife"),
    PHONE:Symbol("phone"),
    WATER:Symbol("water"),
    PLAY: Symbol("play"),
    READY: Symbol("ready"),
    MIRROR: Symbol("mirror"),    
    DRINK: Symbol("drink"),   
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Welcome to Halloween week.I know you are bored at your home.Do you want to play Hunted House Game";
                this.stateCur = GameState.START;
                break;
            case GameState.START:
                if(sInput.toLowerCase().match("play")){
                    sReply = "He He... Go to downstairs and look for is there is snowy outside";
                }else{
                    sReply ="He He... Hunted house is waiting for you for a long to play.Are you ready or do you want to quit?";
                    this.stateCur = GameState.EYES;
                }
                break;
            case GameState.EYES:
                if(sInput.toLowerCase().match("ready")){
                    sReply = "Lets start..Here is your first clue..If some small flies hit your eyes and you want to look what it is.Where would you look to see your face? It should be some where in your bathroom"
                    this.stateCur = GameState.DRINK;
                }else{
                    sReply = "He He... Hunted house is waiting for you for a long to play.Are you ready or do you want to quit?";
                    this.stateCur = GameState.START;

                }
                break;
            case GameState.DRINK:
                if(sInput.toLowerCase().match("mirror")){
                    sReply = "Yeh!!! you got this..Completed the first level.Here is the second clue..You will drink this when u feel thirsty?";
                    this.stateCur = GameState.WATER;
                }else{
                    sReply = "Oops..!! you are wrong..I think you need to go back to your school again or consult a doctor.. Congrats you have Brain disorder";
                    this.stateCur = GameState.START;
    
                }
                break;
            case GameState.WATER:
                if(sInput.toLowerCase().match("water")){
                    sReply = "Yeh!!! Congrats..Completed the second level.Here is the third clue..You will use this to cut fruits?";
                    this.stateCur = GameState.KNIFE;

                }else{
                    sReply = "You fail..!! I think you need to go back to your school again or consult a doctor.. Congrats you have Brain disorder";
                    this.stateCur = GameState.START;
    
                }
                break;
            case GameState.KNIFE:
                if(sInput.toLowerCase().match("knife")){
                    sReply = "Yeh!!! well done..Completed the third level.Here is the forth clue..What will you use to call someone?";
                    this.stateCur = GameState.PHONE;

                }else{
                    sReply = "Oops..!! Thats a wrong hit..I think you need to go back to your school again or consult a doctor.. Congrats you have Brain disorder";
                    this.stateCur = GameState.START;
    
                }
                break;
            case GameState.PHONE:
                    if(sInput.toLowerCase().match("phone")){
                        sReply = "Yeh!!! amazing..Completed all level.You Win!!All done do you want to play again..?";
                        this.stateCur = GameState.START;
    
                    }
            
        }
        return([sReply]);
    }
}