// what does the below line means

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
//<meta> viewport gives instruction to the browser on how to manage page dimension and scaling.

// width=device-width parts sets the width of the page according to the device width you are opening the page. 

// initial-scale=1.0 set the initial zoom level of the page when loaded for the first TimeRanges. 

How Bootstrap Works 

It follows grid system for page layout by using series of rows and columns.
Rows must be placed within the container for proper alignment and padding.
Every row consist of 12 columns. 
Suppose we have a row div and inside a row div, we have 3 div's. If we didn't define how much column space did a div acquire, then the 12 column space divide between the 3 div's equally.

let see an example

<div class="container">
    <div class="row">
        <div class="col">First Div</div>
        <div class="col">Second Div</div>
        <div class="col">Third Div Div</div>
    </div>
</div>

in the above example a simple row will display containing 3 div's and each column div's acquire 4 column space (because there are total 12 columns in a row)

for different screen size we have have different column syntax like below:
.col-xs-2	.col-sm-4	.col-md-5	.col-lg-3

.col-sm-4 means that this particular column acquire 4 coulumn space out of 12 for small and above screen sizes 


// Important notes

id and class are the css selectors

css specificity is the rank which decide which css selector should be used:

inline style > id > class > element


// What are Less and Sass

These are the preprocessors in css.
Writing CSS can become quite repetitive and little tasks such as having to look up hex color values, closing your tags, etc. can become time-consuming. And so that is where a preprocessor comes into play. A CSS preprocessor is basically a scripting language that extends CSS and then compiles it into regular CSS.

Sass font example#
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}
CSS output#
body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}



Less color example#
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header {
    color: @light-blue;
}
CSS output#
#header {
    color: #6c94be;
}
Mi
// Advantages of preprocessor
* Join multiple files. We can create different CSS file for each component and then import
    them all in the main CSS file.

* Nested syntax: Nesting in CSS makes it easy to target DOM element.

* CSS preprocessors helps you to avoid repetitions.

* Ability to add variables. It also makes your code more organised and clean 

// Difference between position fixed and sticky

Position: fixed generally means, fixed to the viewport i.e once we set it's position then it's postion is fixed and other element position won't  effect it's poition, either when you are scrolling, it's position won't change 

position: sticky srolls along with the element like any other element untill it reaches the offset point we set. 


//Different types of selectors in css

* Id selector
* Class selector
* Element selector
* universals(*) selector
* group selector (h1,h2,h3)

//What is flexbox:

Before the Flexbox Layout module, there were four layout modes:

Block, for sections in a webpage
Inline, for text
Table, for two-dimensional table data
Positioned, for explicit position of an element
The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.



//Properties of a flexbox:

* flex-direction:  The flex-direction property defines in which direction the container wants to stack the flex items.
// for example: 

// .flex-container {
//     display: flex;
//     flex-direction: column;
//   }

* flex-wrap: The flex-wrap property specifies whether the flex items should wrap or not.

// for example:
// .flex-container {
//     display: flex;
//     flex-wrap: wrap;
//   }
* flex-flow: The flex-flow property is a shorthand property for setting both the flex-direction and flex-wrap properties.

// for example:
// .flex-container {
//     display: flex;
//     flex-flow: row wrap;
//   }
* justify-content: The justify-content property is used to align the flex items:

// for example:
// .flex-container {
//     display: flex;
//     justify-content: center;
//   }
* align-items: The align-items property is used to align the flex items.

// for example:
// .flex-container {
//     display: flex;
//     height: 200px;
//     align-items: center;
//   }
* align-content: The align-content property is used to align the flex lines.

// for example:

// .flex-container {
//     display: flex;
//     height: 600px;
//     flex-wrap: wrap;
//     align-content: space-between;
//   }

  //How to center align a div inside another div

  for example:

  <div class="parent">
<div class="child">This div is centered vertically.</div> 
</div>

css properties:

.parent {
    background: #CCCCCC;
    height: 200px;
    width: 200px;
    position: relative;
    }
    .child {
    background: #FFFF00;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

    by using flexbox:

    css:

    html,
body { height: 100%;
}
.parent {
height: 200px;
background: #CCCCCC;
display: flex;
align-items: center;
justify-content: center;
}
.child {
background-color: #FFFF00;
width: 100px;
height: 100px;
}


//Difference between css grid and flex:

* CSS Grids helps you create the outer layout of the webpage. You can build complex as well responsive design with this. This is why it is called ‘layout first’.
* Flexbox mostly helps align content & move blocks.
* CSS grids are for 2D layouts. It works with both rows and columns.
* Flexbox works better in one dimension only (either rows OR columns).
* It will be more time saving and helpful if you use both at the same time.
