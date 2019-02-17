$(document).ready(function() {


    //variables for who's chosen
    var characterChosen = false;
    var enemyChosen = false;
    var enemyTwoChosen = false;
    var enemyThreeChosen = false;
    
    //variables to give class tags too
    var chosenImage;
    var enemyImage;
    var enemytwoImage;
    var enemythreeImage;
    

    //click function that moves the chosen character into Your Character slot
    //and the rest into the Enemies Available slot
    $(".character").on("click", function() {
    
        if (!characterChosen) {
            
            chosenImage = $(this).attr("id");
    
            $(this).addClass("chosenImage");
    
            $("#your-character").html(this);
    
            $("#starting-characters").appendTo("#enemies-avail");
    
            characterChosen = true;   
            console.log(chosenImage);
    
        } else if (characterChosen && !enemyChosen) {
    
            enemyImage = $(this).attr("id");
    
            $(this).addClass("enemyImage");
    
            enemyChosen = true;
    
            $("#defender").html(this);
            console.log(enemyImage)
            
               //give variables for each chosen character and defender's stats
                    var chosenName = $(".chosenImage").attr("name")
                    var chosenHP = $(".chosenImage").attr("hp")
                    var chosenAP = $(".chosenImage").attr("ap")
                    var chosenCP = $(".chosenImage").attr("cp")
                    
                    var enemyName = $(".enemyImage").attr("name")
                    var enemyHP = $(".enemyImage").attr("hp")
                    var enemyAP = $(".enemyImage").attr("ap")
                    var enemyCP = $(".enemyImage").attr("cp")
    
                    console.log(chosenName + " " + chosenHP + " " + chosenAP + " " + chosenCP)
                    console.log(enemyName + " " + enemyHP + " " + enemyAP + " " + enemyCP)
    
    
                    $("#attack-button").on("click", function() {
    
                        //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
                        if (enemyHP > 0 && chosenHP > 0) {
                            chosenHP -= enemyCP;
                            chosenAP = parseInt(chosenAP) + 8;
                            enemyHP -= chosenAP;
    
                            console.log(chosenHP + " " + chosenAP + " " + enemyHP);
    
                            $(".chosenImage span").html(chosenHP);
                            $(".enemyImage span").html(enemyHP);
    
                            $("#stats").html("<div>" + "You attacked " + enemyName + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyName + " attacked you back for " + enemyCP + " damage." + "</div>")
                            
                            defeatedEnemy();
                        } else if (chosenHP <= 0) {
                            alert("GAME OVER!");
                            reset();
                            location.reload();
                        }
    
                        
                    })
    
                    function defeatedEnemy() {
                        if (enemyHP <= 0) {
                            $(".enemyImage").remove();
                            $("#stats").html("");
                            
                            $("#attack-button").on("click", function() {
    
                                $("#defender").html("Pick a new defender.");
                            });
    
    
                        }
                    }
    
        } else if (characterChosen && enemyChosen && !enemyTwoChosen) {
    
            enemytwoImage = $(this).attr("id");
    
            $(this).addClass("enemytwoImage");
    
            enemyTwoChosen = true;
    
            $("#defender").html(this);
            console.log(enemytwoImage)
    
                       //give variables for each chosen character and defender's stats
                       var chosenName = $(".chosenImage").attr("name")
                       var chosenHP = $(".chosenImage").attr("hp")
                       var chosenAP = $(".chosenImage").attr("ap")
                       var chosenCP = $(".chosenImage").attr("cp")
                       
                       var enemyName2 = $(".enemytwoImage").attr("name")
                       var enemyHP2 = $(".enemytwoImage").attr("hp")
                       var enemyAP2 = $(".enemytwoImage").attr("ap")
                       var enemyCP2 = $(".enemytwoImage").attr("cp")
       
                       console.log(chosenName + " " + chosenHP + " " + chosenAP + " " + chosenCP)
                       console.log(enemyName2 + " " + enemyHP2 + " " + enemyAP2 + " " + enemyCP2)
       
       
                       $("#attack-button").on("click", function() {
       
                           //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
                           if (enemyHP > 0 && chosenHP > 0) {
                               chosenHP -= enemyCP2;
                               chosenAP = parseInt(chosenAP) + 8;
                               enemyHP2 -= chosenAP;
       
                               console.log(chosenHP + " " + chosenAP + " " + enemyHP2);
       
                               $(".chosenImage span").html(chosenHP);
                               $(".enemytwoImage span").html(enemyHP2);
       
                               $("#stats").html("<div>" + "You attacked " + enemyName2 + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyName2 + " attacked you back for " + enemyCP2 + " damage." + "</div>")
                               
                               defeatedEnemy();
                           } else if (chosenHP <= 0) {
                               alert("GAME OVER!");
                               reset();
                               location.reload();
                           }
       
                           
                       })
       
                       function defeatedEnemy() {
                           if (enemyHP2 <= 0) {
                               $(".enemytwoImage").remove();
                               $("#stats").html("");
                               
                               $("#attack-button").on("click", function() {
       
                                   $("#defender").html("Pick a new defender.");
                               });
       
            
                           }
                       }
        } else if (characterChosen && enemyChosen && enemyTwoChosen && !enemyThreeChosen) {
    
            enemythreeImage = $(this).attr("id");
    
            $(this).addClass("enemythreeImage");
    
            enemythreeImage = true;
    
            $("#defender").html(this);
            console.log(enemythreeImage)
    
                       //give variables for each chosen character and defender's stats
                       var chosenName = $(".chosenImage").attr("name")
                       var chosenHP = $(".chosenImage").attr("hp")
                       var chosenAP = $(".chosenImage").attr("ap")
                       var chosenCP = $(".chosenImage").attr("cp")
                       
                       var enemyName3 = $(".enemythreeImage").attr("name")
                       var enemyHP3 = $(".enemythreeImage").attr("hp")
                       var enemyAP3 = $(".enemythreeImage").attr("ap")
                       var enemyCP3 = $(".enemythreeImage").attr("cp")
       
                       console.log(chosenName + " " + chosenHP + " " + chosenAP + " " + chosenCP)
                       console.log(enemyName3 + " " + enemyHP3 + " " + enemyAP3 + " " + enemyCP3)
       
       
                       $("#attack-button").on("click", function() {
       
                           //Both player and enemy is chosen, attack only occurs when defender's HP is greater than or equal to 0
                           if (enemyHP > 0 && chosenHP > 0) {
                               chosenHP -= enemyCP3;
                               chosenAP = parseInt(chosenAP) + 8;
                               enemyHP3 -= chosenAP;
       
                               console.log(chosenHP + " " + chosenAP + " " + enemyHP3);
       
                               $(".chosenImage span").html(chosenHP);
                               $(".enemytwoImage span").html(enemyHP3);
       
                               $("#stats").html("<div>" + "You attacked " + enemyName3 + " for " + chosenAP + " damage." + "</div>" + "<div>" + enemyName3 + " attacked you back for " + enemyCP3 + " damage." + "</div>")
                               
                               defeatedEnemy();
                           } else if (chosenHP <= 0) {
                               alert("GAME OVER!");
                               reset();
                               location.reload();
                           }
       
                           
                       })
       
                       function defeatedEnemy() {
                           if (enemyHP3 <= 0) {
                            alert("GAME OVER!");
                            reset();
                            location.reload();
    
                              
       
            
                           }
                       }
        }
    
        
    });
    
    
    
    //end of jquery
    });
    