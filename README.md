### The present project has been created in the context of the course "3,793 | 4,799: Skills: Programming - Introduction Level" by 2 HSG students

## The project is composed of the following files:
* 1 HTML file (index.html) which contains the website structure & content
* 1 CSS file (style.css) which defines the appearance of the HTML items
* 1 JavaScript (apps.js) which contains the code supporting the dynamic functionality 
* 2 third-party code files (particles.js & particlesjs-config.json) which support the interactive particules landing page background (from https://vincentgarreau.com/particles.js/)

## Necessary libraries
* https://materializecss.com/
* https://vincentgarreau.com/particles.js/
* http://www.gizma.com/easing/
* https://scrollmagic.io/ (with plugin https://scrollmagic.io/docs/debug.addIndicators.html

## My Dynamic CV Website
* The purpose of this project is to offer an alternative to our traditional static resume (curriculum vitae).
* Using HTML, CSS & JavaScript, we built a template to present our profile more dynamically with the following sections:
1) A landing page with interactive animated particles
2) An about section
3) A slider featuring education credentials
4) A skills & certifications section
5) An animated experience tree 

**Since this project is constructed as a template, it can filled with one's actual information and redesigned according to one's tastes before being hosted online as a alternative/ complementary resume.**

### How to have your CV website go live?
1) You need to register a domain name & subscribe to a hosting platform (e.g. https://www.infomaniak.com/en)
2) Here is a complete guide to go from this project folder to an actual website: https://css-tricks.com/helping-a-beginner-understand-getting-a-website-live/

## How to use this CV template?

#### General Information
* It is recommended to open this project with the Google Chrome browser as some parts of the JavaScript code might not work in Safari
* The recommended minimum screen size is 13-inches with a recommended resolution of 1400 × 1050px
* The level of responsiveness of this website varies depending on the section. As a whole, this website is not adapted to mobile
* It is not possible to add a section
* When scrolling, the website transitions from one section to the other (with a smoothing effect). It is not possible to stay "in-between" 2 sections
* When scrolling to the "About" section, the webstie automatically goes back to the landing page as these 2 sections go hand in hand


### Landing Page
#### What you can change
* The picture (please ensure that your image has dimensions of 826 x 1112px)
* The signature
* The name
* The catch phrase
* The link to your linkedin profile (sticky item)


### About Section
#### What you can change
* The picture (please ensure that your image has dimensions of 1091 x 475)
* The text in bold (max. 220 characters with spaces)
* The paragraph (max. 280 characters with spaces)


 ### Education Section
#### What you can change
* The background video/ image (default sizing)
* The text (following the HTML structure)
* The logo 
* The Destination link (of the whole item) of each education item
#### How to add an education item?
* Dupplicate (copy/paste) an existing education item in HTML, the section will automatically adapt
* The same way, you can also delete an item

 ### Skills Section
#### What you can change
* Icons (the size will be automatically adjusted)
* Skill title (max. 2 lines of text as in template)
* Skill description (max. 5 lines of text as in template)
* The list of languages (also possible to add or remove languages and the section will adapt)


 ### Experience Section
#### What you can change (please follow the HTML structure)
* The dates
* The Company - Location
* The position
* The list of achievements
#### How to add an experience?
1) Duplicate (copy/ paste) 1 experience box in the HTML file (line 214)
2) Set it classes to class="box bX" data-anim="X" (X being the next box number)
3) Add additional nodes (rounds) in HTML (line 208)
4) In CSS, add the corresponding rule for .bX
5) In CSS adjust the length of the "line" and calculate the distance between each nod 
6) Based on the CSS rules explained on line 446, calculate on which pixel to place each node









