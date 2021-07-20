# TV-Show-Search-Web-App
Web app that displays information about requested TV shows.
Uses libraries such as: Axios, Bootstrap, EJS, Nodemon and Express framework.
Upon searching, a GET request is sent to TV Maze API asking for TV shows matching the query string. The API responds with a JSON file, which is parsed automatically in a JavaScript object by Axios. The information found in that object is then dispersed throughout a dynamic HTML file using EJS. 

