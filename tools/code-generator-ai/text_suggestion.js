//create a web server in flask with some usefull routes 
//Create a Discord bot in JavaScript with commands and events organized into separate files and folders, and provide a clear folder-file structure.
var suggestions = [
  "Create a web server in flask with some usefull routes",
  "Create a Discord bot in JavaScript with commands and events organized into separate files and folders, and provide a clear folder-file structure."
  ];
var textInp = document.querySelector("#prmpt");
var randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
textInp.placeholder = randomSuggestion;
