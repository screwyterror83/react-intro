This is a intro for react.js module

To start the project, simply use "npx create-react-app app-name" in VSCode.
All the files in this repo are demo purposes, and can be deleted and modified.

This intro covers some basics of react library, use of JSX and demonstrate how front-end can be achieved using react.

1.  In react app, there will always be a <div id="root"></div> under <body></body> section of "index.html" file, this is where react populate its code.

Below are intro to JSX:

2.  Before writing actual code in "index.js" file, need to import both "react" and "react-dom", commands are:
    import React from "react";
    import ReactDOM from "react-dom";

3.  in "index.js"(JSX) file, we can use "ReactDOM.render" to populate code in index.html file, but we can only use .render once, therefore, if you have multiple line of code involves in multiple elements change, you will need to encapsulate all the code in <div></div>.

4.  JSX not only allow us to write html format, it will also allow us to write javascript and to be populated with ReactDOM.render

5.  To insert a "simple javascript expression"/variable in JXS file, simply to use "{}" wrap around the variable/"simple javascript expression", and ReactDOM.render will be able to render within the "{}", however, within the "{}", javascript statements are not allowed.
  5.1  Template literal: in between JS expression, using `${}` to inject another string. For example: 
          const fName = "Darren";
          const lName = "Z"
          
          output of {`${fName} ${lName}`} is "Darren Z"
