$(document).ready(function() {


//variables for who's chosen
var characterChosen = false;

var enemyChosen = false;
var enemyTwoChosen = false;
var enemyThreeChosen = false;

var defenderOneDead = false;
var defenderTwoDead = false;

//variables for game
var chosenImage;
var enemyImage;

var chosenName; 
var chosenHP; 
var chosenAP; 
var chosenCP; 

var enemyName;
var enemyHP;
var enemyAP;
var enemyCP;

var enemyTwoName;
var enemyTwoHP;
var enemyTwoAP;
var enemyTwoCP;

var enemyThreeName;
var enemyThreeHP;
var enemyThreeAP;
var enemyThreeCP;


//click function that that starts the game by picking user's character
$(".character").on("click", function() {

    //if no one hasn't been chosen yet choose first character
    if (!characterChosen && !enemyChosen && !enemyTwoChosen && !enemyThreeChosen) {
        
        //give the id attribute from the chosen character and assign it to chosenImage variable
        chosenImage = $(this).attr("id");

        //add a class of chosenImage to the chosen character
        $(this).addClass("chosenImage");
        $(this).removeClass("character");

        //places the character that was chosen into the Your Character slot
        $("#your-character").html(this);

        //places the remaining characters into enemies slot
        $(".character").removeClass("character").addClass("enemyImage");
        $("#starting-characters").appendTo("#enemies-avail");

        //character is chosen so it cannot be chosen again.
        characterChosen = true;   
        console.log(chosenImage);

        // now to choose the first defender from the enemies
    } else if (characterChosen && !enemyChosen && !enemyTwoChosen && !enemyThreeChosen) {

        //give the id attribute from the chosen defender and assign it to the enemyImage variable
        defenderImage = $(this).attr("id");

        //add a class of enemyImage to the chosen defender
        $(this).removeClass("enemyImage").addClass("defenderImage");
        
        //first defender chosen so it cannot be chosen again
        enemyChosen = true; 
        characterChosen = false;

        //put the first defender character into defender slot
        $("#defender").html(this);
        console.log(enemyImage)
        
        firstDefender();

    } else if (!characterChosen && enemyChosen && !enemyTwoChosen && !enemyThreeChosen && enemyHP <= 0) {

        //give the id attribute from the second defender and assign it to the enemyTwoImage variable
        defenderImage = $(this).attr("id");

        //add a class of enemyTwoImage to the second defender
        $(this).addClass("defenderImage");
        
        //second defender chosen so it cannot be chosen again
        enemyTwoChosen = true; 
        enemyChosen = false;

        //put the second defender character into defender slot
        $("#defender").html(this);
        console.log(defenderImage)
        
        secondDefender();

    } else if (!characterChosen && !enemyChosen && enemyTwoChosen && !enemyThreeChosen && enemyTwoHP <= 0) {

        //give the id attribute from the third defender and assign it to the enemyThreeImage variable
        defenderImage = $(this).attr("id");

        //add a class of enemyThreeImage to the third defender
        $(this).addClass("defenderImage");
        
        //third defender chosen so it cannot be chosen again
        enemyThreeChosen = true; 
        enemyTwoChosen = false; 

        //put the third defender character into defender slot
        $("#defender").html(this);
        console.log(defenderImage)
        
        thirdDefender();

    } 

    
});


//function for first defender
function firstDefender() {

    //assigns variables for each chosen character and defender's stats
    chosenName = $(".chosenImage").attr("name")
    chosenHP = $(".chosenImage").attr("hp")
    chosenAP = $(".chosenImage").attr("ap")
    chosenCP = $(".chosenImage").attr("cp")
    
    enemyName = $(".defenderImage").attr("name")
    enemyHP = $(".defenderImage").attr("hp")
    enemyAP = $(".defenderImage").attr("ap")
    enemyCP = $(".defenderImage").attr("cp")

    //console log to see if values are displayed correctly
    console.log(chosenName + " " + chosenHP + " " + chosenAP + " " + chosenCP)
    console.log(enemyName + " " + enemyHP + " " + enemyAP + " " + enemyCP)

   
        //once characters are set, attack button can be clicked to start battle
        $(".attack-button").on("click", function() {

            //Attack only occurs when defender's HP and chosen character's HP is greater than 0 
            if (enemyHP > 0 && !defenderOneDead && !defenderTwoDead && !enemyTwoChosen) {

                //make HP of character and enemy decrease according to the attack power and counter power
                chosenHP -= enemyCP;
                chosenAP = parseInt(chosenAP) + 10;
                enemyHP -= chosenAP;

                //console HP and AP after attacks
                console.log(chosenHP + " " + chosenAP + " " + enemyHP);

                //selecting the span in the div with class of chosenImage and enemyImage to input their current health
                $(".chosenImage span").html(chosenHP);
                $(".defenderImage span").html(enemyHP);

                //input current attack and health info under defender image
                $("#stats").html("<div>" + "You attacked " + enemyName + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyName + " attacked you back for " + enemyCP + " damage." + "</div>")
                
                //if enemy's HP goes below zero, do this
                if (enemyHP <= 0) {

                    //remove enemy's image and clear stats text
                    $("#defender").html("Pick another defender.");

                    //make defender one dead
                    defenderOneDead = true;
                    
                //if chosen player HP goes below zero, game over alert then reload game.
                } else if (chosenHP <= 0) {

                    alert("You Lost! GAME OVER!");
                    location.reload();
    
                }
                
            } 

        });
    
  
}
    

function secondDefender() {

    //give variables for second defender's stats
    enemyTwoName = $(".defenderImage").attr("name")
    enemyTwoHP = $(".defenderImage").attr("hp")
    enemyTwoAP = $(".defenderImage").attr("ap")
    enemyTwoCP = $(".defenderImage").attr("cp")

    console.log(enemyTwoName + " " + enemyTwoHP + " " + enemyTwoAP + " " + enemyTwoCP)

        //once characters are set, attack button can be clicked to start battle
        $(".attack-button").on("click", function() {
            
            //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
            if (enemyTwoHP > 0 && chosenHP > 0 && defenderOneDead && !defenderTwoDead) {

                //make HP of character and enemy decreace according to the attack power and counter power
                chosenHP -= enemyTwoCP;
                chosenAP = parseInt(chosenAP) + 10;
                enemyTwoHP -= chosenAP;

                console.log(chosenHP + " " + chosenAP + " " + enemyTwoHP);

                //selecting the span in the div with class of chosenImage and enemyImage to input their current health
                $(".chosenImage span").html(chosenHP);
                $(".defenderImage span").html(enemyTwoHP);

                //input current attack and health info under defender image
                $("#stats").html("<div>" + "You attacked " + enemyTwoName + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyTwoName + " attacked you back for " + enemyTwoCP + " damage." + "</div>")
                
                if (enemyTwoHP <= 0 && chosenHP > 0 && defenderOneDead && !defenderTwoDead) {

                    //remove enemy's image and clear stats text
                    $("#defender").html("Pick another defender.");

                    defenderTwoDead = true;
    
                } else if (chosenHP <= 0) {

                    alert("GAME OVER!");
                    location.reload();
    
                } 
                
        
            } 
            
        });

    
}


function thirdDefender() {

    //give variables for second defender's stats
    enemyThreeName = $(".defenderImage").attr("name")
    enemyThreeHP = $(".defenderImage").attr("hp")
    enemyThreeAP = $(".defenderImage").attr("ap")
    enemyThreeCP = $(".defenderImage").attr("cp")

    console.log(enemyThreeName + " " + enemyThreeHP + " " + enemyThreeAP + " " + enemyThreeCP)

        //once characters are set, attack button can be clicked to start battle
        $(".attack-button").on("click", function() {

            //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
            if (enemyThreeHP > 0 && chosenHP > 0) {

                //make HP of character and enemy decreace according to the attack power and counter power
                chosenHP -= enemyThreeCP;
                chosenAP = parseInt(chosenAP) + 10;
                enemyThreeHP -= chosenAP;

                console.log(chosenHP + " " + chosenAP + " " + enemyThreeHP);

                //selecting the span in the div with class of chosenImage and enemyImage to input their current health
                $(".chosenImage span").html(chosenHP);
                $(".defenderImage span").html(enemyThreeHP);

                //input current attack and health info under defender image
                $("#stats").html("<div>" + "You attacked " + enemyThreeName + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyThreeName + " attacked you back for " + enemyThreeCP + " damage." + "</div>")
                
                if (enemyThreeHP <= 0 && chosenHP > 0) {

                    //remove enemy's image and clear stats text
                    $(".defenderImage").remove();
                    $("#stats").html("");
                    
                    // once last defender is dead, game over
                    $("#defender").append("You Win! Game Over!");
                    $("#defender").append("<div id='resetButton'>Reset Game</div>");

                    $("#resetButton").on("click", function() {
                    window.location.href = window.location.href;
                    });
                    
                 

    
                } else if (chosenHP <= 0) {

                    alert("GAME OVER!");
                    location.reload();
    
                }
            } else if (enemyThreeHP <= 0 && defenderOneDead && defenderTwoDead) {

                // once defender is gone, attack button will only display text to pick new defender
                $(".attack-button").on("click", function() {

                    $("#defender").html("You Win! Game Over!");
                    $("#defender").append("<div id='resetButton'>Reset Game</div>");

                    $("#resetButton").on("click", function() {
                    window.location.href = window.location.href;
                    });
                });

            } 
        });

    
    
}



    
//end 
});
