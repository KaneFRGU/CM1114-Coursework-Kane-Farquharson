// login button logs you in if clicked once, then logs you out if clicked again

var counter = 2;
function login(){
    if(counter % 2 == 0){
        alert('You have been logged in!');
    }
    else {
        alert('You have been logged out!');
    }
    counter += 1;
}

//when mouse is not hovering over an image, invisible border is made to make the image appear smaller
function delight(x) {
    x.style.border = "thick solid #FFFFFF00"
}
//when mouse hovers over an image, the invisible border decreases to 0px making image appear larger
function highlight(x) {
    x.style.border = "0px solid"
}

//checks if input boxes dont have text in them, will display a message if not.
function submit_event() {
    var title = document.forms["event"]["event_title"].value;
    var date = document.forms["event"]["event_date"].value;
    if (title == "") {
    alert("An event must have a title!");
    }
    else {
    if (date.length == 0) {
    alert("An event must have a date!");
    }
    else {
    alert("Event submitted! The society will contact you soon!");
    }
    }
}

function submit_spotlight() {
    var link = document.forms["event"]["spotlight_link"].value;
    if (link == "") {
    alert("Please input a link!");
    }
    else {
    alert("Reccomendation submitted! Check back here soon to see updates!");
    }
}