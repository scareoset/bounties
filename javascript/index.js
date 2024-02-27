var points = 0;
var dailyBountyCompleted = false;
let bountyString = document.getElementById("points");

window.addEventListener("load", () => {
    let total = parseInt(getCookie("points"))
    if(total === NaN) {
        points = total;
    } else {
        points = 0;
    }
    bountyString.innerHTML = pointsToString();
});

// most basic function for bounties
// adds points to player's account
function addPoints(pointsToAdd) {
    points += pointsToAdd;
}

// adds points from bounty to player's account
// updates points string
// marks today's bounty as completed
function completeBounty() {
    addPoints(1);
    bountyString.innerHTML = pointsToString();
    dailyBountyCompleted = true;
}

// generate string of text for displaying points
// only use singular 'point' if player has 1 point
function pointsToString() {
    if(points === 1) {
        return "you have " + points + " point";
    } else {
        return "you have " + points + " points";
    }
}

// save points locally
function saveGame() {
    var pointsCookieName = "points";

    // from https://www.w3schools.com/js/js_cookies.asp
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();

    document.cookie = pointsCookieName + "=" + points + ";" + expires + ";path=/; SameSite=Strict";
}

// from https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// from https://www.w3schools.com/js/js_cookies.asp
function checkCookie() {
    let user = getCookie("points");
    if (user !== "") {
        alert("save data found!");
    } else {
        alert("no save data!");
    }
} 

// skip forward one day
// for debugging purposes only
// only cheaters and developer would use this
// definitely remember to delete this function before launch
function skipDay() {
    dailyBountyCompleted = false;
}