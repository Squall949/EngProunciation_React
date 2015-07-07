var duration;
var pAudio = document.getElementById("audio");
var pHead = document.getElementById("playhead");
var pButton = document.getElementById('pButton');
var timeline = document.getElementById('timeline');
// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - pHead.offsetWidth;
var canvas = document.getElementById("vocabulary");
var ctx = canvas.getContext("2d");

function timeUpdate() {
    var playPercent = timelineWidth * (pAudio.currentTime / duration);
    pHead.style.marginLeft = playPercent + "px";

    showVacabulary(pAudio.currentTime);

    if (pAudio.currentTime === duration) {
        pButton.className = "play";
        pAudio.pause();
        pAudio.currentTime = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function showVacabulary(currentTime) {
    ctx.font = "40px Arial";

    switch (true) {
        case (currentTime > 3 && currentTime < 5):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("bald", 30, 70);
            break;
        case (currentTime > 5 && currentTime < 7):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("bold", 30, 70);
            break;
        case (currentTime > 7 && currentTime < 9):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("hot", 30, 70);
            break;
        case (currentTime > 9 && currentTime < 11):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("hat", 30, 70);
            break;
        case (currentTime > 11 && currentTime < 12.7):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("chat", 30, 70);
            break;
        case (currentTime > 12.7 && currentTime < 15):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("chance", 30, 70);
            break;
        case (currentTime > 15 && currentTime < 16.5):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("cat", 30, 70);
            break;
        case (currentTime > 16.5 && currentTime < 19):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("kitkat", 30, 70);
            break;
        case (currentTime > 19 && currentTime < 20.5):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("app", 30, 70);
            break;
        case (currentTime > 20.5 && currentTime < 22):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("ape", 30, 70);
            break;
        case (currentTime > 22 && currentTime < 24):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("apple", 30, 70);
            break;
        case (currentTime > 24 && currentTime < 25.5):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("track", 30, 70);
            break;
        case (currentTime > 25.5 && currentTime < 27):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("tracking", 30, 70);
            break;
        case (currentTime > 28 && currentTime < 30):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("amazon", 30, 70);
            break;
        case (currentTime > 30 && currentTime < 32):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("magzine", 30, 70);
            break;
        case (currentTime > 32 && currentTime < 34):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("back", 30, 70);
            break;
        case (currentTime > 34 && currentTime < 36):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("background", 30, 70);
            break;
        case (currentTime > 36 && currentTime < 38):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("map", 30, 70);
            break;
        case (currentTime > 38 && currentTime < 40):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("google map", 30, 70);
            break;
        case (currentTime > 40 && currentTime < 41.5):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("cab", 30, 70);
            break;
        case (currentTime > 41.5 && currentTime < 43):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("cap", 30, 70);
            break;
        case (currentTime > 43 && currentTime < 44.5):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("cop", 30, 70);
            break;
        case (currentTime > 44.5 && currentTime < 46):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("cup", 30, 70);
            break;
        case (currentTime > 46 && currentTime < 48):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("hidden", 30, 70);
            break;
        case (currentTime > 48 && currentTime < 50):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("width", 30, 70);
            break;
        case (currentTime > 50 && currentTime < 52):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("pass", 30, 70);
            break;
        case (currentTime > 52 && currentTime < 54):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("path", 30, 70);
            break;
        case (currentTime > 54 && currentTime < 56):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("zoo", 30, 70);
            break;
        case (currentTime > 56 && currentTime < 58):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("zen", 30, 70);
            break;
        case (currentTime > 58):
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("zenfone", 30, 70);
            break;
    }
}

pAudio.addEventListener("timeupdate", timeUpdate, false);
pAudio.addEventListener("canplaythrough", function () {
    duration = pAudio.duration;
}, false);

timeline.addEventListener("click", function (event) {
    moveplayhead(event);
    pAudio.currentTime = duration * clickPercent(event);
}, false);

function clickPercent(e) {
    return (e.pageX - timeline.offsetLeft) / timelineWidth;
}

playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that mouse is moved on mouseUp only when the playhead is released 
var onplayhead = false;
// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    pAudio.removeEventListener('timeupdate', timeUpdate, false);
}
// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(e) {
    if (onplayhead == true) {
        moveplayhead(e);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        pAudio.currentTime = duration * clickPercent(e);
        pAudio.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}

// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(e) {
    var newMargLeft = e.pageX - timeline.offsetLeft;
    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        pHead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        pHead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        pHead.style.marginLeft = timelineWidth + "px";
    }
}
