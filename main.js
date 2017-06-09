
$(document).scroll(function() {
    if($(window).scrollTop() > 1420 )
     {
         $("#superbar").removeClass("posFix");
         $("#captionbar1").removeClass("posNon");
         $("#captionbar2").removeClass("posFix");
         $("#captionbar3").removeClass("posFix");
         $("#captionbar4").removeClass("posFix");
         $("#captionbar5").removeClass("posFix");
         $("#captionbar6").removeClass("posFix");
         $("#captionbar7").removeClass("posFix");

         $("#superbar").addClass("posNon");
         $("#captionbar1").addClass("posFix");
     }
     else if($(window).scrollTop() > 2840){
        $("#superbar").removeClass("posFix");
        $("#captionbar1").removeClass("posFix");
        $("#captionbar2").removeClass("posNon");
        $("#captionbar3").removeClass("posFix");
        $("#captionbar4").removeClass("posFix");
        $("#captionbar5").removeClass("posFix");
        $("#captionbar6").removeClass("posFix");
        $("#captionbar7").removeClass("posFix");

        $("#superbar").addClass("posNon");
        $("#captionbar2").addClass("posFix");
     }
     else if($(window).scrollTop() > 4260){
        $("#superbar").removeClass("posFix");
        $("#captionbar1").removeClass("posFix");
        $("#captionbar2").removeClass("posFix");
        $("#captionbar3").removeClass("posNon");
        $("#captionbar4").removeClass("posFix");
        $("#captionbar5").removeClass("posFix");
        $("#captionbar6").removeClass("posFix");
        $("#captionbar7").removeClass("posFix");

        $("#superbar").addClass("posNon");
        $("#captionbar3").addClass("posFix");
     }
     else if($(window).scrollTop() > 5680){
        $("#superbar").removeClass("posFix");
        $("#captionbar1").removeClass("posFix");
        $("#captionbar2").removeClass("posFix");
        $("#captionbar3").removeClass("posFix");
        $("#captionbar4").removeClass("posNon");
        $("#captionbar5").removeClass("posFix");
        $("#captionbar6").removeClass("posFix");
        $("#captionbar7").removeClass("posFix");

        $("#superbar").addClass("posNon");
        $("#captionbar4").addClass("posFix");
     }
     else if($(window).scrollTop() > 7100){
        $("#superbar").removeClass("posFix");
        $("#captionbar1").removeClass("posFix");
        $("#captionbar2").removeClass("posFix");
        $("#captionbar3").removeClass("posFix");
        $("#captionbar4").removeClass("posFix");
        $("#captionbar5").removeClass("posNon");
        $("#captionbar6").removeClass("posFix");
        $("#captionbar7").removeClass("posFix");

        $("#superbar").addClass("posNon");
        $("#captionbar5").addClass("posFix");
     }
     else if($(window).scrollTop() > 8520){
        $("#superbar").removeClass("posFix");
        $("#captionbar1").removeClass("posFix");
        $("#captionbar2").removeClass("posFix");
        $("#captionbar3").removeClass("posFix");
        $("#captionbar4").removeClass("posFix");
        $("#captionbar5").removeClass("posFix");
        $("#captionbar6").removeClass("posNon");
        $("#captionbar7").removeClass("posFix");

        $("#superbar").addClass("posNon");
        $("#captionbar6").addClass("posFix");
     }
     else if($(window).scrollTop() > 9940){
        $("#superbar").removeClass("posFix");
        $("#captionbar1").removeClass("posFix");
        $("#captionbar2").removeClass("posFix");
        $("#captionbar3").removeClass("posFix");
        $("#captionbar4").removeClass("posFix");
        $("#captionbar5").removeClass("posFix");
        $("#captionbar6").removeClass("posFix");
        $("#captionbar7").removeClass("posNon");

        $("#superbar").addClass("posNon");
        $("#captionbar7").addClass("posFix");
     }
     else
     {
        $("#superbar").removeClass("posNon");
        $("#captionbar1").removeClass("posFix");
        $("#captionbar2").removeClass("posFix");
        $("#captionbar3").removeClass("posFix");
        $("#captionbar4").removeClass("posFix");
        $("#captionbar5").removeClass("posFix");
        $("#captionbar6").removeClass("posFix");
        $("#captionbar7").removeClass("posFix");

        $("#superbar").addClass("posFix");
        $("#captionbar").addClass("posNon");
     }
});

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
