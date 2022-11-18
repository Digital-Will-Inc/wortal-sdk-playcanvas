var ContextUpdateDemo = pc.createScript('contextUpdateDemo');

ContextUpdateDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalContextUpdateAsync('Update', createImg(256, 256),
            {
                caption: "Play",
                data: { game: "da test" },
            }).then(() => {
            var log = "Updated context: " + wortalContextGetId();
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
