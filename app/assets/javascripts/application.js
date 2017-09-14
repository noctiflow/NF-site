// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require ./blur/modernizr.custom.34978.js
//= require ./blur/blur.js
//= require_tree .



// NAVBAR JQUERY========================

$(document).ready(function() {
  function checkScroll(){
      var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

      if($(window).scrollTop() > startY){
          $('.navbar').addClass("scrolled");
      }else{
          $('.navbar').removeClass("scrolled");
      }
  }

  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }

    $('.footer2').on('mouseenter',function(event){
      $('.footer').css('visibility','visible')
      $('.footer2').css('visibility','hidden')
    })
    $('.footer').on('mouseleave',function(event){
      $('.footer2').css('visibility','visible')
      $('.footer').css('visibility','hidden')
    })

})


// Typewriter JS =======================

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
        css.innerHTML = ".typewrite > .wrap { border-right: 0.20em solid palegoldenrod}";
        document.body.appendChild(css);
    };


// BURN IN TEXT JS==========================================================

  $(document).ready(function() {
      var first = 0;
      var second =0;
      var third = 0;
      var fourth =0;
      window.addEventListener("scroll",function(event){
          var mobile = 410;
          var tablet = 781;
          var desktop = 992;
          var width = $(window).width();
          var height = this.scrollY;

          function firstanim(){
              if(!first){
                  $('#first-left').addClass('animated fadeInLeft');
                  $('#first-right').addClass('animated fadeInRight');
                  first = 1;
              }
          }
          function secondanim(){
              if(!second){
                  $('#second-left').addClass('animated fadeInLeft');
                  $('#second-right').addClass('animated fadeInRight');
                  second = 1;
                  firstanim();
              }
          }
          function thirdanim(){
              if(!third){
                  $('#third-left').addClass('animated fadeInLeft');
                  $('#third-right').addClass('animated fadeInRight');
                  third = 1;
                  secondanim();
                  firstanim();
              }
          }
          function fourthanim(){
              if(!fourth){
                  $('#fourth-left').addClass('animated fadeInLeft');
                  $('#fourth-right').addClass('animated fadeInRight');
                  fourth = 1;
                  thirdanim();
                  secondanim();
                  firstanim();
              }
          }

          if(!fourth){
              if(width>desktop){
                  if (height > 280 && height < 635) {
                      firstanim();
                  }
                  else if (height >= 600 && height < 970) {
                      secondanim();
                  }
                  else if (height >= 933 && height < 1047){
                      thirdanim();
                  }
                  else if (height >= 1270) {
                      fourthanim();
                  }
              }
              else if(width<=desktop && width>tablet){
                  if(height>400){
                      firstanim();
                  }
                  if(height>1182) {
                      secondanim();
                  }
                  if(height>1932) {
                      thirdanim();
                  }
                  if(height>2600) {
                      fourthanim();
                  }
              }
              else{
                  firstanim();
                  secondanim();
                  thirdanim();
                  fourthanim();
              }
          }
      })
    var s,
    spanizeLetters = {
      settings: {
        letters: $('.js-spanize'),
      },
      init: function() {
        s = this.settings;
        this.bindEvents();
      },
      bindEvents: function(){
        s.letters.html(function (i, el) {
          //spanizeLetters.joinChars();
          var spanizer = $.trim(el).split("");
          return '<span>' + spanizer.join('</span><span>') + '</span>';
        });
      },
    };
    spanizeLetters.init();
  })(jQuery);



// ===============================================================================
