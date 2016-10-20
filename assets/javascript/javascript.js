function restart() {
    window.location.reload();
}


$(document).ready(function() {
    var index;
    var index2;
    var hp;
    var clicks = 0;
    var decrease = 100;
    var array = ["obi", "vadar", "luke", "maul"];


    $("#chooseChar img").click(function() {
        var index = $("#chooseChar img").index(this);
        var hp = parseInt($(this).attr("value"));
        console.log(hp);
        console.log(index);
        if (index === 0) {
            $("#chooseChar").hide();
            $("#yours").append('<img id="img1" src="assets/images/Ben_kenobi.png">');
            $("#enemies").append('<img id="img2" src="assets/images/Darth-Vader.jpg">');
            $("#enemies").append('<img id="img3" src="assets/images/luke.jpg">');
            $("#enemies").append('<img id="img4" src="assets/images/maul.jpg">');

        } else if (index === 1) {
            $("#chooseChar").hide();
            $("#yours").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');
            $("#enemies").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            $("#enemies").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
            $("#enemies").append('<img id="img4" value="300" src="assets/images/maul.jpg">');
        } else if (index === 2) {
            $("#chooseChar").hide();
            $("#yours").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
            $("#enemies").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            $("#enemies").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');
            $("#enemies").append('<img id="img4" value="300" src="assets/images/maul.jpg">');
        } else if (index === 3) {
            $("#chooseChar").hide();
            $("#yours").append('<img id="img4" value="300" src="assets/images/maul.jpg">');
            $("#enemies").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            $("#enemies").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');
            $("#enemies").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
        }

        $("#enemies img").click(function(){
            var index2 = $("#enemies img").index(this);
            function secName (index2){
                var index2 = $("#enemies img").index(this);
            }
            var hp2 = parseInt($(this).attr("value"));
            console.log(index + index2);
            if (index === 0 && index2 === 0){
            $("#enemies #img2").hide();
            $("#battle").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');

            } else if (index === 0 && index2 === 1){
                $("#enemies #img3").hide();
                $("#battle").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
            } else if (index === 0 && index2 === 2){
                $("#enemies #img4").hide();
                $("#battle").append('<img id="img4" value="300" src="assets/images/maul.jpg">');
            } else if (index === 1 && index2 === 0){
                $("#enemies img1").hide();
                $("#battle").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            } else if (index === 1 && index2 === 1){
                $("#enemies #img3").hide();
                $("#battle").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
            } else if (index === 1 && index2 === 2){
                $("#enemies #img4").hide();
                $("#battle").append('<img id="img4" value="300" src="assets/images/maul.jpg">');
            } else if (index === 2 && index2 === 0){
                $("#enemies #img1").hide();
                $("#battle").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            } else if(index === 2 && index2 === 1){
                $("#enemies #img2").hide();
                $("#battle").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');
            } else if (index === 2 && index2 ===2){
                $("#enemies #img4").hide();
                $("#battle").append('<img id="img4" value="300" src="assets/images/maul.jpg">');
            } else if (index === 3 && index2 === 0){
                $("#enemies #img1").hide();
                $("#battle").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            } else if(index === 3 && index2 === 1){
                $("#enemies #img2").hide();
                $("#battle").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');
            } else if (index === 3 && index2 ===2){
                $("#enemies #img3").hide();
                $("#battle").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
            }
        })

        $("#attack").click(function(){

            clicks++
            if (hp > 0){
            hp -= decrease


            alert(hp + " is fighting He just took " + decrease + " damage! He has " + hp + " of health left.");
            console.log(hp)
            console.log(clicks)
            } else if (hp < 1){
                alert("you lose")
            }

            if (clicks > 4){
                alert("you win");
            }

        })




    });



});