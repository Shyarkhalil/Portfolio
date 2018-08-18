

var menu = document.getElementById('menu');
var navigation = document.getElementById('navigation');
var navUl = document.querySelector(".nav-ul");
var skills = document.getElementsByClassName('skills-icon');

var gmailSvg = document.querySelector(".gmail-svg");
var gmail = document.querySelector(".gmail");
var gmailPath = document.querySelector(".gmail-path");

var instagramSvg = document.querySelector(".instagram-svg");
var instagram = document.querySelector(".instagram");
var instagramPath = document.querySelector(".instagram-path");
var instagramPathOne = document.querySelector(".instagram-path-1");
var instagramPathTwo = document.querySelector(".instagram-path-2");


var twitterSvg = document.querySelector(".twitter-svg");
var twitter = document.querySelector(".twitter");
var twitterPath = document.querySelector(".twitter-path");

var githubSvg = document.querySelector(".github-svg");
var github = document.querySelector(".github");
var githubPath = document.querySelector(".github-path");


// Add class close to the menu element. This handler will check if menu has the class close or not
//If it has the class, the class will be removed and the navigation will hide. else the navigation will drop down.
menu.addEventListener("click", function() {
  if (menu.className === "close" && navigation.className === "drop") {
       menu.removeAttribute("class");
       navigation.removeAttribute("class");
  }else{
      menu.classList.add("close");
      navigation.classList.add("drop");
  }
});

// Add active class to each nav link, so the handler targets specific elements.
// If the element already has the class active will be removed and the targeted element will get the active class.
navUl.addEventListener("mouseover", function(e){
  var element = e.target;
  var ulChild = navUl.children;
  if (element.className === "about" || element.className === "projects" || element.className === "cntact") {
    for (var i = 0; i < ulChild.length; i++) {
      ulChild[i].classList.remove("active");
    }
    element.classList.add("active");
  }
});


//This variabl will be added in p element each 50 milliseconds by setInterval function.
var testTitle = "Hi, my name is Shyar and I am a Front End Web Developer with experience in JavaScript, HTML, CSS, SASS, Git and Github, a JavaScript library React and iQuery. I am a conscientious person who works hard, is flexible, quick to pick up new skills, eager to learn from others, loves and has a passion for technology. I'm looking forward to showing you some of my projects and I believe we can bring your ideas to life together. :)";

// Assign i to 0 index to start from the first litter in the string above and increment by one each time function is called.
var i = 0;





// The setTimeout() method calls typeWriter function after a specified 1000 milliseconds. The function is only executed once!
//The setInterval() method calls typeWriter function after a specified intervals (50 milliseconds).
// The setInterval() method will continue calling the function until clearInterval() is called.
// i = to 0 so index 0 in the pragragh wich is first litter H.
// The first litter(H) will be added to p element, then i++ will be incremented by 1.
//The index 1 is litter(i) will be added to p element and so on.
// Stop the function from runing, by comparing the i with testTitle length in if statment.
// The testTitle length is 352 and because the index number starts from 0 the number will be 351 if we don't decrement testTitle.length by 1
// we will end up with undefined.
var setTypeWriter = function(){
    setTimeout( function () {
    var typeWriter = setInterval(function(){
      document.querySelector('.about-me p').textContent += testTitle[i];
      i++;
      if (i > testTitle.length - 1) {
         clearInterval(typeWriter);
      }
    }, 50);
  }, 1000);
};

setTypeWriter();




//ScrollTop value is a measurement of the distance from the element's top to its topmost visible content.
//When the an element's scrollTop value is 0 the class sticky-nav will apply to navigation.


var wScrollTop = $(window).scrollTop();
window.onload = function(){
  if (wScrollTop == 0) {
     $(navUl).removeClass("sticky-nav");
  }else {
    $(navUl).addClass("sticky-nav");
  }
  $('.about').addClass("active");
};



