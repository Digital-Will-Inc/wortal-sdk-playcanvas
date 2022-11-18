var PlayerIdDemo = pc.createScript('playerIdDemo');

PlayerIdDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        let id = wortalPlayerGetID;
        var log = "Player ID: " + id;
        console.log(log);
        app.fire("log:add", log);
    }, this);
};
