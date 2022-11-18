var LeaderboardPlayerDemo = pc.createScript('leaderboardPlayerDemo');

LeaderboardPlayerDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalLeaderboardGetPlayerEntryAsync("global").then(entry => {
            var log = "Player rank: " + entry.getRank();
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
