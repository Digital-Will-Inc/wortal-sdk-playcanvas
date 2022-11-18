var LeaderboardAddDemo = pc.createScript('leaderboardAddDemo');

LeaderboardAddDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalLeaderboardSendEntryAsync("global", 100).then(entry => {
            var log1 = "Entry player: " + entry.getPlayer().getName();
            var log2 = "Entry rank: " + entry.getRank();
            console.log(entry);
            console.log(log1);
            app.fire("log:add", log1);
            console.log(log2);
            app.fire("log:add", log2);
        });
    }, this);
};
