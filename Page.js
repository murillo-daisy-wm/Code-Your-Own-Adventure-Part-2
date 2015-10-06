




var yourName = prompt("what is your name?");
var game = prompt("It is time for lift-off would you like to abort or lift-off.  Your mission is to land on mars and find water on mars");
var random = Math.floor((Math.random() * 10) + 1);



switch (game) {
    case 'abort':
        alert("you failed your mission " + yourName);
        break;

    case'lift-off':
        var orbit= prompt( yourName + ".rov" +  " You are now in orbit how long would you like to engage your thrusters  (between 1 and 10 minutes?)");
        if (orbit <=5) {
            confirm ( yourName + "The engagement was too little and died as a result.");

        }


        else {
            var mars = confirm("You are orbiting mars, it is time to land.");
            var mars1 = prompt ("Would you like to land on Mars or a nearby moon?").toLowerCase();
            switch(mars){
                case'mars':
                    if(Math.floor((Math.random() * 10) + 1) > 7){
                        var landing= prompt("You've landed on Mars, where would you like to explore? North, South, West, or in Void?").toLowerCase();
                        switch(landing){
                            case'north':
                                var north = prompt("You've entered the North zone. Where there are deadly  and will attack you in any instance. Would you like to attack them? [Yes or No].").toLowerCase();
                                if (north === "yes"){
                                    confirm ("Unfortunately, you've died because bumble bees are strongly than you.");

                                }
                                else if( north ==="no"){
                                    confirm ("Good choice!");
                                }
                                else {
                                    confirm("Your answer was incorrect. GAME OVER.");
                                }
                                break;
                            case'south':
                                var south = prompt ("This land needs major help. You find a dead ape, would you like to collect for scientific research? Or, snap a pic and leave it alone?[collect or pic]").toLowerCase();
                                if (south === "collect"){
                                    confirm ("You've infect yourself yourself when you grabbed the monkey, and have stopped working since. GAME OVER.");n                                                        }
                                else if(south === "pic"){
                                    confirm ("You did the right thing, " + yourName);
                                }
                                else {
                                    confirm ("Your answer was incorrect. GAME OVER.");
                                }


                                break;
                            case 'west':
                                var west= prompt ("You've discovered water on this side. Some of it is ice and some of it is in gas form. There's a voice that comes from the gas it mentions 'Will you intake my soul?'What do you do? Itake the gas or absorb the solid form of water? [Intake or absorb]").toLowerCase();
                                if(west === "intake"){
                                    confirm ("You've inhaled the spirit of a dead martian and have 24 hrs to live.");
                                }
                                else if( west === "absorb"){
                                    confirm("You just absorbed Digoxin and have as a result. GAME OVER. ");
                                }
                                else{
                                    confirm("Your answer was incorrect. GAME OVER.");
                                }
                                break;
                            case 'Void':
                                var void1 = prompt ("You've entered a place where nothing exist but your imagination. There's nothing and gravity starts to compress against the metal. What are you going to do? Continue your exploration or abort the mission? [abort or explore").toLowerCase();
                                if (void1 === "abort") {
                                    confirm("Good choice, you have made the right choice");
                                }
                                else if (void1=== "explore") {
                                    confirm("You have been squished by gravity");
                                }
                                else {
                                    confirm("GAME OVER. You have made an awful choice.");
                                }
                                break;

                            case'moon':
                                if (mars1 === "moon"){
                                    var moon2 = prompt("You decide to land on the moon? land in a crater or on the plains?").toLowerCase();
                                    if (moon2 === "crater"){
                                        confirm("You land in a cold hole and freeze to death good job pilot.GAME OVER.");
                                    }
                                    else{
                                        confirm(" you land on the plains but sadly you didnt complete your mission. Game Over.");
                                    }
                                    break;







                                }}

                    }
            }
        }}



