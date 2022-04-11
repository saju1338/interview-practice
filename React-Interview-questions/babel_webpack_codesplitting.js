// What is babel

Babel is simply a translator, who translate your fancy es6 code into es5, ones that browser understand. 

for example:

import moment from 'moment';

export default ()=>moment().format("YYYY DO MM")

now babel convert the above es6 code into es5:

const moment = require('moment');

function getDateString(){
    const date= moment();
    return date.format("YYYY DO MM")
}

exports.default = getDateString;

// What is webpack

Webpack goes through your package and creates a dependency graph, which consist of various modules, your webapp requires. Depending on this dependency graph, it creates a new package with very minimum number of files required, often just a single bundle.js file.  