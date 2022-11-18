var LeaderboardEntriesDemo = pc.createScript('leaderboardEntriesDemo');

LeaderboardEntriesDemo.prototype.initialize = function() {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalLeaderboardGetEntriesAsync("global", 10).then(entries => {
            var log = "Entry count: " + entries.length;
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
