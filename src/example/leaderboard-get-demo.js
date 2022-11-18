var LeaderboardGetDemo = pc.createScript('leaderboardGetDemo');

LeaderboardGetDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalLeaderboardGetLeaderboardAsync("global").then(board => {
            var log = "Leaderboard name: " + board.name;
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
