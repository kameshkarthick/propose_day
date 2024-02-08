var i = 0;
var txt1 =
"Hi Sush.....!  <<               Now I want to say something special to you. <<<                So, Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonate inside my mind...!                                                     > Everything about you is always interesting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                                             >I Love U <Pondatti😘.....! |                  <<<< Give me One Chance to Prove my Love ...!   by karthick";
 var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
