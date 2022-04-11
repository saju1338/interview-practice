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