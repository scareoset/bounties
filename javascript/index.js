var points;
let bountyString = document.getElementById("points")

window.addEventListener("load", () => {
    points = 0;
});

function completeBounty() {
    points++;
    bountyString.innerHTML = pointsToString();
}

function pointsToString() {
    if(points === 1) {
        return "you have " + points + " point";
    } else {
        return "you have " + points + " points";
    }
}