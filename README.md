# Note Taker

## Description
The note taker application allows a user to type up, save, view and delete notes on a web interface, all while interacting with a "database" (.json file) behind the scenes via GET, POST and DELETE requests to an Express server.

The note taker is deployed to Heroku here: https://guarded-refuge-12093.herokuapp.com/

## Usage
The note taker is almost totally self-explanatory. Click on the pencil icon to type up a new note, click on the floppy disk icon to save it, click on the tab of a saved note in the sidebar to view it, and click on the trash can icon beside the title of a saved note to delete it.

## Credits
The front-end (index.js and .html files) was completely written by the Coding Boot Camp at UT with the exception of the code to assign note IDs. The back-end uses [Node.js](https://nodejs.org/en/) and [Express](http://expressjs.com/) to create and run the server, handling requests and sending responses, and to read from and write to the "database".

The favicon image and the icons used on the provided HTML pages were taken from the collection of icons at [Font Awesome](https://fontawesome.com/).

## License
Copyright (c) Angela Li. All rights reserved.
Licensed under the [MIT License](LICENSE).
