var ContextUpdateDemo = pc.createScript('contextUpdateDemo');

ContextUpdateDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalContextUpdateAsync({
            image: createImg(256, 256),
            text: 'Update',
            caption: "Play",
            data: {game: "da test"},
        }).then(() => {
            var log = "Updated context: " + wortalContextGetId();
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
