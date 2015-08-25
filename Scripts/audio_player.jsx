var Audio = React.createClass({
    render: function () {
        return (
            <audio id="audio">
                <source src="../Music/sound.mp3" type="audio/mpeg" />
            </audio>
        );
    }
});

var Button = React.createClass({
    onButtonClick : function(){
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
            <button id="pButton" className="play" onClick={this.onButtonClick}></button>
        );
}
});

var Playhead = React.createClass({
    render: function () {
        return (
            <div id="playhead">
            </div>
        );
    }
});

var Timeline = React.createClass({
    render: function () {
        return (
            <div id="timeline">
                <Playhead />
            </div>
        );
    }
});

var Player = React.createClass({
    render: function () {
        return (
            <div id="audioplayer">
                <Button />
                <Timeline />
            </div>
        );
    }
});

var Comp = React.createClass({
    render: function () {
        return (
            <div>
                <Audio />
                <Player />
            </div>
        );
    }
});

React.render(
<Comp />,
document.getElementById('content')
);