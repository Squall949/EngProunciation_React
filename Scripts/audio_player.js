var Audio = React.createClass({
    displayName: "Audio",
    render: function () {
        return (
            React.createElement("audio", { id: "audio" },
                React.createElement("source", { src: "../Music/sound.mp3", type: "audio/mpeg" })
            )
        );
    }
});

var Button = React.createClass({
    displayName: "Button",
    onButtonClick: function () {
        var audio = document.getElementById("audio");
        var pButton = document.getElementById('pButton');
        if (audio.paused) {
            audio.play();
            pButton.className = "pause";
        } else {
            audio.pause();
            pButton.className = "play";
        }
    },
    render: function () {
        return (
            React.createElement("button", { id: "pButton", className: "play", onClick: this.onButtonClick })
        );
    }
});

var Playhead = React.createClass({
    displayName: "Playhead",
    render: function () {
        return (
            React.createElement("div", { id: "playhead" }
            )
        );
    }
});

var Timeline = React.createClass({
    displayName: "Timeline",
    render: function () {
        return (
            React.createElement("div", { id: "timeline" },
                React.createElement(Playhead, null)
            )
        );
    }
});

var Player = React.createClass({
    displayName: "Player",
    render: function () {
        return (
            React.createElement("div", { id: "audioplayer" },
                React.createElement(Button, null),
                React.createElement(Timeline, null)
            )
        );
    }
});

var Comp = React.createClass({
    displayName: "Comp",
    render: function () {
        return (
            React.createElement("div", null,
                React.createElement(Audio, null),
                React.createElement(Player, null)
            )
        );
    }
});

React.render(
React.createElement(Comp, null),
document.getElementById('content')
);