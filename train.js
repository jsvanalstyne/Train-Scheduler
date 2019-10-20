var config = {
        apiKey: "AIzaSyCuItxf431RZHjW4NzWlC4j38MRJjApQFU",
        authDomain: "fir-practice-613b6.firebaseapp.com",
        databaseURL: "https://fir-practice-613b6.firebaseio.com",
        projectId: "fir-practice-613b6",
        storageBucket: "fir-practice-613b6.appspot.com",
        messagingSenderId: "736179752150",
        appId: "1:736179752150:web:212a3f43abea419eb2cd77"
      };
// Intialize App
firebase.initializeApp(config);
// Save intialized app to a variable for ease of reading and use
var database = firebase.database();

var trainInput = $("#train-name-input");
console.log(trainInput);
var destinationInput = $("#destination-input");
console.log(destinationInput);
var trainTimeInput = $("#trainTime-input");
console.log(trainTimeInput);
var frequencyInput = $("#frequency-input");
console.log(frequencyInput);
console.log("working");

$("#addTrain").on("click", function (event) {
    console.log("add input");
    event.preventDefault();
    var trainName = $("#train-name-input").val().trim();
    var destinationName = $("#destination-input").val().trim();
    var trainTime = $("#trainTime-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
    console.log(trainName);
    console.log(destinationName);
    console.log(trainFrequency);
    console.log(trainTime);
    
    database.ref().push({
        trainName: trainName,
        destinationName: destinationName,
        trainTime:trainTime,
        trainFrequency: trainFrequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });


});
database.ref().on("child_added", function(snapshot){
    console.log("childadded")
var sv = snapshot.val();
addRow(sv);
});
function addRow(trainData){
var row = $("<tr>");
var train = $("<td>");
var destination = $("<td>");
var time = $("<td>");
var frequency = $("<td>");
train.text(trainData.trainName);
destination.text(trainData.destinationName);
time.text(trainData.trainTime);
frequency.text(trainData.trainFrequency)
row.append(train, destination, frequency, time);
$(".table").append(row);
}
