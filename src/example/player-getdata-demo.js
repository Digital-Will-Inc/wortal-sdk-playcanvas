var PlayerGetdataDemo = pc.createScript('playerGetdataDemo');

PlayerGetdataDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalPlayerGetDataAsync(['items', 'lives']).then(data => {
            var log = "Coins count: " + data['items'].coins;
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
