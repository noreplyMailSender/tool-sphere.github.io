//create a web server in flask with some usefull routes 
//Create a Discord bot in JavaScript with commands and events organized into separate files and folders, and provide a clear folder-file structure.
var suggestions = [
  "Create a web server in flask with some usefull routes",
  "Create a Discord bot in JavaScript with commands and events organized into separate files and folders, and provide a clear folder-file structure."
  ];
var textInp = document.querySelector("#prmpt");
textInp.addEventListeners("focus", () => {
var randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];

textInp.placeholder = randomSuggestion + " \n\n𝙋𝙧𝙚𝙨𝙨 🆃🅰🅱 𝙠𝙚𝙮 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙨𝙪𝙜𝙜𝙚𝙨𝙩𝙞𝙤𝙣  ";
});
