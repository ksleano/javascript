// This js file is for the test1.html
// Displays a message based on the time of day

var today = new Date();

var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
    greeting = "Good Evening";
}else if(hourNow > 12){
    greeting = "Good Afternoon";

}else if(hourNow > 0){
    greeting = "G'Mornin.";

}else{
    greeting = "Welcome";
}

// to write to the HTML use the document.write method
window.document.write('<h2>' + greeting + '</h2>')

