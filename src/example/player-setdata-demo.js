var PlayerSetdataDemo = pc.createScript('playerSetdataDemo');

PlayerSetdataDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalPlayerSetDataAsync({
            items: {
                coins: 100,
                boosters: 2
            },
            lives: 3,
        }).then(_ => {
            var log = "Data set";
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
