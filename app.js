//carousel function from materialize lib 
$(document).ready(function(){
  $('.carousel').carousel({indicators: true});
});

//particles function from particles.js
particlesJS('particles-js',{
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#585858"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#585858",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 911.088911088911,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})

//Section Scrolling of the Website

//Each Section has an Index starting with the index 0 for the Landing and Ending with index 5 for Experience
//Setting an initial index
let index = 0;

//smoothScroll: instead of teleporting, by clicking the anchors (Navbox) it slides smoothly to the destination by having the Position Start Position and the Position of the Target.
function smoothScroll(target,duration,goToIndex,compensate=0){
  //assigns the target anchor point

  var target = document.querySelector(target);

  // "compensate" is needed to get to the right height so have the correct viewport
  var tragetPosition = target.getBoundingClientRect().top+compensate;
  //console.log(tragetPosition)

  //assigns the start position to the number of pixels the document is currently scrolled
  var startPosition = window.pageYOffset;

  //distance between target and start
  var distance = tragetPosition - startPosition;
  var startTime = null;
  target.style.setProperty('display', 'block');

  //animation function from start to target Position by using the distance traveled
  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

//from library: http://www.gizma.com/easing/
    //how the smoothing is calculated: acceleration until halfway, then deceleration
  function ease(t, b, c, d) {
    t /= d/ 2;
    if (t < 1) return c/2 * t * t + b;
    t--;
    return -c/2 * (t * (t-2) - 1) + b;
  }
  index = goToIndex;
  requestAnimationFrame(animation);
}


//assigning the anchor position for the about section
var nav_about_ed = document.querySelector('.nav_about_ed');
var nav_about_s = document.querySelector('.nav_about_s');
var nav_about_ex = document.querySelector('.nav_about_ex');

//Execute the function smoothScroll for with given target, duration and index
nav_about_ed.addEventListener('click',function(){
  //Compensate was not needed when having a destination bellow the startPosition. therefore default value 0
  smoothScroll(".education_a", 500, 2);
});
nav_about_s.addEventListener('click',function(){
  smoothScroll(".skill_a", 500, 3);
});
nav_about_ex.addEventListener('click',function(){
  //increased the duration to 1 second because the distance is bigger
  smoothScroll(".experience_a", 1000, 4);
});

//assigning the current anchor position for the Skills section
var nav_skill_a = document.querySelector('.nav_skill_a');
var nav_skill_ed = document.querySelector('.nav_skill_ed');
var nav_skill_ex = document.querySelector('.nav_skill_ex');

//Execute the function smoothScroll with given target, duration, index and compensate value
nav_skill_a.addEventListener('click',function(){
  smoothScroll('.landing_a', 1000, 0, 1888);
});
nav_skill_ed.addEventListener('click',function(){
  smoothScroll('.education_a', 500, 2, 2160);
});
nav_skill_ex.addEventListener('click',function(){
  smoothScroll('.experience_a', 500, 4, 1888);
});
const sections = document.querySelectorAll('section');



//function for smooth transition between sections by clilcking the buttons with the class .prev and .next. Further using the inputs of the mouse wheel and translate them into clicks on these two buttons.
//getting the inputs from the two invisible buttons
const prevClick = document.querySelector(".prev");
const nextClick = document.querySelector('.next');


const animationDuration = 1000;
let lastTime = 0;

//if the button with class .prev is clicked, it scrolls to the previous section (indicated by the index) and decreases the index value by 1 (if not 0)
prevClick.addEventListener('click', () => {
 
  if (index < 1) return;
  //in the last section scrolling is activated and therefore the index changes constantly --> index gets asssigned to 3
  if (index == 5) {index = 3;} else {
    index--;
  }
  sections.forEach((section, i) => {
    if (i === index){
      section.scrollIntoView({behavior: "smooth"});
    }
  })
});

//scrolls to the next (next index) and increases the index value by 1 (if not >3)
nextClick.addEventListener('click', () => {
  if (index > 3) return;
  index++;
  sections.forEach((section, i) => {
    if (i === index){
      section.scrollIntoView({behavior: "smooth"});
    }
  })
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//Assings movment on the wheel to prevClick or nextClick
window.addEventListener('wheel', (e) => {
  BTElement = document.querySelector(".box-timeline");
  scrollbarAtTop = BTElement.scrollTop == 0;
  BTVisible = isInViewport(BTElement);
//it needs to check additionally if the scrollbar is at the top of the section
  truthValue = (index == 4 && scrollbarAtTop);
  if(index < 4 || truthValue) {
  const delta = e.wheelDelta;
  const currentTime = new Date().getTime();

  if (currentTime - lastTime < animationDuration + 500) {
    e.preventDefault();
    return;
  }
  
  //Assigning the Wheelinputs to a click Event on the buttons
  if (delta < 0) {
    const nextClickInt = new Event('click');
    nextClick.dispatchEvent(nextClickInt);
  } else{
    if (BTVisible) index = 4;
    const prevClickInt = new Event('click');
    prevClick.dispatchEvent(prevClickInt);
  }
  lastTime = currentTime;
}
})




// Animation function of the Experience Tree

// Select all rounds
const allRounds = document.querySelectorAll('.round');

// Select all boxes
const allBoxes = document.querySelectorAll('.box');

// Create a container with all our animations called "scenes"  in the ScrollMagic library
const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {
    
    // For loop to iterate over all rounds
    for(i = 0; i < allRounds.length; i++){

        // If the round has the same attribute as the box (i.e. if their data-anim number match)
        if(allRounds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            // Define animation: Let the box appear (using an animation from greensock library)
            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            // Define new scene (how the animation appears) using ScrollMagic
            let scene = new ScrollMagic.Scene({
                
                // Define what is triggering the animation = the rounds
                triggerElement: allRounds[i],
                
                // Disable the animation when scrolling back up
                reverse: false
            })

            // .addIndicators() => implement this line to visualize the indicators (i.e. triggers points)
            .setTween(tween)
            .addTo(controller)

        }

    }

})







