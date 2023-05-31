
function date() {
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString("en-UK", options);
}
setInterval(date, 1000)
function time() {
var dt = new Date();
document.getElementById("time").innerHTML = dt.toLocaleTimeString();
}
setInterval(time, 1000);