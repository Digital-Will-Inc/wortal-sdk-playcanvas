var ContextChooseDemo = pc.createScript('contextChooseDemo');

ContextChooseDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalContextChooseAsync('Invite to play', createImg(256, 256), {
            caption: "Invite to play",
        }).then(() => {
            var log = "New context: " + wortalContextGetId();
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};

