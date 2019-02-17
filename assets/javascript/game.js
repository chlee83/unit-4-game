$(document).ready(function() {


//variables for who's chosen
var characterChosen = false;
var enemyChosen = false;
var enemyTwoChosen = false;
var enemyThreeChosen = false;

//variables to give class tags too
var chosenImage;
var enemyImage;
var enemyTwoImage;
var enemyThreeImage;

var enemyOne = false;
var enemyTwo = false;
var enemyThree = false;

//click function that that starts the game
$(".character").on("click", function() {

    //choose first character to be moved into Your Character slot and others in enemies slot
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

var defenderOneDead = false;
var defenderTwoDead = false;

function firstDefender() {

    //give variables for each chosen character and defender's stats
    chosenName = $(".chosenImage").attr("name")
    chosenHP = $(".chosenImage").attr("hp")
    chosenAP = $(".chosenImage").attr("ap")
    chosenCP = $(".chosenImage").attr("cp")
    
    enemyName = $(".defenderImage").attr("name")
    enemyHP = $(".defenderImage").attr("hp")
    enemyAP = $(".defenderImage").attr("ap")
    enemyCP = $(".defenderImage").attr("cp")

    console.log(chosenName + " " + chosenHP + " " + chosenAP + " " + chosenCP)
    console.log(enemyName + " " + enemyHP + " " + enemyAP + " " + enemyCP)

        //once characters are set, attack button can be clicked to start battle
        $("#attack-button").on("click", function() {

            //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
            if (enemyHP > 0 && chosenHP > 0) {

                //make HP of character and enemy decreace according to the attack power and counter power
                chosenHP -= enemyCP;
                chosenAP = parseInt(chosenAP) + 8;
                enemyHP -= chosenAP;

                console.log(chosenHP + " " + chosenAP + " " + enemyHP);

                //selecting the span in the div with class of chosenImage and enemyImage to input their current health
                $(".chosenImage span").html(chosenHP);
                $(".defenderImage span").html(enemyHP);

                //input current attack and health info under defender image
                $("#stats").html("<div>" + "You attacked " + enemyName + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyName + " attacked you back for " + enemyCP + " damage." + "</div>")
                
                if (enemyHP <= 0) {

                    //remove enemy's image and clear stats text
                    $(".defenderImage").remove();
                    $("#stats").html("");
    
                } 
                
            // if chosen player's health goes down to zero or below, game is over and game reloads
            } else if (chosenHP <= 0) {

                alert("GAME OVER!");
                location.reload();

            } else if (enemyHP <= 0 && !defenderOneDead && !defenderTwoDead && !enemyTwoChosen) {

                // once defender is gone, attack button will only display text to pick new defender
                $("#attack-button").on("click", function() {

                    $("#defender").html("Pick a second defender.");
                    defenderOneDead = true;
                });

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
        $("#attack-button").on("click", function() {

            //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
            if (enemyTwoHP > 0 && chosenHP > 0 && defenderOneDead && !defenderTwoDead) {

                //make HP of character and enemy decreace according to the attack power and counter power
                chosenHP -= enemyTwoCP;
                chosenAP = parseInt(chosenAP) + 8;
                enemyTwoHP -= chosenAP;

                console.log(chosenHP + " " + chosenAP + " " + enemyTwoHP);

                //selecting the span in the div with class of chosenImage and enemyImage to input their current health
                $(".chosenImage span").html(chosenHP);
                $(".defenderImage span").html(enemyTwoHP);

                //input current attack and health info under defender image
                $("#stats").html("<div>" + "You attacked " + enemyTwoName + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyTwoName + " attacked you back for " + enemyTwoCP + " damage." + "</div>")
                
                if (enemyTwoHP <= 0 && defenderOneDead && !defenderTwoDead) {

                    //remove enemy's image and clear stats text
                    $(".defenderImage").remove();
                    $("#stats").html("");
                    defenderTwoDead = true;
    
                } 
                
            // if chosen player's health goes down to zero or below, game is over and game reloads
            } else if (chosenHP <= 0) {

                alert("GAME OVER!");
                location.reload();

            } else if (enemyTwoHP <= 0 && defenderOneDead && defenderTwoDead) {

                // once defender is gone, attack button will only display text to pick new defender
                $("#attack-button").on("click", function() {
    
                    $("#defender").html("Pick the last defender.");
                    
                });

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
        $("#attack-button").on("click", function() {

            //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
            if (enemyThreeHP > 0 && chosenHP > 0) {

                //make HP of character and enemy decreace according to the attack power and counter power
                chosenHP -= enemyThreeCP;
                chosenAP = parseInt(chosenAP) + 8;
                enemyThreeHP -= chosenAP;

                console.log(chosenHP + " " + chosenAP + " " + enemyThreeHP);

                //selecting the span in the div with class of chosenImage and enemyImage to input their current health
                $(".chosenImage span").html(chosenHP);
                $(".defenderImage span").html(enemyThreeHP);

                //input current attack and health info under defender image
                $("#stats").html("<div>" + "You attacked " + enemyThreeName + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyThreeName + " attacked you back for " + enemyThreeCP + " damage." + "</div>")
                
                if (enemyThreeHP <= 0 && defenderOneDead && defenderTwoDead) {

                    //remove enemy's image and clear stats text
                    $(".defenderImage").remove();
                    $("#stats").html("");
                    
                    // once defender is gone, attack button will only display text to pick new defender
                    $("#attack-button").on("click", function() {
    
                        $("#defender").html("You Win! Game Over!");
                        $("#defender").append("<div id='resetButton'>Reset Game</div>");

                        $("#resetButton").on("click", function() {
                        window.location.href = window.location.href;
                    });
                    });
    
                } 
                
            // if chosen player's health goes down to zero or below, game is over and game reloads
            } else if (chosenHP <= 0) {

                alert("GAME OVER!");
                location.reload();

            } 

        })

    
    
}



    
//end 
});
