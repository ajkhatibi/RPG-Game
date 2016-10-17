function restart() {
    window.location.reload();
}


$(document).ready(function() {
    var index;
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
            $("#enemies").append('<img id="img4" value="350" src="assets/images/maul.jpg">');
        } else if (index === 2) {
            $("#chooseChar").hide();
            $("#yours").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
            $("#enemies").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            $("#enemies").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');
            $("#enemies").append('<img id="img4" value="350" src="assets/images/maul.jpg">');
        } else if (index === 3) {
            $("#chooseChar").hide();
            $("#yours").append('<img id="img4" value="350" src="assets/images/maul.jpg">');
            $("#enemies").append('<img id="img1" value="500" src="assets/images/Ben_kenobi.png">');
            $("#enemies").append('<img id="img2" value="200" src="assets/images/Darth-Vader.jpg">');
            $("#enemies").append('<img id="img3" value="300" src="assets/images/luke.jpg">');
        }

        $("#attack").click(function(){

            clicks++
            if (hp > 0){
            hp -= decrease;
            alert(array[index] + " is fighting everyone! He just took " + decrease + " damage! He has " + hp + " of health left.");
            console.log(hp)
            console.log(clicks)
            } else if (hp < 1){
                alert("you lose")
            }

        })




    });



});