//The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
// Use those properties to add and rempve classes in a specific postion pf window at scrolling.
var startScroll = 0;

 $(document).ready(function() {

   $(window).scroll(function () {

      var wScrollTop = $(this).scrollTop();
      var contactOffset = $('.contact-me').offset().top - 300;
      var sectionOne = $('.section-one').offset().top - 300;
      var sectionTwo = $('.section-two').offset().top - 300;
      var sectionThree = $('.section-three').offset().top - 300;
      var sectionFour = $('.section-four').offset().top - 300;
      var sectionFive = $('.section-five').offset().top - 300;
      var sectionSix = $('.section-six').offset().top - 300;
      var aboutMe = $('.title').offset().top - 300;

      // The class will be added when the div of contactOffset gets to the top of window
       if (wScrollTop > contactOffset) {
         $(".arrow-svg").addClass("arrow-anim");

       }else {
         $(".arrow-svg").removeClass("arrow-anim");
       }


       if (wScrollTop > aboutMe) {
         $('.title').addClass("show-title");
         $('.title-bar').addClass("show-title");
         $('.myImage').addClass("show-image");
         $('.my-brief').addClass("show-brief");
       }

       if (wScrollTop > startScroll){
         $(navUl).addClass("hide-nav");
         $(navUl).addClass("sticky-nav");
       } else {
         $(navUl).removeClass("hide-nav");
       }
       if (wScrollTop === 0) $(navUl).removeClass("sticky-nav");
       startScroll = wScrollTop;
       if (wScrollTop > aboutMe) {
         $(skills).addClass("fadeY");
       }
       if (wScrollTop > sectionOne) {
          $('.descrption-1').addClass("fadeInRight");
          $('.slide-1').addClass("fadeInLeft");
       }
       if (wScrollTop > sectionTwo) {
         $('.descrption-2').addClass("fadeInRight");
         $('.slide-2').addClass("fadeInLeft");
       }
       if (wScrollTop > sectionThree) {
          $('.descrption-3').addClass("fadeInRight");
          $('.slide-3').addClass("fadeInLeft");
       }
       if (wScrollTop > sectionFour) {
          $('.descrption-4').addClass("fadeInRight");
          $('.slide-4').addClass("fadeInLeft");
       }
       if (wScrollTop > sectionFive) {
          $('.descrption-5').addClass("fadeInRight");
          $('.slide-5').addClass("fadeInLeft");
       }
       if (wScrollTop > sectionSix) {
          $('.descrption-6').addClass("fadeInRight");
          $('.slide-6').addClass("fadeInLeft");
       }
    });



// When submit button is clicked  the message will be added to p element.
//Use DOM to create, append, create child, then make a button disabled on submit. Then make it abled when closin window.

var submitButtom = document.querySelector('.submit-button');

  submitButtom.addEventListener("click", function (e)  {
    e.preventDefault();
    var errorMessage = document.querySelector('.error-message');
    var userTextArea = document.getElementById('user_message');
    var userName = document.getElementById('name');
    var p = document.createElement("p");
          p.className = "error_title";
          p.textContent = "Oops! Your message will not be sent! If you want to connect me, please click on one of the icons below.";
          errorMessage.appendChild(p);
          userTextArea.value = "";
          userName.value = "";
          errorMessage.classList.add("error-shake");
          submitButtom.disabled = true;

          var close = document.querySelector('.close-overlay');

          close.addEventListener("click", function(e){
              p.style.display = "none";
              submitButtom.disabled = false;
          });
  });




// Select all anchor element and apply preventDefault() method to tell the user agent that if the event does not get explicitly handled, its
// default action should not be taken as it normally would be.
   $('a[href^="#"]').on("click", function(e) {
     e.preventDefault();
   });


// When ani navigation button is clicked the browser should scroll to the top of related page.
//The animate() method performs a custom animation, so it will animate html and body toward top of element
   $('.about').on("click", function(e) {
     e.preventDefault();
     $('html, body').animate({
        scrollTop: $('#about').offset().top -90
     }, 3000, 'swing');
   });

   $('.projects').on("click", function(e) {
     e.preventDefault();
     $('html, body').animate({
        scrollTop: $('#projects').offset().top
     }, 3000, 'swing');
   });

   $('.cntact').on("click", function(e) {
     e.preventDefault();
     $('html, body').animate({
        scrollTop: $('#contact').offset().top + 32
     }, 3000, 'swing');
   });

   $('.arrow').on("click", function(e) {
     e.preventDefault();
     $('html, body').animate({
        scrollTop: $('#top').offset().top
     }, 3000, 'swing');
   });

   $('.myproj-btn').on("click", function(e) {
     $('html, body').animate({
        scrollTop: $('#projects').offset().top
     }, 3000, 'swing');
   });




// This method will add class the contact overlay in term to fade in the contact page.
   $('.btn-contact').on("click", function(e) {
     e.preventDefault();
      $('.overlay-contact').addClass("fadeInContact");
   });
   $('.close-overlay').on("click", function(e) {
     e.preventDefault();
      $('.overlay-contact').removeClass("fadeInContact");
   });

 });



