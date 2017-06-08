
$(document).scroll(function() {
    if($(window).scrollTop() > 1420)
     {
         $("#superbar").removeClass("posFix");
         $("#captionbar1").removeClass("posNon");
         $("#superbar").addClass("posNon");
         $("#captionbar1").addClass("posFix");
     }
     else if($(window).scrollTop() > 1420){
        $("#superbar").removeClass("posFix");
        $("#captionbar2").removeClass("posNon");
        $("#superbar").addClass("posNon");
        $("#captionbar2").addClass("posFix");
     }
     else if($(window).scrollTop() > 2840){
        $("#superbar").removeClass("posFix");
        $("#captionbar3").removeClass("posNon");
        $("#superbar").addClass("posNon");
        $("#captionbar3").addClass("posFix");
     }
     else if($(window).scrollTop() > 4260){
        $("#superbar").removeClass("posFix");
        $("#captionbar4").removeClass("posNon");
        $("#superbar").addClass("posNon");
        $("#captionbar4").addClass("posFix");
     }
     else if($(window).scrollTop() > 5680){
        $("#superbar").removeClass("posFix");
        $("#captionbar5").removeClass("posNon");
        $("#superbar").addClass("posNon");
        $("#captionbar5").addClass("posFix");
     }
     else if($(window).scrollTop() > 7100){
        $("#superbar").removeClass("posFix");
        $("#captionbar6").removeClass("posNon");
        $("#superbar").addClass("posNon");
        $("#captionbar6").addClass("posFix");
     }
     else if($(window).scrollTop() > 8520){
        $("#superbar").removeClass("posFix");
        $("#captionbar7").removeClass("posNon");
        $("#superbar").addClass("posNon");
        $("#captionbar7").addClass("posFix");
     }
     else
     {
          $("#superbar").removeClass("posNon");
          $("#captionbar").removeClass("posAbs");
          $("#superbar").addClass("posFix");
          $("#captionbar").addClass("posNon");
     }
});
