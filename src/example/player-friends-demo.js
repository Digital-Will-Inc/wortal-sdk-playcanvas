var PlayerFriendsDemo = pc.createScript('playerFriendsDemo');

PlayerFriendsDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalPlayerGetConnectedPlayersAsync({
            size: 20,
        }).then(players => {
            var log = "Player 1 name: " + players[0].name;
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
