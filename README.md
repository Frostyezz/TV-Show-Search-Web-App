# TV-Show-Search-Web-App
Web app that displays information about requested TV shows.
Includes libraries such as: Axios, Bootstrap, EJS, Nodemon and Express framework.
Upon searching, a GET request is sent to TV Maze API asking for TV shows matching the string query. The API responds with a JSON file, which is parsed automatically in a JavaScript object by Axios. The information found in that object is then dispersed throughout a dynamic HTML file using EJS. 
