var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let savedNotes;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("/api/notes", function(req, res) {
  fs.readFile(path.join(__dirname, "db", "db.json"),
      "utf8",
      (error, data) => {
          if (error) {
              console.log(error);
          }
          savedNotes = JSON.parse(data);
          res.json(savedNotes);
    });
});

app.post("/api/notes", function(req, res) {
  let newNote = req.body;
  let newID = newNote.id;
  const savedNotesIDs = savedNotes.map(note => note.id);
  
  let savedCopyCounter = 0;
  while (savedNotesIDs.includes(newID)) {
    // signifies there have been deleted copies of the same note ID
    // throwing off copy count, therefore use vacated IDs
    savedCopyCounter++;
    newID = newID.split("-")[0] + "-" + (savedCopyCounter + 1);
  }
  newNote.id = newID;

  savedNotes.push(newNote);
  fs.writeFile(path.join(__dirname, "db", "db.json"),
    JSON.stringify(savedNotes, null, 1),
    (error) => {
      if (error) {
        console.log(error);
      }
    });
  res.end();
});

app.delete("/api/notes/:id", function(req, res) {
  var deleteID = req.params.id;
  savedNotes = savedNotes.filter(note => note.id !== deleteID);
  fs.writeFile(path.join(__dirname, "db", "db.json"),
    JSON.stringify(savedNotes, null, 1),
    (error) => {
      if (error) {
        console.log(error);
      }
    });
  res.end();
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  