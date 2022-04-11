// How Javascript load

//Normal Loading
first it start parsing the html document line by line and as soon as it finds the script line, it stops parsing the html document and start downloading the javascript file and after the downloading is complete it then executes the javascript file and then again continue to parsing html file. 
That is why we mostly write script tag at the end of the html document. 

HTML Parsing        <==========                ====>
JS Downloading                  <====>
JS Executing                            <===>



// Async Loading
first it start parsing the html document line by line and as soon as it finds the script line, the parsing won't stop but in the background it starts downloading the javascript file and as soon as the downloading is complete, it stops the html parsing and start executing the javascript file and after that it conitnues htmls parsing.

//<script async scr="script.js"> 

HTML Parsing        <==================        ====>
JS Downloading                  <====>
JS Executing                            <===>




//Defer Loading
first it start parsing the html document line by line and as soon as it finds the script line, parsing won't stop but it starts downloading javascript file in the background and after the html parsing done it starts executing javascript file in the end.


HTML Parsing        <===================>
JS Downloading                  <====>
JS Executing                                <===>