// typed.js - A JavaScript Typing Animation Library
//   Author: Matt Boldt <me@mattboldt.com>
//   Version: v2.0.6
//   Url: https://github.com/mattboldt/typed.js
//   License(s): MIT

var typed = new Typed("#typed", {
  stringsElement: '#typed-strings',
  typeSpeed: 60,
  backSpeed: 800,
  fadeOut: true,
  smartBackspace: true,
  loop: true
});



//Social Media icons, using object to add and remove classes
var actionClass =  {
   add: function (property, className){
     property.classList.add(className);
   },
   remove : function (property, className) {
    property.classList.remove(className);
   }
};



var RemoveClasses = function (property, className){
   actionClass.remove(property, className);
};

var addClasses = function (property, className){
   actionClass.add(property, className);
};




//Add class to instagram ad remove

instagram.addEventListener("mouseover", function (){
  addClasses(instagram, "instagram-fadeInX");
  addClasses(instagramSvg, "instagram-color");
  addClasses(instagramPath, "instagram-path-color");

  addClasses(instagramPathOne, "instagram-path-color");
  addClasses(instagramPathTwo, "instagram-path-color");
});



instagram.addEventListener("mouseout", function (){
  RemoveClasses(instagram, "instagram-fadeInX");
  RemoveClasses(instagramSvg, "instagram-color");
  RemoveClasses(instagramPath, "instagram-path-color");

  RemoveClasses(instagramPathOne, "instagram-path-color");
  RemoveClasses(instagramPathTwo, "instagram-path-color");
});


// Add classes to gmail and remove
gmail.addEventListener("mouseover", function (){
  addClasses(gmail, "gmail-fadeInX");
  addClasses(gmailSvg, "gmail-color");
  addClasses(gmailPath, "gmail-path-color");
});



gmail.addEventListener("mouseout", function (){
  RemoveClasses(gmail, "gmail-fadeInX");
  RemoveClasses(gmailSvg, "gmail-color");
  RemoveClasses(gmailPath, "gmail-path-color");
});



// Add classes to twitter and remove
twitter.addEventListener("mouseover", function (){
  addClasses(twitter, "twitter-fadeInX");
  addClasses(twitterSvg, "twitter-color");
  addClasses(twitterPath, "twitter-path-color");
});



twitter.addEventListener("mouseout", function (){
  RemoveClasses(twitter, "twitter-fadeInX");
  RemoveClasses(twitterSvg, "twitter-color");
  RemoveClasses(twitterPath, "twitter-path-color");
});



// Add classes to github and remove


github.addEventListener("mouseover", function (){

  addClasses(github, "github-fadeInX");
  addClasses(githubSvg, "github-color");
  addClasses(githubPath, "github-path-color");
});



github.addEventListener("mouseout", function (){
  RemoveClasses(github, "github-fadeInX");
  RemoveClasses(githubSvg, "github-color");
  RemoveClasses(githubPath, "github-path-color");
});
